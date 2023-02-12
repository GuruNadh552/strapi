require("dotenv").config();
module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // for email
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", process.env.SMTP_HOST),
        port: env("SMTP_PORT", process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: process.env.DEFAULT_EMAIL,
        defaultReplyTo: process.env.DEFAULT_EMAIL,
      },
    },
  },
});
