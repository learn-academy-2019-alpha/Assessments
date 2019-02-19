# Assessments

## Get the Assessments to your computer:

1. Click the "Fork" button on the top right (under the navbar)
2. You will now find your own copy of the project saved under your repositories
3. `git clone` your copy onto your machine

## Make your changes and push your progress:

1. Open the repo in atom on your computer
2. Choose the week you want to work on and rename the file to your name (first and last) and the week number
3. Run `git add .` to add your files to staging
4. Run `git commit` to 'save' the changes to your staged files
4. Finally, run `git push` your changes to Github


## Push to Github and make a pull request:

1. Make sure you have pushed your local changes 
2. Go to your assessment repo on Github to check that the version there is what you want to submit
3. Go to your organization's Assessment repo
4. Click the "New Pull Request" button
5. On the pull request page, find the link to "compare across forks" and click it
6. You will see two forks - find the "head" fork dropdown (3rd from the left), find and select your repo
7. Give your pull request a title and any notes, then click "Create"

## Updating your repo:
** This is the process to pull changes from the origin repo to your branch:

1. Copy the url for your organization's assessments repo
2. Make sure you are on branch master (`git checkout` into master on your machine)
3. Run `git remote add upstream <pasted url>`
4. Run `git pull upstream master` to get remote changes
