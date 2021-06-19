# Fumblr

## About

A Tumblr imitation I call Fumblr. Built with Next.js and Firebase. You can upload a jpeg, png or gif file.

View live at [Fumblr](https://fumblr.vercel.app/)

## Install

### Clone the repository

```
git clone https://github.com/MetkelK/Fumblr.git

cd fumblr

npm install
```

### Setup firebase

1.  Go to [firebase](https://firebase.google.com/), click on go to console in the top right corner and log in.
2.  Click on add project, type in a name (google analytics not needed) and click on create project.
3.  Add an app by clicking on web button (</>), type in a name and click register app.
4.  Copy the firebaseconfig object, open the cloned project in your ide and replace the firebase/config.js data with your new data then click continue.
5.  Open the menu on the left, click on firestore database, click on create database, choose start in test mode and pick a location.
6.  Open the menu again, click on storage, click on rules and remove ": if request.auth != null" then click on publish.

### Start locally

```
npm run dev
```
