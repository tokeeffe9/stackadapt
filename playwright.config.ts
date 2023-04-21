import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        ignoreHTTPSErrors: true
      }
    }
  ],
  testDir: "tests/",
  use: {
    baseURL: "http://stackadapt-interview.us-east-1.elasticbeanstalk.com/",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 0,
  workers: 3,
  reporter: [["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;
