module.exports = {
  apps: [
    {
      name: 'chartman2.fr',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      port: '80',
      env_production: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ],

  // Deployment Configuration
  deploy: {
    production: {
      key: '/home/toofytroll/.ssh/id_ed25519.pub',
      user: 'deploy',
      host: ['51.75.194.189'],
      ssh_options: 'Port=49604',
      ref: 'origin/main',
      repo: rocess.env.GITHUB_URL,
      path: '/var/www/websites/chartman2.fr/frontend-v3',
      'post-deploy': 'sh /home/deploy/chartman2.fr/frontend-v3/deploy.sh'
    },
    staging: {
      key: '/home/toofytroll/.ssh/id_ed25519.pub',
      user: 'toofytroll',
      host: ['192.168.1.225'],
      ssh_options: 'Port=22',
      ref: 'origin/develop',
      repo: rocess.env.GITHUB_URL,
      path: '/var/www/chartman2.fr/frontend-v3',
      'post-deploy': 'sh /home/toofytroll/chartman2.fr/frontend-v3/deploy.sh'
    }
  }
}
