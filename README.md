# Dog Management App

## Overview

Dog Management App is a React Native application with CRUD functionality, allowing users to manage a list of dogs. This app interacts with a backend API built using Node.js and Express, and a MongoDB database.

## Features

- View a list of dogs
- Add a new dog
- Edit an existing dog
- Delete a dog

## Technologies Used

- **Frontend**: React Native, React Navigation
- **Backend**: Node.js, Express, MongoDB
- **Environment Management**: react-native-dotenv

## Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## Setup Instructions

### Cloning the Repository

1. Clone the repository:
   ```bash
   git clone --branch production https://github.com/gorvok/dog-management-app.git
   cd DogManagementApp
   ```
   
## Install Dependencies
   ```bash
   npm install
   ```
1. Create a `.env` file in the root of the project and add in your backend URL:
   - For this example we will use my template backend URL
      ```bash
      REACT_APP_BACKEND_URL=https://dog-app-api.onrender.com
      ```
   - This is from the Api that I built at https://github.com/Gorvok/dog-app-api.git you can take a look at that as well.

2. Install CocoaPods dependencies (iOS only)
   ```bash
   cd ios
   pod install
   ```
   
3. Run the application within the terminal
   - In your initial terminal within the root project folder run this snippit for React Native
      ```bash
      npx react-native start
      ```
4. Open 2 more terminal tabs
   - iOS:
      ```bash
      npx react-native run-ios
      ```
   - Android:
      ```bash
      npx react-native run-android
      ```
     
## License
This project is licensed under the MIT License

## Live Site
- Check out the live site: [Dog Management App](https://dog-app-api-fsu.netlify.app/)
