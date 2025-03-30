# Conference Ticket Generator

A web application that allows users to generate their conference tickets by providing their name, email, GitHub username, and uploading an avatar. The app validates inputs, ensures proper image uploads, and generates a ticket with a unique ID.

## Features

- **Avatar Upload**: Users can upload an avatar image via drag-and-drop or by selecting a file manually.
- **Image Validation**: Supports JPG and PNG files with a maximum size of 500KB.
- **Image Management**:
  - Users can remove or change their uploaded image.
  - Once an image is uploaded, drag-and-drop is disabled.
- **Form Validation**:
  - Ensures that name, email, and GitHub username fields are not empty.
  - Validates email format.
- **Ticket Generation**:
  - Displays user details on a generated conference ticket.
  - Assigns a unique ID to each ticket.
- **Error Handling**:
  - Displays appropriate error messages for invalid inputs.
  - Prevents duplicate or oversized image uploads.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/conference-ticket-generator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd conference-ticket-generator
   ```
3. Open `index.html` in your browser.

## Usage

1. Enter your full name, email, and GitHub username.
2. Upload an avatar image (JPG/PNG, max 500KB).
3. Click the "Generate My Ticket" button.
4. View your generated ticket with your details and unique ID.

## Preview
Check out the site at https://confrence-ticket-generator.netlify.app/

## Technologies Used

- HTML
- CSS
- JavaScript

## Author
Developed by [Munachi]([https://github.com/yourusername](https://github.com/munachi821)).



