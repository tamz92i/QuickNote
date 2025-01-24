# QuickNotes - Personal Notes Manager

QuickNotes is a minimalist application to create, view, update, and delete personal notes. This application allows users to securely manage their notes with a simple interface.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Deployment**: Docker, Kubernetes, CI/CD (GitHub Actions)

## Installation

### Backend

1. Clone the repository
2. Navigate to the backend directory
3. Run `npm install`
4. Create a `.env` file with your MongoDB URI

### Frontend

1. Clone the repository
2. Navigate to the frontend directory
3. Run `npm install`

### Running Locally with Docker

To run both backend and frontend locally with Docker, use:

```bash
docker-compose up --build
```

# To deploy to Kubernetes, run:
```
kubectl apply -f kubernetes/
```