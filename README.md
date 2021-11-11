# cds21
PWA Workshop at Chrome Dev Summit 2021, given by [Maxiliano Firtman](https://twitter.com/firt) on November 10th, 2021.

This is the project we'll be coding during the workshop.

This webapp takes the data/activities.json file and render a collection of icons that can trigger different activities using deep links for different native apps, such as messaging, maps, browsers, and more.
Check or update the list of available types at js/handlers.js. 
Each activity needs a type, a name and an optional icon. If no icon is provided, a default icon for that type is used. Based on the type, several other values are expected, such as "url" for a link, or "place" for a map. These variables are declared in each time in js/handlers.js.
Run this app in a web server, don't open it from the filesystem. Use 'npx serve' for a simple web server.
