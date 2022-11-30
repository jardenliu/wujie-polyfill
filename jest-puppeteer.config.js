const { resolve } = require('path')
module.exports = {
    launch: {
        headless: true,
        devtools: false,
        product: 'chrome',
    },
    server: [
        {
            command: 'pnpm --filter=webpack* dev --port=9876',
            usedPortAction: 'kill',
            launchTimeout: 60000,
            host: '0.0.0.0',
            port: 9876,
        }
    ],
    browserContext: 'default',
}
