# PAVEENA NODE JS TEST

# Install
npm install

# Start
npm start

# Get List
GET : http://localhost:3005/todo/list?pageSize=1&page=2

# Create
POST: http://localhost:3005/todo
Example Body
{
    "title": "TODO3",
    "description": "Hello TODO3"
}

# Update
PUT : http://localhost:3005/todo/:id

Example Body
{
    "completed": true,
}

# Delete
DELETE : http://localhost:3005/todo/:id
