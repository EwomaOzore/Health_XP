# SECOND-STAGE-ASSESSMENT-TASK

## INSTRUCTIONS

### 1. SETTING UP THE PROJECT
**- Pull The repository to you local machine**

**- Create a new branch with your name**

    git checkout -b firstname_lastname

**- Set upstream branch**

    git branch --set-upstream-to origin firstname_lastname

**- Install all the packages**

    npm install

**- To start the app in dev mode run**

    npm run dev

### 2. PROJECT STRUCTURE
**- TYPES**
* Declare all your types in this folder `./src/type/`
* Do not modify the `./src/type/Response.ts` file
* Update the `./src/type/user.ts` file as you see fit based on the figma design. **Note:-** All the form fields are required
* Do not use type of any. `type foo: any= {}`

    Instead declare all the proper types `type foo: customObject = {}`
* Do not install any other library

**- TASK HELPER**
* Build your own components as you deem fit in the `./src/pages/` directory and import them into the `./src/App.tsx` file
* Write all your CSS in the `./src/index.css` file or use tailwind CSS in-line.
* The `./src/Helper/Backend.ts` has a function named `SendRegitrationForm` that simulates a back-end for the app.
    You are to send the user data in as parameters for the function 


        import { SendRegitrationForm } from "/src/Helper/Backend.ts"
        
        const user = {
            email: "example@mail.com",
            firstname: "MyName"
            /* add the other properties here */
        }

        /* code */

        SendRegitrationForm(user)

        /* code */
* use react context API to manage state across components if you need to 
* make sure you validate the form inputs. you can ignore the validation to check if the email already exist
### 3. Submission
**Make sure you commit all your changes in your branch**

    git add *
    git commit -m "Done with task"

**Push your code to submit**

    git push origin firstname_lastname



## BEST OF LUCK

Please feel free to contact us via email if you have any questions
