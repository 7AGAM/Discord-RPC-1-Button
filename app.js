// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Click to join Game", url: "https://www.youtube.com/watch?v=iik25wqIuFo" }],
            details: "Krunker Browsergame",
            largeImageKey: "krunker",
            largeImageText: "Krunker.io"
        }).catch(err => console.log(err));

        console.log("Sucessfully enabled Discord Rich Presence!");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();