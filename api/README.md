# Flask API Server

A simple Flask API server for testing API calls from GitHub Pages.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the server:
```bash
python app.py
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /` - Server health check

### Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID

### Todos
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

### Testing
- `GET /api/random` - Get random data
- `POST /api/echo` - Echo back request data

## CORS

CORS is enabled for all origins to allow GitHub Pages to call the API.

## Production Deployment

For production, you can use Gunicorn:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```
