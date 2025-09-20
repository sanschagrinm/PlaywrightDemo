A small project to demonstrate my knowledge of many features from the playwright framework.
This project runs UI tests and API tests

a github action has automatically been created to run the tests on every PR.
i modified this action to specify the environment variable with dotenvx.

later on i will add K6 performance tests on endpoint to this repository.

To execute project make sure you specify the demo environment by prefixing your command to launch tests with ENV=demo.
for example to run tests you can input ENV=demo npx playwright test or ENV=demo npx playwright test --ui to run tests one by one in the playwright ui

