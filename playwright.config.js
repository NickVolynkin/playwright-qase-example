const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['playwright-qase-reporter',
      {
        mode: 'testops',
        fallback: 'report',
        testops: {
          project: 'PWR',
          uploadAttachments: true,
        },
        run: {
          title: 'example test run',
          complete: true
        },
        logging: true,
        debug: true,
      }],
  ],
};
module.exports = config;