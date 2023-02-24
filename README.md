# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Method definition
### handleSave

 The handleSave function is responsible for updating the state of the radioButtonStates variable in the parent component, ButtonGroup. It is passed down as a prop to the child component, RadioButtonGroup, so that the child can communicate with its parent.

Here's a breakdown of what the handleSave function does:

It takes in four parameters: id, name, value, and textInputValue.

id is a unique identifier for the child component that is calling the function.
name is the name of the radio button that was clicked in the child component.
value is the value of the radio button that was clicked in the child component.
textInputValue is the value of the text input field in the child component.
It updates the state of the radioButtonStates variable in the parent component using the setRadioButtonStates function.

It first uses the spread operator (...prevState) to copy the previous state of the radioButtonStates object.
It then creates a new object with the updated state for the child component that called the function.
It does this by using the id parameter as the key for the child component's state in the radioButtonStates object.
It checks if the child component's state already exists in the radioButtonStates object using the prevState[id]?.option1 syntax. If it does, it keeps the existing state; if it doesn't, it sets the state to an empty string.
It then updates the state for the radio button that was clicked by setting the name property of the state object to the value parameter.
It also sets the textInputValue property of the state object to the textInputValue parameter.
It sets the updated state using the setRadioButtonStates function.

In summary, the handleSave function is responsible for updating the state of the radioButtonStates object in the parent component with the state of the child component that called the function. It uses the id parameter as the key for the child component's state in the radioButtonStates object and updates the state for the radio button that was clicked and the text input value.