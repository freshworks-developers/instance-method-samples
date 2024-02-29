## Instance method sample app

This sample app demonstrates [instance method](https://freshworks.dev/docs/app-sdk/v3.0/support_ticket/advanced-interfaces/instance-method/) on Platform version 3.0 in different modules using the instance methods - `client.instance.resize()`, `client.instance.close()`, `client.instance.context()`, `client.instance.send()`, `client.instance.receive()`, `client.instance.get()`.

| Module | Works in Product |
| ----- | ------- |
| `support_ticket` | Freshdesk |
| `service_ticket` | Freshservice |
| `sales_account` | Freshsales Suite |
| `chat_conversation` | Freshworks CRM, Freshcaller, Freshchat |

### Files and Folders
    .
    ├── README.md                 A file for your future self and developer friends to learn about app
    ├── app                       A folder to place all assets required for frontend components
    │   ├── index.html            A landing page for the user to use the app
    │   ├── modal.html            A modal page for the user to use the app
    │   ├── scripts               JavaScript to place files frontend components business logic
    │   │   └── app.js
    │   └── styles                A folder to place all the styles for app
    │       ├── images
    │       │   └── icon.svg
    │       └── style.css
    ├── config                    A folder to place all the configuration files
    │   └── iparams.json
    └── manifest.json             A JSON file holding meta data for app to run on platform

