module.exports = {
  apps: [
    {
      name: "STM-Server",
      script: "./serveur/serveur.js",
      cwd: "/STM",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};
