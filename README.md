# Flow

## Task Completion History

### 29 February 2024

- Finished setting up the Spring backend to handle `GET`, `POST`, `PATCH`, and `DELETE` HTTP requests
- Set up React with Typescript for the frontend and installed additional dependencies (React Spring, Tailwind CSS, React Hook Form, Zod, etc.)
- Encountered a small issue related to CORS when trying to make requests to the backend from the frontend
    - Solved by enabling port 5173 as an acceptable endpoint to make requests to the backend, used this Spring blog post on [Spring CORS support](https://spring.io/blog/2015/06/08/cors-support-in-spring-framework)
- Added basic methods to the frontend to get all tasks and a specific task from the backend, as well as add a task to the backend

## Important Notes
- Run frontend on port 5173 (alternative is to alter port number passed into `@CrossOrigin` annotation)
    - Double check if `127.0.0.1` needs to be passed as well into the annotation just in case
- Run backend on port 8080