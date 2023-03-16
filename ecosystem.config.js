require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'chartman2.fr',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './.output/server/index.mjs',
      port: 6000,
      host: '127.0.0.1',
      env_production: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ],

  // Deployment Configuration
  deploy: {
    production: {
      key: process.env.PRODUCTION_SSH_KEY,
      user: process.env.PRODUCTION_USER,
      host: [process.env.PRODUCTION_HOST],
      ssh_options: process.env.PRODUCTION_SSH_OPTIONS,
      ref: 'origin/main',
      repo: process.env.GITHUB_URL,
      path: process.env.PRODUCTION_PATH,
      'post-deploy': process.env.PRODUCTION_DEPLOY_SCRIPT
    },
    staging: {
      key: process.env.STAGING_SSH_KEY,
      user: process.env.STAGING_USER,
      host: [process.env.STAGING_HOST],
      ssh_options: process.env.STAGING_SSH_OPTIONS,
      ref: 'origin/develop',
      repo: process.env.GITHUB_URL,
      path: process.env.STAGING_PATH,
      'post-deploy': process.env.STAGING_DEPLOY_SCRIPT
    }
  }
}
