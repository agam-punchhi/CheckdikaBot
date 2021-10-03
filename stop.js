const dbc = require('discord.js-bot-control');

// Start
dbc.start({

    // Reactions
    reactions: {
        success: '✅',
        error: '🚫',
        blocked: '❌',
        timeout: '⏰'
    },

    // Discord Settings
    discord: {
        bots: [

            // Your Bot
            {

                // Settings
                token: "BOT TOKEN OR A DISCORD.JS OBJECT",
                lang: 'en',
                prefix: 'dbc!',
                block_prefix: ['!'],
                warnNoAdminsDM: true,
                shutdownStatus: true,
                allowGlobalDM: true,
                welcome: true,
                logoff_warn: false,

                // Reactions
                reactions: {
                    success: '✅',
                    error: '🚫',
                    blocked: '❌',
                    timeout: '⏰'
                },

                // Logs
                logs: {
                    error: true,
                    warn: true,
                    rateLimit: true,
                    disconnect: true
                },

                // Anti Flood
                msg_checker: async function(msg, cfg, perm_check) {

                    // Console Viewer
                    console.log(msg);
                    console.log(cfg);

                    // Check User Message Permissions
                    const permissions = await perm_check();
                    
                    return { 

                        // This value confirm that the message is okay
                        confirmed: true,

                        // Permissions
                        perms: permissions
                    
                    };

                },

                // Admin Users
                admin: [],

                // Admin Roles
                adminRoles: [],

                // Custom Commands
                commands: []

            }

        ]
    },

    // Allow Shutdown
    allowShutdown: true,

    // Welcome
    welcome: true,
    logoff_warn: false,

    // Custom Commands
    commands: [],

    // Anti Flood
    msg_checker: async function(msg, cfg, perm_check) {

            // Console Viewer
            console.log(msg);
            console.log(cfg);

            // Check User Message Permissions
            const permissions = await perm_check();
                    
            return { 

                // This value confirm that the message is okay
                confirmed: true,

                // Permissions
                perms: permissions
                    
            };

        },

    // Super Admin
    superAdmin: ["YOUR DISCORD ID"],

    // Show Logs
    showLogs: true,

    // Global Lang
    lang: 'en'

}).then(() => {

    // Start Warn
    console.log('Bot Started!');

}).catch(console.error);
