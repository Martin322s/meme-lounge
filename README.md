# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Application Requirements Documentation

This documentation outlines the requirements for the GitHub project "Application Requirements." The project aims to create a web application with specific features and functionality. Below are the detailed requirements for each component of the application.

## 1. Navigation Bar (5 pts)

- Implement a navigation bar that allows users to navigate the application.
- Navigation links should correctly change the current screen or view.
- For guests (unauthenticated visitors), display links to the Home Page, All Memes page, Login, and Register pages.
- For logged-in users, the navigation bar should include links to the All Memes page, Create Meme, Welcome, user's email address, My Profile, and a Logout action.

### User Navigation Example:
Guests (un-authenticated visitors) can see the links to the Home Page, All Memes page, as well as the links to the Login and Register pages. 

### Guest Navigation Example:
The logged-in user navbar should contain the links to All Memes page, the Create Meme page, Welcome, { user’s email address }, My Profile page and a link for the Logout action.

## 2. Home Screen (5 pts)

- The initial screen should display navigation, register, login options, an initial image, and a footer.
- This page should only be visible to guest users.
- Logged-in users should be redirected to the All Memes page.

- ## 3. Login User (5 pts)

- Provide a form for existing user authentication.
- Users can log in by providing their email and password.
- If any fields are empty, display an error.
- Upon successful login, redirect the user to the All Memes page.
- Handle errors or validation issues with appropriate error messages using a system dialog (window.alert).
