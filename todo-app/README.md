# MERN Stack Todo Application

A full-stack Todo application built with the MERN (MongoDB, Express.js, React, Node.js) stack, featuring a modern UI with Tailwind CSS.

## Features

- Create, Read, Update, and Delete todos
- Mark todos as complete/incomplete
- Filter todos by status (All, Active, Completed)
- Form validation using Zod
- Modern UI with Tailwind CSS
- Responsive design
- Toast notifications for user feedback

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Zod for validation
- CORS for cross-origin requests
- Morgan for request logging

### Frontend
- React (Vite)
- Tailwind CSS for styling
- Axios for API requests
- React Icons
- React Hot Toast for notifications

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn package manager

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Backend Setup:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
NODE_ENV=development
```

3. Frontend Setup:
```bash
cd frontend
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```
The server will run on http://localhost:5000

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```
The application will be available at http://localhost:5173

## API Endpoints

- GET `/api/todos` - Get all todos
- GET `/api/todos/:id` - Get a specific todo
- POST `/api/todos` - Create a new todo
- PUT `/api/todos/:id` - Update a todo
- DELETE `/api/todos/:id` - Delete a todo

## Deployment

### Backend Deployment (Example with Heroku)

1. Create a Heroku account and install Heroku CLI
2. Login to Heroku:
```bash
heroku login
```

3. Create a new Heroku app:
```bash
heroku create your-app-name
```

4. Add MongoDB URI to Heroku config:
```bash
heroku config:set MONGO_URI=your_production_mongodb_uri
heroku config:set NODE_ENV=production
```

5. Deploy to Heroku:
```bash
git subtree push --prefix backend heroku main
```

### Frontend Deployment (Example with Vercel)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
cd frontend
vercel
```

3. Update the API URL in `frontend/src/services/api.js` to point to your deployed backend URL.

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_uri
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=your_backend_api_url
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License

## Author

[Your Name]
