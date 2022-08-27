# Simple Quote Application

This is simple quote application developed using react-native; it contains a preloaded quotes which gives you guide and view of how it looks. The app allow users to perform CRUD operations which are : You can add a quote, Update a quote, Delete an existing quote and view quotes alredy added.

## Table of Contents

* [Installation](#Installation)
* [Alternatively download the React Native APK Test App](#Alternatively download the React Native APK Test App)

## Installation

How to Install & test the React Native App

```bash
git clone https://github.com/peterchijioke/crud-app-react-native.git
cd crude-app
yarn install
yarn android
```
    
   - I reommend you use yarn instead of npm
    
## Alternatively download the React Native APK Test App

- [Android APK: ](#https://drive.google.com/file/d/1cAdPBxgoFSXggjaPyQk5ozgrN2ihIag3/view?usp=sharing)

## Steps taken to build this app include:
- Create a react native application using ```npx react-native init crud-app```
- Install redux-tookit, note that redux-toolkit is dependent on react-redux, so you must install both; You can run this command to install both ```npm install @reduxjs/toolkit react-redux```
- Set up redux-toolkit for the state management: you can follow through the set up documentation at https://redux-toolkit.js.org/tutorials/quick-start
- Create your Slices
- Preload you state with array of objects : Just to let the user have somthing to feel on first render.

## Tech Stack

**Client:** Bare React-Native, Redux Toolkit

**Server:** Fake server


## Features

- Create quote
- Delete quote
- Update quote
- Cross platform (Android & ios)

## Screenshots

![](/image1.jpg)
![](/image2.jpg)

