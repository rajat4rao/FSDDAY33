# NodeJS File System

A Node.js API for creating and listing text files with timestamps. The API allows you to create text files with the current timestamp and retrieve all the text files with their content.

## Features

- **Create A File:** Creates a new text file with the current timestamp as its content.
- **Retrieve Text Files:** Retrieve all the text files in the folder with their content.

---

## Documentation

The API documentation : [https://documenter.getpostman.com/view/11314293/2sAXqtbMT5#393ec401-faed-43f3-a564-e559b6edc0a0](https://documenter.getpostman.com/view/11314293/2sAXqtbMT5#393ec401-faed-43f3-a564-e559b6edc0a0)]

---

## Endpoints

### POST `/make-file`

Create a new file on the server in a directory

#### Response

- `200 OK`: File created successfully.
- `500 Internal Server Error`: Error writing file.

#### Example Response

```json
{
  "message": "File 2024-09-22T04-38-44.464Z.txt created successfully"
}
```

### GET `/list-files`

Retrieve all the text files in the folder with their content.

#### Response

- `200 OK`: List of files with their content.
- `500 Internal Server Error`: Error reading files.

#### Example Response

```json
[
  {
    "fileName": "2024-09-22T04-38-44.464Z.txt",
    "content": "2024-09-22T04-38-44.464Z"
  }
]
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/rajat4rao/FSDDAY33.git
   cd FSDDAY33
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Server

1. Start the server:

   ```sh
   node server.js
   ```

2. The server will be running at `http://localhost:3000`.

### Testing the API

Use an API testing tool like [Postman](https://www.postman.com/) to test the endpoints.

### Deployment

1. Deploy the application to [Render](https://render.com/).
2. Follow Render’s documentation to connect your GitHub repository and deploy your Node.js application.

---
