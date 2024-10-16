🔔 🔔 🔔
---

# Random Number Generator App

## Overview

This is a fullstack application built using **SvelteKit** for the frontend and **Hono** running on **Deno** for the backend. The application generates random numbers via an API call to the backend, which are then displayed on the frontend. In this project, the server-side and client-side have been merged, with the client-side (static assets) served directly from the Deno server. The project demonstrates a simple setup where both the frontend and backend are integrated and deployed together.

## Features

- Generate random numbers via the `/api/random` API endpoint.
- Client-side built with **SvelteKit**.
- Backend served with **Hono** running on **Deno**.
- Uses **SvelteKit's static site generation (SSG)** for client-side.
- Serves static assets from the backend using Hono's `serveStatic` middleware.
- Backend and frontend integrated in a single deployment.

## Tech Stack

- **Frontend**: SvelteKit, JavaScript
- **Backend**: Deno, Hono
- **Middleware**: Hono's `serveStatic` for serving static assets
- **Static Site Generation**: SvelteKit's static adapter

## Prerequisites

- **Deno**: Make sure Deno is installed on your machine. You can install it from [here](https://deno.land/#installation).
- **Node.js**: Ensure Node.js is installed to build the SvelteKit frontend.

## Setup

<details>
<summary>Clone the Repository</summary>

```
git clone https://github.com/your-username/random-number-generator.git
cd random-number-generator
```
</details>

<details>
<summary>Run the Frontend Locally</summary>

```
cd ui
npm install
npm run dev -- --open
```
This will open the frontend on your local machine.
</details>

<details>
<summary>Run the Backend Locally</summary>

```
cd api
deno run --allow-net --allow-read app-run.js
```
Or if you've compiled the backend, run:
```
./random-api
```
</details>


## Deployment
The project can be deployed on Deno Deploy. You can view the live deployment here: [link](https://random-api-app.deno.dev/)

## Endpoints

**GET /**: Serve the frontend (static files from SvelteKit build).
**GET /api/random**: Generate and return a random number.

## License
This project is licensed under the MIT License.