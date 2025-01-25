# Mavs

## Purpose

This repository contains the **Mavs** application, a Marvel superhero catalog. Users can explore a vast collection of Marvel superheroes, like their favorite characters, and add comments in the character detail view. The application also allows users to search for any Marvel superhero and provides options to sign up and log in.

## Features

- **Like Characters**: Users can like their favorite Marvel superheroes.
- **Add Comments**: Users can leave comments on individual character detail pages.
- **Search Functionality**: Search across the entire Marvel superhero database.
- **Sign Up**: Create an account to interact with the app.
- **Login**: Log in to access features like liking and commenting.

## Usage

1. **Clone the Repository**:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install Dependencies**:
   This project uses `npm` for dependency management. Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   - Refer to the `.env.example` file for the required environment variables.
   - Copy `.env.example` and rename it to `.env`. Update the variables as per your configuration.

4. **Run the Project Locally**:

   - Start the development server using:
     ```bash
     npm run dev
     ```
   - The application will typically be available at `http://localhost:5173`.

5. **Build for Production**:
   - To build the project for production, execute:
     ```bash
     npm run build
     ```
   - The production build will be located in the `dist` folder.

## Technologies

This project leverages the following technologies:

- **TypeScript**: For type safety and improved development experience.
- **React**: Core library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Query**: For managing server state and data fetching.
- **React Hook Form**: For managing forms and user input.

## Contribution

Contributions are welcome! While there is no specific contribution guideline at the moment, feel free to fork the repository, create a branch, and submit a pull request with your changes.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
