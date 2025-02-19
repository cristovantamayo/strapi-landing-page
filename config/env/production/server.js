// Path: ./config/env/production/server.js`
module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://strapi-landing-page-84e3fa2a7657.herokuapp.com/"), // Sets the public URL of the application.
  app: {
    keys: env.array([
      "S+8Tfrt/Kss6tRY8kG+1Pg==",
      "zVuFDznUMVuTqltMbTtLng==",
      "JP39FOQwsdc6BnXLcOJIGQ==",
      "la4vf3L9n/j8ztLYfVf8ug==",
    ]),
  },
});
