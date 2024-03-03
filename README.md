# ![Flow](./logo-md.png)

> “A state in which people are so involved in an activity that nothing else seems to matter…”
>
> _- Mihaly Csikszentmihalyi_

Flow is more than just a task manager; it's a streamlined experience designed to enhance your workflow. With its sleek and minimalist interface, this app makes organising your day a breeze. Effortlessly add, prioritise, and complete tasks with a few taps, ensuring that you stay in the flow.

## To-Do

- Error handling in `task-services.tsx` and form validation
- Isolate sensitive information specified in backend files
- Find a way to use Tailwind CSS in a CSS file

## Task Completion History

### 3 March 2024

- The frontend now uses React Hook Form to handle forms
- Used Zod to validate data from form for creating a task
- Running into an issue with applying a gradient colour to text using TailwindCSS
  - Looked at various guides and all have the same code
- Constructed foundational sidebar component
  - Added logo and links with corresponding icons

### 2 March 2024

- Re-did installation of Tailwind CSS and applied custom colours
- Created a separate configuration file `WebConfig.java` to specify allowed origins of the backend

### 1 March 2024

- Finished setting up the Spring backend to handle `GET`, `POST`, `PATCH`, and `DELETE` HTTP requests
- Set up React with Typescript for the frontend and installed additional dependencies (React Spring, Tailwind CSS, React Hook Form, Zod, etc.)
- Encountered a small issue related to CORS when trying to make requests to the backend from the frontend
  - Solved by enabling port 5173 as an acceptable endpoint to make requests to the backend, used this Spring blog post on [Spring CORS support](https://spring.io/blog/2015/06/08/cors-support-in-spring-framework)
- Added basic methods to the frontend to:
  - Delete or get a specific task, or get all tasks from the backend
  - Add a task to the backend

### 29 February 2024

- Started setting up and configured the Spring backend

## Important Notes

- Run frontend on port 5173
  - Otherwise, add additional origins to `allowedOrigins` array in `backend/src/main/java/io/nology/flow/config/WebConfig.java`
- Run backend on port 8080

## Resources

### Fonts

- [MuseoModerno](https://fonts.google.com/specimen/MuseoModerno)
- [Inter](https://fonts.google.com/specimen/Inter)

### Icons

- [All](https://img.icons8.com/fluency-systems-regular/96/border-all--v1.png)
- [Today](https://img.icons8.com/fluency-systems-regular/96/today.png)
- [Inbox](https://img.icons8.com/fluency-systems-regular/96/inbox.png)
- [Personal](https://img.icons8.com/fluency-systems-regular/96/private.png)
- [Work](https://img.icons8.com/fluency-systems-regular/96/business--v1.png)

### Bits and Bobs

- [Name that Color](https://chir.ag/projects/name-that-color/)
- [How to pass function as a prop in React TypeScript](https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript)
- [How to create a date object representing yesterday's date in single line](https://stackoverflow.com/questions/73770027/how-to-create-date-object-and-set-date-in-1-line-in-typescript)
- [Text colour gradient with Tailwind CSS](https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/)
