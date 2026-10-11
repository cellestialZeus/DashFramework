``` 
# Dash Framework  
This automation testing framework utilizes TypeScript with Playwright.  

## Setup  
- Install dependencies  
  ```bash
  npm install
  ```  
- Execute the Playwright test suite  
  ```bash
  npx playwright test
  ```  
- Run a specific test file  
  ```bash
  npx playwright test tests/first-test.spec.ts
  ```  
- Run in headed mode for debugging  
  ```bash
  npx playwright test --headed
  ```  
- Display the HTML report  
  ```bash
  npx playwright show-report
  ```  

## Add a new test  
Create a new file in the `tests` directory following the conventions established in `test.spec.ts`.  

## GitHub  
- Initialize and configure the repository  
  ```bash
  git init
  git add .
  git commit -am "message?"
  git remote add origin <your-repo-url>
  ```  
- Push to the remote repository  

  - If the repository uses `master`:  
    ```bash
    git push origin master
    ```  
  - If the repository uses `main`:  
    ```bash
    git branch -M main
    git push -u origin main
    ```  

- Synchronize with the remote `main` branch (if necessary)  
  ```bash
  git pull --rebase origin main
  ```  

- Verify the most recent commit author information using Git:  
  ```bash
  git log -1 --format=text
  ```  

- Update the most recent commit author to match your GitHub profile  
  ```bash
  git -c user.name="your-github-username" commit --amend --reset-author --no-edit
  ```  

- Push the amended commit cautiously  
  ```bash
  git push --force-with-lease
  ```  
```