# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## 3. Login User (5 pts)

- Provide a form for existing user authentication.
- Users can log in by providing their email and password.
- If any fields are empty, display an error.
- Upon successful login, redirect the user to the All Memes page.
- Handle errors or validation issues with appropriate error messages using a system dialog (window.alert).

  ## 4. Register User (10 pts)

- Allow users to register by providing a username, email, password, and gender (Male or Female).
- All fields are required, and empty fields should trigger an error message.
- Send a POST request to perform registration.
- Upon successful registration, redirect the user to the All Memes page.
- Handle errors or validation issues with appropriate error messages using a system dialog (window.alert).

## 5. Logout (5 pts)

- Provide a Logout action for logged-in users.
- Send a GET request to perform logout.
- Upon successful logout, clear any session information stored in browser storage.
- Redirect the user to the Home page after logout.

## 6. Create Meme Screen (15 pts)

- Available to logged-in users only.
- Display a form for creating a new meme.
- Check that all fields are filled before sending the request.
- Send a POST request to create a meme.
- Redirect the user to the All Memes page upon successful creation.

## 7. All Memes (10 pts)

- Display a list of all memes in the system.
- Guests and logged-in users should have access to this page.
- If there are no memes, display a specific view.
- Send a GET request to read the list of memes sorted by creation date.

## 8. Meme Details (10 pts)

- Allow all users to view details about memes.
- Clicking on the Details link of a meme card should display the Details page.
- If the logged-in user is the meme creator, display Edit and Delete buttons; otherwise, hide them.
- Send a GET request to read a single meme by its ID.

## 9. Edit Meme Screen (15 pts)

- Available to logged-in users.
- Clicking the Edit link of a particular meme on the Details page should display the Edit page.
- Pre-fill the form with existing meme data.
- Check that all fields are filled before sending the request.
- Send a PUT request to update the meme.
- Redirect the user to the Details page upon successful update.

## 10. Delete Meme (10 pts)

- Available to logged-in users who have created the meme.
- Display a confirmation dialog before deleting a meme.
- Send a DELETE request to delete the meme.
- Redirect the user to the All Memes page upon successful deletion.

## 11. User Profile (10 pts)

- Allow logged-in users to view their own profile.
- Display the user's username, email, and My memes count.
- The user's gender determines the avatar displayed.
- If the user has no memes, display a specific view.
- Send a GET request to retrieve the user's memes.

## 12. Bonus: Notifications (10 pts)

- Display error notifications that disappear after 3 seconds in case of user-related errors.
- Errors may include validation errors or error messages from the REST service.
- Implement this feature on the Register, Login, Create, and Edit pages.
