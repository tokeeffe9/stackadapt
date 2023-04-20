# StackAdapt Assignment

Purpose of this framework is to create five MVP testcases along with a specifc testcase to test. 
The five test cases I choose were set to capture as much test coverage as possible as they are based around sign in, login and using the tasks feature of the site.
Along with this there was a bonus assigment to reset the data on each run to avoid any manual intervention. 

## Prerequisites

To run this project, you'll need to have the following installed:

- Visual Studio Code - https://code.visualstudio.com/
- Node JS - https://nodejs.org/en

## Installation

To install Playwright and the necessary dependencies, run the following command:

```npm install```

## Configuration

playwright.config.ts has been setup to do the following

- Run tests on chromium
- Only tests in ```tests``` directory will be run
- ```baseURL``` of the site has been setup
- Headless has been set to false so browsers will be visible
- No retries are performed
- Json and HTML reports are generated with screenshots and video when there is a failure

## Data

The tests have been made standalone so as not to impact other tests or sessions. All the data used has been created with the browser in mind. As of now, there is data setup for running on chromium and firefox.
When a test runs and logs in, it will do so as follows ```$browsername + (user-details.json).email``` I did it like this so one could run both in parallel.
Once a test has completed it's verification, it will reset the data for future runs.

There are limitations with this approach
- Any failure will most likely mean that data will need to be reset manually
- New user data will need to be set for each new browser/emulator tested on

In a full scale framework, my preferred approach would be to clean data and use APIs to populate data before each test run.

## Running the Tests

To run the tests, follow these steps:

1. Open your terminal/command line and navigate to base directory of this project
2. Run the following command
```npm test```

If you wish to run for specifc browsers are devices, these can be updated in playwright.config.ts however depending on the browser, you may need to create new test data as so far only data has been created for chromium and firefox.

Once the tests have run, you can run ```npm run report``` to load the report in html. Any failures will have a screenshot and video attached

## Scripts
I have made a few script shortcuts for this project
```npm test``` - will run the tests
```npm record``` - will open the playwright recording tool 
```npm run html``` - will take user to the html report from the previous run


## Contact

If you have any questions or feedback about this project, please contact  `tokeeffe9@gmail.com`.