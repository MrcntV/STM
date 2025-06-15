module.exports = {
  apps: [
    {
      name: "STM-Server",
      script: "./serveur/serveur.js",
      cwd: "/STM",
      interpreter: "node",
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
      max_restarts: 5,

      env: {
        NODE_ENV: "production",
        PORT: 4242,
      },

      // Logging
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_file: "./logs/combined.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      time: true,
    },
  ],
};
