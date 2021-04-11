# Minta-Exam

## Installation

Step:

`git clone https://github.com/AmirAdarGit/Minta-Exam.git`

Install the dependancies

`npm install`

In the root folder change directory to init.clickOnUsCase.js

`cd src/actions`

open init.thunk.js in your aditor

`vi clickOnUsCase.thunk.js`

You will have to set the correct jwt in clickOnUsCase.thunk.js an the authToken varible.

`const authToken = process.env.REACT_APP_MINTA_AUTH_TOKEN`

After you insert the corretct token, change directory back to the root folder

`cd ../..`

Now you can run `npm start` to run the app.

enjoy :)
