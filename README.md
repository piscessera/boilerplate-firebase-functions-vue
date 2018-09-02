# firebase-functions-vue-boilerplate
Boilerplate for firebase functions with typescript and hosting with vuejs

**Firebase Function**

This boilerplate provide sample function & testing

**Testing**

```
npm test
```

**Build**

Dev
```
npm run serve:dev
```

Production
```
npm run build
```

**Deploy**

```
npm run deploy
```

**Firebase Config**

Set config

```
firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"
```

Get config

```
firebase functions:config:get
```

**Firebase Hosting**

Install vue cli

```
npm install -g @vue/cli
```

Create project in anywhere use this command

```
vue create project-name
```

Add this script in public/package.json for npm run deploy

```
"deploy": "firebase deploy --only hosting"
```

This dependencies will helpful

    vuelidate
    vuex
    axios