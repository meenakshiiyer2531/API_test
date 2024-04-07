
# API Service for Background Tasks

This API service is built using TypeScript and Node.js, and it utilizes PostgreSQL as the database. It is designed to handle background tasks for an application. The service is running on `localhost` at port `2002`.

## Features

- **Task Management**: Queue, execute, and manage background tasks such as sending emails or processing data.
- **Bearer Token Authentication**: Ensure security by authorizing requests using bearer tokens.
- **Asynchronous Execution**: Tasks are executed asynchronously, allowing the API to handle multiple tasks concurrently.
- **Database Integration**: Utilize PostgreSQL to store task information and status.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meenakshiiyer2531/API_test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd API_test
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up PostgreSQL:

   - Ensure PostgreSQL is installed and running on your local machine.
   - Create a new database named `API_test`.
   - Update the database connection string in the project's configuration file if necessary.

5. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

### 1. Create a Task

- **URL**: `/tasks`
- **Method**: `POST`
- **Description**: Create a new background task.
- **Request Body**:
  ```json
  {
    "endpoint": "<any-end-point>",
    "data": {"hello": "world"},
    "delay": 1000,
    "method": "POST"
  }
  ```
- **Response**: The created task object.

### 2. Get Tasks by Bearer Token

- **URL**: `/tasks`
- **Method**: `GET`
- **Description**: Retrieve a list of tasks for a bearer token.
- **Request Header**:
  ```
  Authorization: Bearer <insert-api-key>
  ```
- **Response**: A list of tasks associated with the provided bearer token.

### 3. Get Tasks by Status

- **URL**: `/tasks/status/:status`
- **Method**: `GET`
- **Description**: Retrieve a list of tasks filtered by status.
- **URL Parameters**:
  - `status`: The status of the tasks (`queued`, `complete`, `failed`).
- **Response**: A list of tasks with the specified status.

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

