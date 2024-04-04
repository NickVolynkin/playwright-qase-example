# Example of Playwright tests reporting to Qase.io

## Initialise the project

```bash
npm install 
npx playwright install
```

## Set up integration with Qase

1.  Get a token in the Apps → Playwright section.
2.  Make a project with any name and slug `PWR` (for Playwright).
3.  Set env variables:

    ```bash
    export QASE_REPORT=1   
    export QASE_API_TOKEN=insert token here
    ```
   
# Run the tests

```bash
npx playwright test
```

You should see output similar to this:
    
```log
qase: Current PID: 3465
    
Running 1 test using 1 worker
    
     1 tests/google.test.js:8:3 › Example tests › Google homepage has the correct title (Qase ID: 1)
qase: Project PWR exists
  ✓  1 tests/google.test.js:8:3 › Example tests › Google homepage has the correct title (Qase ID: 1) (1.7s)
qase: Test Google homepage has the correct title (Qase ID: 1) passed
qase: Start publishing: Google homepage has the correct title (Qase ID: 1)
qase: Result prepared for publish: Google homepage has the correct title (Qase ID: 1) 
    
  1 passed (2.1s)
qase: 1 result(s) sent to Qase
qase: Run 21 completed
qase: https://app.qase.io/run/PWR/dashboard/1
Time: 0h:00m:04s        
```