<div align="center">  
    <img height="50"src="./src/assets/Logo.png">  
    <h1><img height="30" src="./src/assets/icon.png"> NC-POS-App</h1>
</div>

Welcome to the Restaurant POS App! This application is designed to streamline the order management process in a restaurant environment. The app consists of a frontend built with React.js and TypeScript, a backend built with Node.js and Express, and utilizes various technologies such as Bootstrap, Codux, and GSAP for animations. It integrates with a thermal printer through a TCP port to print receipts for the orders.

## Features
- Order Management: Easily manage and track orders within the restaurant.

- Menu Configuration: Configure the menu items, categories, and prices through an intuitive interface.

- Table Layout: Create a digital representation of the restaurant layout to assign orders to specific tables.

- Receipt Printing: Connect to a thermal printer via TCP port to print receipts for completed orders.

## Prerequisites
To run the Restaurant POS App, ensure you have the following prerequisites installed on your machine:

- Node.js (v12 or higher)
- React.js
- TypeScript
- Bootstrap
- Codux
- GSAP (GreenSock Animation Platform)
- A compatible thermal printer
- Internet connection


## Integration with Thermal Printer
To connect the app to a thermal printer, follow these steps:

1. Connect your thermal printer to the computer via a TCP port.
2. Ensure the printer is configured and operational.
3. In the backend configuration file, set the correct TCP port for the thermal printer connection.
4. When an order is completed and ready for printing, the app will send the receipt data to the printer through the specified TCP port.

### A Visual IDE for React Projects

Codux is an all-in-one visual development environment. Whether you’re starting a new app, creating components, or editing an existing project, every visual change you make reflects instantly in the code and vice versa. To learn more about Codux, visit our website - [https://www.codux.com/](https://www.codux.com/)

This project was bootstrapped with [`Vite`](https://vitejs.dev).

It includes a single React component to start your project with, a sample [`codux.config.json`](codux.config.json) with preconfigured keys, a `package.json` file to describe the project's packages and dependencies, and a folder and component structure to put everything neatly in its place.

- Edit, render and compose apps that make use of **`React`**-based components.
- Create components with **`TypeScript`**, **`SCSS`** and **`CSS Modules`** support.
- Visually edit in real-time and in an isolated environment.

### Available Scripts

In the project directory, you can run:

### `npm run build`

Build the application in production mode into a folder named `dist`. This folder can be served using any HTTP server.

### `npm run dev`

Start dev server, aliases: `vite dev`, `vite serve`.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

### `npm run preview`

Boots up a local static web server that serves the files from dist at [`http://localhost:4173`](http://localhost:4173) . It's an easy way to check if the production build looks OK in your local environment.
