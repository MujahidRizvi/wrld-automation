import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "j9o2i8",
  chromeWebSecurity: false,

  clientCertificates: [
    {
      url: "https://www.wrld.xyz/",
      ca: ["www.wrld.xyz.pem"],
      certs: [
        {
          cert: "www.wrld.xyz.pem",
          key: "www.wrld.xyz.key",
        },
      ],
    },
  ],
  /* e2e: {
     setupNodeEvents(on, config) {
       on('before:browser:launch', (browser = {
         name: "chrome",
         family: "chromium",
         channel: "",
         displayName: "",
         version: "",
         majorVersion: "",
         path: "",
         isHeaded: true,
         isHeadless: false
       }, launchOptions) => {
         if (browser.family === 'chromium' && browser.name !== 'electron') {
           launchOptions.args.push('--start-fullscreen')
           launchOptions.args.push ('--disable-web-security --user-data-dir="C:/Program Files\\Google\\Chrome\\Application\\chrome.exe"')
       
           return launchOptions
         }
       
         if (browser.name === 'electron') {
           launchOptions.preferences.fullscreen = true
       
           return launchOptions
         }
       })
     }
   }*/ e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
