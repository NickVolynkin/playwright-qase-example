const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['playwright-qase-reporter',
      {
        projectCode: 'PWR',
        runComplete: true,
        logging: true,
        uploadAttachments: true,
      }],
  ],
};
module.exports = config;