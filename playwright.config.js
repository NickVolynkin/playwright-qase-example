const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['playwright-qase-reporter',
      {
        testops: {
          project: 'PWR',
          uploadAttachments: true,
        },
        run: {
          complete: true
        },
        logging: true,
        debug: true,
      }],
  ],
};
module.exports = config;