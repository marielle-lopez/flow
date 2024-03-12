# ![Flow](./logo-md.png)

> “A state in which people are so involved in an activity that nothing else seems to matter…”
>
> _- Mihaly Csikszentmihalyi_

Flow is more than just a task manager; it's a streamlined experience designed to enhance your workflow. With its sleek and minimalist interface, this app makes organising your day a breeze. Effortlessly add, prioritise, and complete tasks with a few taps, ensuring that you stay in the flow.

## Important Notes

- Run frontend on port 5173
  - Otherwise, add additional origins to `allowedOrigins` array in `backend/src/main/java/io/nology/flow/config/WebConfig.java`
- Run backend on port 8080
- To access API documentation, navigate to this link in your browser: http://localhost:8080/swagger-ui/index.html#/

## To-Do

Check out my [project board](https://github.com/users/marielle-lopez/projects/4/views/1) to see what's on the to-do list, what I'm currently working on, what I've done so far, and any bugs and issues I've come across; all in a condensed view.

## Task Completion History

### 11 March 2024

- Started implementing error handling for API calling

### 10 March 2024

- Created Toast component which acts as a pop-up notification when certain events occur (e.g., when a user successfully creates, edits, marks off/unmarks or deletes a task)
  - In order to make this component dynamic, I created a context `ToastContext` which holds content (states) related to the Toast component, such as the message and icon to be displayed, and whether or not it should be appearing on the page

### 9 March 2024

- Integrated OpenAPI 3 and Swagger UI with backend to document REST API using the help of [this YouTube video](https://www.youtube.com/watch?v=2o_3hjUPAfQ)
- Enabled logging of incoming HTTP requests using Spring Boot's logging filter
  - Implemented this feature by following [this Baeldung guide](https://www.baeldung.com/spring-http-logging)
- Fixed a couple of bugs:
  - On page load, when a user successfully creates a task, the tasks list would not refresh, and additionally, the default due date in the `TaskForm` component would not display the current date
    - The refresh bug fixed by moving the update of the `refresh` state to the inside of the `.then()` states which are called on corresponding methods for API calling (e.g., `createTask()`)
    - The due date bug was fixed by adding the `dueAt` property inside of the `reset()` being called in the `useEffect` watching `isSubmitSuccessful`

### 8 March 2024

- Restyled `TaskModal` component to improve UI design
- Used React Hook Form in `TaskModal` to allow user to edit a task's information
  - Ran into an issue where default values were not appearing in their corresponding outputs; [this Stack Overflow post](https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect/62243132#62243132) explains that in addition to defining `defaultValues` in the `useForm`, I also needed to listen to potential changes to `modalTask`
- Created `Categories` domain in the backend and created a relationship to the `Tasks` domain
- Category select input now only has options based on fetched categories from the backend
- Currently experiencing an issue where an existing task's category cannot be updated to a different one
  - For example, if a user tries to update a task with a category of 'Personal' to 'Work', an error with a status code `500` is given, with the following message: _"identifier of an instance of io.nology.flow.categories.Category was altered from 2 to 3"_

### 7 March 2024

- Constructed `TaskModal` component which will appear when a user clicks the pencil icon ('edit' button) of a task item
- Created `ModalContextProvider` which holds the state `modalIsHidden`, which is used for conditional rendering (if it is `false`, the modal will not be displayed, and vice versa) in the `TaskModal` component
  - This was decided to prevent the problem of prop-drilling
  - Also has `modalTask` state which stores the task the modal should display information of

### 6 March 2024

- Displayed the due date of a task
- Added `isCompleted` property to tasks in the backend to track a task's completion status
- Created `RefreshContext` to prevent the bad habit of prop-drilling, which is used to re-render the `TaskList` component whenever a tasks-related change occurs
- Set default date of date input in `TaskForm` component to current day's date using `currentDate` function
- Allowed a task's completion status to be changed on the frontend (i.e., ticked off or unticked) and have such change reflected in the backend (`isCompleted` property of a task is updated accordingly)
  - Ran into a funny issue with validating boolean values on the backend, which is explained in this [Medium post](https://nieldw.medium.com/the-problem-with-doing-bean-validation-on-a-java-boolean-52988ec2e0e5)
  - Appropriate styling is also applied to completed tasks and checkbox inputs now have `defaultChecked` attribute to ensure they are ticked if a task's `isCompleted` value is `true`

### 5 March 2024

- Retrieved relevant data from the backend in a specific page component (e.g., all tasks would be fetched and displayed on the homepage)
- Created `TaskItem` and `Checkbox` component which go hand-in-hand, functional in the way that when a user clicks the checkbox the task is 'crossed off'
- Enabled users to delete tasks
  - The only qualm I have with my current implementation is the case of prop-drilling, where I have a piece of state `refresh` and its setter being passed from the page component, to `TaskList`, then `TaskItem`
- Enabled users to create tasks
  - Ran into a small issue where a task wouldn't be added to the database; the problem was on the frontend the due date was called `dueDate`, where as in the backend, it is referred to `dueAt`

### 4 March 2024

- Changed the frontend page title and icon
- Updated styling of `TaskForm` component according to design mockup
- Created `Button` component which can take in a string `label` or object (of type `Icon`) `icon`

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
- [Plus](https://img.icons8.com/fluency-systems-regular/96/000000/plus-math--v1.png)
- [Cross](https://img.icons8.com/fluency-systems-filled/48/multiply.png)
- [Pencil](https://img.icons8.com/windows/32/000000/edit--v1.png)
- [Tick](https://img.icons8.com/fluency-systems-filled/48/checkmark.png)

### Bits and Bobs

- [Name that Color](https://chir.ag/projects/name-that-color/)
- [How to pass function as a prop in React TypeScript](https://stackoverflow.com/questions/68895112/how-to-pass-function-as-a-prop-in-react-typescript)
- [How to create a date object representing yesterday's date in single line](https://stackoverflow.com/questions/73770027/how-to-create-date-object-and-set-date-in-1-line-in-typescript)
- [Text colour gradient with Tailwind CSS](https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/)
- [How to declare a type as nullable in TypeScript](https://stackoverflow.com/questions/17220114/how-to-declare-a-type-as-nullable-in-typescript)
- [Remove time after converting date `toISOString`](https://stackoverflow.com/questions/47066555/remove-time-after-converting-date-toisostring)
- [The problem with doing bean validation on a Java Boolean](https://nieldw.medium.com/the-problem-with-doing-bean-validation-on-a-java-boolean-52988ec2e0e5)
- [How to change React Hook Form `defaultValue` with `useEffect`](https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect/62243132#62243132)
- [Spring boot 3 - OpenAPI Documentation | Swagger UI](https://www.youtube.com/watch?v=2o_3hjUPAfQ)
- [Spring - Log Incoming Requests](https://www.baeldung.com/spring-http-logging)
