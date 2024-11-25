// path: .ecosystem.config.js"
module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
