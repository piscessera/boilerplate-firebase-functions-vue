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