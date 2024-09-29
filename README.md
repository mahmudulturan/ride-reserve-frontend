# Ride Reserve - Car Rental Reservation System

## Overview

**Ride Reserve** is a fully functional car rental reservation platform built to provide an intuitive experience for both customers and administrators. The system allows users to browse available cars, make bookings, manage personal details, and handle payments, while admins can manage car listings, user accounts, bookings, and generate reports.

The platform is built with a focus on user-friendly design, responsiveness, and seamless integration with the backend.

---

## Features

### Public Pages
- **Home Page**: Features a hero banner, car search bar, and a carousel for featured cars. Includes customer testimonials and a company footer.
- **Car Listing Page**: Displays all available cars with filters for car type, price range, etc.
- **Car Details Page**: Displays detailed information about each car, including pricing, features and availability etc.
- **About Us Page**: Provides details about the company, team members, and car fleet.
- **Error Page (404)**: Custom error page with helpful navigation options.

### User Authentication
- **Sign Up**: Form with real-time validation for new user registration.
- **Sign In**: Allows users to log in and recover passwords.
- **Private Routes**: Access to user dashboard after login.

### User Dashboard
- **Profile Management**: View and update personal details.
- **Booking History**: Manage current and past bookings.
- **Payment**: Secure SSLCOMMERZ payment gateway system integrated for completing bookings.

### Admin Dashboard
- **Car Management**: Add, update, or delete car listings.
- **Booking Management**: View and manage customer bookings.
- **User Management**: Block/Unblock accounts and change user roles.

### Booking System
- **Search Cars**: Users can search and filter available cars based on type.
- **Booking Form**: Form to submit personal details and finalize reservations.
- **Payment Integration**: Secure online payments via local gateways SSLCommerz.

### Others Features
- **Dark/Light Mode**: Theme switcher with system theme support.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.

---

## Tech Stack

### Frontend:
- **React:** JavaScript library for building user interfaces.
- **Redux:** State management for predictable and efficient state updates.
- **React Router:** Handles navigation between pages.
- **Styled Components:** For styling components with a modular and reusable approach.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmudulturan/ride-reserve-frontend
   cd ride-reserve-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
    ```

3. Set up environment variables:
    - Create a .env file in the root directory and define the following variables:
   ```bash
   VITE_SERVER_BASE_URL=http://exampleurl/api
   VITE_CLOUDINARY_CLOUD_NAME=******
   VITE_CLOUDINARY_UPLOAD_PRESET=my_example_preset
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
### For Users:
- Navigate to the homepage to search for available cars.
- View detailed car information, select options, and make a reservation.
- Log in to access the user dashboard to manage bookings and payments.
### For Admins:
- Log in with admin credentials to access the admin dashboard.
- Manage car listings, approve/cancel bookings, and handle user management.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to make.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request


## Contact
For any inquiries, contact me via:

- Email: mahmudulhasanturan@gmail.com
- Portfolio: [Md. Mahmudul Hasan](https://mahmudulturan.dev "Visit my portfolio.").