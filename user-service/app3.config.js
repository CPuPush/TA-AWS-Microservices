module.exports = {
  name: 'app3',
  script: 'start-prod',
  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
};