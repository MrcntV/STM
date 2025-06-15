module.exports = {
  apps: [
    {
      name: "stm-serveur",
      script: "./serveur/serveur.js",
      interpreter: "node",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 4242,
      },
      max_restarts: 5,
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      log_file: "./logs/combined.log",
      time: true,
    },
  ],
};
