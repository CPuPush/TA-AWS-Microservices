module.exports = {
  name: 'app2',
  script: 'npm start-prod',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
};