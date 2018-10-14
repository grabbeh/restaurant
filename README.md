**Basic portfolio site**

This uses Gatsby as a static site generator to take data from Contentful, and then auto-deploy the site on Netlify, using Contentful's webhooks to trigger a build process on Netlify. 

Environment variables to access the Contentful API have to be added to Netlify, and then a webhook URL from Netlify has to be inturn be added to Contentful, so when content is changed in Contentful it automatically triggers a deploy through Netlify.
