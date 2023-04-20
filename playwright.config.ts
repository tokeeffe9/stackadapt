import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"]
    //   }
    // }
  ],
  testDir: "tests/",
  use: {
    baseURL: "http://stackadapt-interview.us-east-1.elasticbeanstalk.com/",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 200
    // }
  },
  retries: 0,
  reporter: [["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;
