module.exports = {
  name: 'app1',
  script: 'npm start-prod',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
};