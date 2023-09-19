# Getting Started

This Kontent.ai Learn project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The project demonstrates how to preview content from a Kontent.ai environment and how to annotate HTML markup to use the [Kontent.ai Smart Link SDK](https://github.com/kontent-ai/smart-link).

To run this app against your Kontent.ai project, take the [Hello Web Spotlight](https://docs-preview.kontent.ai/learn/develop/hello-web-spotlight) path in [Kontent.ai Learn](https://kontent.ai/learn) and specify the following environment variables in your `.env.local`:

* `REACT_APP_KONTENT_AI_ENVIRONMENT_ID` with your [Kontent.ai environment ID](https://kontent.ai/learn/docs/environments#a-get-your-environment-id).
* `REACT_APP_KONTENT_AI_PREVIEW_API_KEY` with your [Kontent.ai Delivery API key](https://kontent.ai/learn/docs/apis/api-keys#a-delivery-api-keys) with permission for content preview.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `surge ./build`

Install Surge.sh on your device via `npm i -g surge` and then run `surge` to deploy the app.

## Learn More

You can learn more about Kontent.ai development and best practices in [Kontent.ai Learn](https://kontent.ai/learn).

To learn React, check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and [React documentation](https://reactjs.org/).
