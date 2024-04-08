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
          run: {
            complete: true,
          },
          uploadAttachments: true,
          defect: false,
        },
        debug: true,
      }],
  ],
};
module.exports = config;