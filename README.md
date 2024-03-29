# ESC-C3G3-Ascenda
## Group Members
1. Joyce Lim 1005307
2. Christopher Wah Boon Chuan 1005214
3. Shaun Neo Kay Hean 1005201
4. Amrita Shah 1005253
## Collaborating
This is to get everyone familiarise with github commands and to get everyone started on the project. Start by cloning this project using `git clone`:
```
git clone https://github.com/joyceeqq/ESC-C3G3-Ascenda.git
```
When working on a feature, please create a new branch in the following format `<name>-<featurename>` with the following command:
```
# This is to get the updated main branch
git checkout main
git pull origin main

# Create your branch
git checkout -b <name>-<featurename>
```
Do you edits as you please (Example: Add your name under Group Members in the README.md file). Next, stage your changes:
```
git add .
```
Commit your changes:
```
git commit -m "This is your DETAILED commit message"
```
You can then go ahead and submit a pull request to the main branch using the Github website!
## Check backend connection before running project
```
cd backend
node server1.js
```

Do ensure that the server is running before moving on to the next step.
## How to run project (After cloning + pulling from main)
Open a new terminal and cd to the directory `frontend` from your current location
```
cd frontend
```
Execute the below command:
```
npm start
```