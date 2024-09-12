
```markdown
# Streamify Dashboard

## Overview

Streamify Dashboard - an advanced analytics that provides insights into the data of music streaming. The application offers the ability to view key metrics, visualize trends in data, and manage the most recent stream records all in an intuitive and clean manner.

## Features

Total users and active users, total streams, revenues, and top artist in an elegant card.
 Data Visualization: Interactive: user growth line charts, pie charts for revenue distribution, top streamed songs bar charts.
 Data Table: Tabular form to list recent streams, allow sorting by song name, artist, date streamed, stream count.

Technologies Used

- **React**: A frontend framework for constructing user interfaces.
- **Redux Toolkit**: A state management library used to handle application state.
- **Chart.js**: A charting library used to build charts and visualizations.
- **Tailwind CSS**: A utility-first CSS framework, for styling purposes.

Setup

### Prerequisites

Ensure you have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate into the project directory:**

   ```bash
   cd streamify-dashboard
Installing Dependencies:

``` 
npm install
```
4. Fire up the development server:

```bash
npm start
```

This will fire up the application on default at `http://localhost:3000`.
## Usage

* **View Metrics**: Fire up the server and head over to the dashboard in your browser after that to view the key metrics displayed.
- **Visualize**: Check out some of the different charts revealing information about how users have grown, how revenue is distributed, and what the top songs streamed are.
- **Fiddle with the Data Table**: Use the table to view and sort recent data linked with streams.

## Directory Structure

- **`public/`**: Contains the `index.html` entry point of the application.
- **`src/`**: Source code directory.
  - **`assets/`**: Where static assets, such as images can go.
- **`components/`**: KeyMetrics, DataVisualization and DataTable React-components.
  - **`redux/`**: Setup of the Redux store and slice, which handles metrics state.
  - **`data/`**: Mock data used for development purposes.
  - **`App.js`**: The main React component, which renders the dashboard.
  - **`index.js`**: Entry point of React.
  - **`index.css`**: Global CSS file that imports Tailwind CSS.
  - **`tailwind.config.js`**: Configuration file for Tailwind CSS.

## Settings

- **Tailwind CSS**: Set up Tailwind CSS. Modify `tailwind.config.js` as per your requirement.

## Deployment

### Vercel

1. **Committing the Changes:**

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

2. **Push into remote repository:**

   ```bash
   git push origin main
   ```

3. **Deploy on Vercel:**
   - Visit [Vercel](https://vercel.com/) and create a new project.
- Import your repository and follow the instructions to deploy.

### Netlify

1. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to a remote repository:**

   ```bash
   git push origin main
   ```

3. **Deploy on Netlify:**
   - Go to [Netlify](https://www.netlify.com/) and create a new site from Git.
Deployment Connect your repository and follow the on-screen instructions to deploy. Testing Test your changes by writing unit tests using your preferred framework and integration tests with Jest and React Testing Library. Make sure all tests pass before deploying. Contributing Contributions welcome! Fork this repository and submit a PR with your changes. Please ensure for major changes an issue is opened first for discussion.


## Contact

For questions or feedback, please contact [dishantyadav10s@gmail.com](mailto:dishantyadav10s@gmail.com).

```

