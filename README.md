## OTP Generator & Validator

This project implements a simple One-Time Password (OTP) generator and validation system using HTML, CSS, and JavaScript. The goal is to provide a secure and user-friendly way to generate and validate OTPs for sensitive actions, such as logging in or verifying transactions.

## Key Features:
 - **OTP Generation**: Generates a 4-digit OTP (One-Time Password) when the user clicks a button.
 - **OTP Validation**: Validates the entered OTP against the generated OTP and checks if it is expired.
 - **User Feedback**: Displays messages based on whether the OTP is valid, expired, or incorrect.

## Technologies Used:
 - **HTML**: For the structure of the web page.
 - **CSS**: For styling and making the user interface visually appealing.
 - **JavaScript**: For OTP generation logic, validation, and interaction handling.

## How It Works:

### 1. OTP Generation:
- When the "Generate OTP" button is clicked, a random 4-digit OTP is generated using JavaScript's `Math.random()` function and displayed on the page.
- The OTP is stored in a variable and can be validated later.

### 2. OTP Validation:
- The user inputs the OTP into a text box and clicks "Validate OTP."
- The inputted OTP is checked against the generated OTP. If they match and the OTP is not expired, the system shows a success message.
- If the OTP has expired (more than 30 seconds since generation), the system prompts the user to generate a new OTP.
