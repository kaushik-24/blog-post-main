<h1>Postly. </h1>

# Blog Post Website Documentation

This documentation provides an overview of the Blog Post Website project, including setup instructions, environment variables, and scripts. The project is built using Next.js, Prisma, TailwindCSS, and other modern web technologies.

---

## Project Overview

The Blog Post Website is a modern web application built with the following technologies:
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Auth0**: For authentication and authorization.
- **Framer Motion**: For animations.
- **Recharts**: For data visualization.
- **TailwindCSS Animate**: For adding animations to TailwindCSS.

The project is designed to be scalable, modular, and easy to maintain.

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- A GitHub account
- A database (e.g., PostgreSQL, MySQL)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kaushik-24/blog-post-main.git
   cd blog-post
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the necessary variables (see [Environment Variables](#environment-variables) below).

4. **Set Up Prisma**:
   - Run the following command to generate the Prisma client:
     ```bash
     npx prisma generate
     ```
   - Apply migrations to set up the database:
     ```bash
     npx prisma migrate dev
     ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

6. **Build and Start the Production Server**:
   ```bash
   npm run build
   npm start
   ```

---

## Environment Variables

The following environment variables are required for the project to function properly. Add them to your `.env` file:

```env
# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/blog-post"

# Auth0 Configuration
AUTH0_SECRET="your-auth0-secret"
AUTH0_BASE_URL="http://localhost:3000"
AUTH0_ISSUER_BASE_URL="https://your-auth0-domain.auth0.com"
AUTH0_CLIENT_ID="your-auth0-client-id"
AUTH0_CLIENT_SECRET="your-auth0-client-secret"

---

## Dependencies

The project relies on the following dependencies:

| Package                        | Version     | Description                                      |
|--------------------------------|-------------|--------------------------------------------------|
| `@auth0/nextjs-auth0`          | ^3.5.0      | Auth0 integration for Next.js.                   |
| `@fortawesome/fontawesome-free`| ^6.7.2      | FontAwesome icons.                               |
| `@prisma/client`               | ^6.3.1      | Prisma database client.                          |
| `@radix-ui/react-aspect-ratio` | ^1.1.1      | Aspect ratio component.                          |
| `@tabler/icons-react`          | ^3.29.0     | Tabler icons for React.                          |
| `class-variance-authority`     | ^0.7.1      | Utility for managing class variants.             |
| `clsx`                         | ^2.1.1      | Utility for constructing className strings.      |
| `dotenv`                       | ^16.4.7     | Load environment variables from `.env`.          |
| `framer-motion`                | ^12.0.1     | Animation library for React.                     |
| `gsap`                         | ^3.12.7     | Animation library for the web.                   |
| `jose`                         | ^5.9.6      | JavaScript library for JWT and JWS.              |
| `lucide-react`                 | ^0.473.0    | Lucide icons for React.                          |
| `next`                         | 15.1.6      | React framework for server-side rendering.       |
| `react`                        | ^19.0.0     | React library.                                   |
| `react-dom`                    | ^19.0.0     | React DOM library.                               |
| `react-router-dom`             | ^7.1.3      | Routing library for React.                       |
| `react-use`                    | ^17.6.0     | Collection of reusable React hooks.              |
| `recharts`                     | ^2.15.1     | Charting library for React.                      |
| `styled-components`            | ^6.1.14     | CSS-in-JS library for styling.                   |
| `tailwind-merge`               | ^2.6.0      | Utility for merging TailwindCSS classes.         |
| `tailwindcss-animate`          | ^1.0.7      | TailwindCSS plugin for animations.               |

---

## Dev Dependencies

The following development dependencies are used:

| Package                | Version | Description                                      |
|------------------------|---------|--------------------------------------------------|
| `@eslint/eslintrc`     | ^3      | ESLint configuration utilities.                  |
| `@types/node`          | ^20     | TypeScript definitions for Node.js.              |
| `@types/react`         | ^19     | TypeScript definitions for React.                |
| `@types/react-dom`     | ^19     | TypeScript definitions for React DOM.            |
| `eslint`               | ^9      | JavaScript/TypeScript linter.                    |
| `eslint-config-next`   | 15.1.6  | ESLint configuration for Next.js.                |
| `postcss`              | ^8      | CSS post-processor.                              |
| `prisma`               | ^6.3.1  | Prisma CLI for database management.              |
| `tailwindcss`          | ^3.4.1  | Utility-first CSS framework.                     |
| `typescript`           | ^5      | TypeScript language support.                     |

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/kaushik-24/blog-post-main).
