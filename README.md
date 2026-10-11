# Dash Framework  
This automation testing framework utilizes TypeScript with Playwright.  

## Setup  
Install dependencies  
npm install  

Execute the Playwright test suite  
npx playwright test  

Run a specific test file  
npx playwright test tests/first-test.spec.ts  

Run in headed mode for debugging  
npx playwright test —headed  

Display the HTML report  
npx playwright show-report  

Add a new test  
Create a new file in the `tests` directory following the conventions established in `test.spec.ts`.  

## GitHub  
Initialize and configure the repository  
git init  
git add .  
git commit -am “DF Setup”  
git remote add origin <your-repo-url>  

Push to the remote repository  
If the repository uses `master`:  
git push origin master  
If the repository uses `main`:  
git branch -M main  
git push -u origin main  

Synchronize with the remote `main` branch (if necessary)  
git pull —rebase origin main  

Verify the most recent commit author information using Git. log -1 --format=```text
# Update the most recent commit author to match your GitHub profile  
git -c user.name=“your-github-username” commit —amend —reset-author —no-edit  

# Push the amended commit cautiously  
git push —force-with-lease  
