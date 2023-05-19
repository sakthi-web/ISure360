# [React Purity Dashboard](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/)

Start your Development with an Innovative Admin Template for **Chakra UI** and **React**. [Purity UI Dashboard](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/) is built with over 70 frontend individual elements, like buttons, inputs, navbars, navtabs, cards or alerts, giving you the freedom of choosing and combining. All components can take variations in colour, that you can easily modify using Chakra's style props. The product comes with a simple JWT authentication flow: login/register/logout. 

- 👉 [React Purity Dashboard](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/) - product page
- 👉 [React Purity Dashboard](https://node-js-react-purity-dashboard.appseed-srv1.com/#/auth/signin) - LIVE Demo

<br />

> 🚀 Built with **[React App Generator](https://appseed.us/generator/react/)**

- ✅ Innovative Chakra Design - **Crafted by [Creative-Tim](https://www.creative-tim.com/?AFFILIATE=128200)**
- ✅ React, Redux, Redux-persist
- ✅ Authentication: JWT Login/Register/Logout
- ✅ Full-stack ready using **[Node JS API Server](https://github.com/app-generator/api-server-nodejs)** (open-source project)
  - Features: Typescript / SQLite / TypeORM / Joy (validation) / Passport library - `passport-jwt` strategy.

<br />

![React Purity Dashboard - Open-source full-stack prodyct crafted by AppSeed and Creative-Tim.](https://user-images.githubusercontent.com/51070104/205427640-007904ec-9cd5-4060-86c6-47675b36cda1.png)

<br />

## Tests

> `Compatibility matrix` using Ubuntu `18.04 LTS` as reference.

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v12.0.0` | ✅ | ✅ |
| `v14.0.0` | ✅ | ✅ |
| `v16.0.0` | ✅ | ✅ | 
| `v18.0.0` | ✅ | ✅ | 

<br />

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

> 👉 **Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-purity-dashboard.git
$ cd react-purity-dashboard
```

<br >

> 👉 **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> 👉 **Step 3** - Edit the `.env` using the template `.env.sample`. 

```env

REACT_APP_BACKEND_SERVER='http://localhost:5000/api/'

REACT_APP_GITHUB_OAUTH_CLIENT_ID     = ... # Github OAuth Client
REACT_APP_GITHUB_OAUTH_CLIENT_SECRET = ... # Github OAuth Secret
REACT_APP_GITHUB_OAUTH_REDIRECT_URL  = ... # Github OAuth Callback URL
```

<br />

> 👉 **Step 4** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

> 👉 **API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## Node JS API Server

The product is also open-source and is already configured to work with Berry Dashboard Template - product features:

- Typescript / Node js / Express server
- JWT authentication (`passport-jwt` strategy)
- Persistence: SQLite 

> Links

- [Node JS API](https://github.com/app-generator/api-server-nodejs) - source code
- [Node JS API](https://appseed.us/boilerplate-code/nodejs-starter) - product page

<br />

![Node JS API - Open-source API server built on top of Express Nodejs Framework.](https://user-images.githubusercontent.com/51070104/124934824-c210a700-e00d-11eb-9d01-e05bd8bfb608.png)

<br />

### Compile the API Server

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step #3** - Run the SQLite migration via TypeORM

```
$ yarn typeorm migration:run
```

**Step #4** - Start the API server (development mode)

```bash
$ npm dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

---
[React Purity Dashboard](https://appseed.us/product/purity-dashboard/api-server-nodejs/react/) - Provided by **[AppSeed](https://appseed.us)**.
