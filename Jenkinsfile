pipeline {
    agent {
        node {
            label 'agent_vuejs_2'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building..'
                    sh('''
                        npm install -g pnpm
                        rm -Rf ./node_modules
                        pnpm install
                        pnpm build
                    ''')
                    
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                script {
                    withCredentials([string(credentialsId: 'sas-judo-backend-test', variable: 'TEST_CREDENTIALS')]) {
                        sh('''
                            echo "API_URL=http://localhost:8000" > ./.env
                        ''')
                        sh("pnpm start &")
                        sh('''
                            pnpm run coverage
                        ''')
                        echo 'Finished tests!'
                    }
                }
            }
        }
        stage('SonarQube Quality Gate') {
            steps {
                echo 'Check quality..'
                script {
                    def scannerHome = tool 'sonarqube-scanner';
                    def sonarqubeBranch = 'chartman2-frontend-v3-dev';
                    withCredentials([string(credentialsId: 'sonarqube-server', variable: 'SONAR_URL')]) {
                        withCredentials([string(credentialsId: 'sonarqubeId', variable: 'SONAR_CREDENTIALS')]) {
                            withSonarQubeEnv("sonarqube") {
                                if (env.BRANCH_NAME == 'main') {
                                    sonarqubeBranch = 'chartman2-frontend-v3'
                                }
                                sh "${scannerHome}/bin/sonar-scanner \
                                        -Dsonar.projectKey=$sonarqubeBranch \
                                        -Dsonar.sources='pages, layouts, components, store' \
                                        -Dsonar.exclusions=public/**/* \
                                        -Dsonar.host.url=$SONAR_URL \
                                        -Dsonar.login=$SONAR_CREDENTIALS \
                                        -Dsonar.testExecutionReportPaths=sonar-report.xml \
                                        -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info"
                            }
                        }
                    }
                }
            }
        }
        stage("Quality Gate") {
            steps {
                script {
                    timeout(time: 1, unit: 'HOURS') {
                        def qualitygate = waitForQualityGate()
                        if (qualitygate.status != "OK") {
                            env.WORKSPACE = pwd()
                            error "Pipeline aborted due to quality gate coverage failure: ${qualitygate.status}"
                        }
                    }
                }
            }
        }
        // stage('Github update') {
        //     steps {
        //         script {
        //             def giteaBranch = env.BRANCH_NAME;
        //             if (env.BRANCH_NAME.startsWith('PR')) {
        //                 echo "PR branch"
        //             } else {
        //                 if (env.BRANCH_NAME == 'main') {
        //                     withCredentials([string(credentialsId: 'github-token', variable: 'GITHUB_CREDENTIALS')]) {
        //                         sh '''
        //                             if git remote | grep github > /dev/null; then
        //                                 git remote rm github
        //                             fi
        //                             git remote add github https://$GITHUB_CREDENTIALS@github.com/tititoof/chartman2-frontend-v3.git
        //                         '''
        //                         sh """
        //                             touch github-update.txt
        //                             git add .
        //                             git commit -m "Github update"
        //                             git push -f github HEAD:main
        //                         """
        //                     }
        //                 }
        //                 echo 'Github finished'
        //             }
        //         }
        //     }
        // }
        stage('Deploy') {
            environment {
                SERVER_SSH = credentials('tititoof_ssh_user_pswd')
                SERVER_IP = credentials('ovh-server-ip')
            }
            steps {
                script {
                    echo 'Deploying....'
                    if (env.BRANCH_NAME == 'main') {
                        withCredentials([sshUserPrivateKey(credentialsId: 'ssh-credentials-id', keyFileVariable: 'keyfile')]) {
                            sh 'sudo mkdir -p ~/.ssh && sudo cp ${keyfile} ~/.ssh/id_ed25519'
                            sh 'sudo chown jenkins:jenkins ~/.ssh && chmod 700 ~/.ssh && chmod 600 ~/.ssh/id_ed25519'
                        }
                        sh '''
                            ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_ed25519 -p2222 $SERVER_SSH@$SERVER_IP "[[ -d /var/www/websites/chartman2/frontend-v3 ]] && echo 'Directory exist' || git clone https://$GITHUB_CREDENTIALS@github.com/tititoof/chartman2-frontend.git /var/www/websites/chartman2/frontend"
                            ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_ed25519 -p2222 $SERVER_SSH@$SERVER_IP "cd /var/www/websites/chartman2/frontend-v3 && git fetch && git checkout main && git pull"
                            ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_ed25519 -p2222 $SERVER_SSH@$SERVER_IP "cd /var/www/websites/chartman2/frontend-v3 && pnpm install"
                            ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_ed25519 -p2222 $SERVER_SSH@$SERVER_IP "cd /var/www/websites/chartman2/frontend-v3 && pnpm build"
                        '''
                    }
                }
            }
        }
    }
}