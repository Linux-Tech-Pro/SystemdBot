import { IJollyConfig } from "../src/interfaces/config.ts";
import { ContextMessage, Plugins } from "../src/interfaces/plugins.ts";
import { custom } from "../custom/reactionroles/reactionrole.temp.ts";         // duplicate this line as needed, rename reactionrole.temp.ts to reactionrole.ts

/*
    TypeScript-based Configuration:
    For this Update to the Bot, the JSON Configuration Previously used has been deprecated
    for a More Streamline Configuration File, making it easier to describe what happens.

    This File is just a Template, so you can easily get started on making your Own TypeScript Bot

    Some of the benefits with using Typescript over JSON are:
        Variable Declaration
        Custom Functions
        More that i cant really list here
    
        I Recommend you install Visual Studio Code, or really, Any Text Editor that has a 
        Smart Autocompletion, Microsoft calls this Intellisense, to enable the Autocompletion
*/

/*
    Plugin Configuration
    If the Enable Property has been set to true, all other subproperties are required.
    If you do not complete the subproperties on plugins that are set to enabled, this bot WILL break
*/

const plugins = {
    reactionRole: {
        enable: false,
        reactions: [
            {
                channelID: "",
                messageID: "",
                /*
                "one" => Single Reaction
                "multiple" => Multiple Reactions
                */
                type: "one",
                // Useful to hide the Reaction Count, or have Anonymous Reactions
                removeReactionAfterTrigger: false,
                // This is where you insert the Variable you Imported at the Top of the document "import { var } from "../custom/reactionrole.ts""
                // The variable at the top can be changed, but you must change it in the reactionrole document, and change it below
                ...custom
            }
        ]
    },
    showContentOnMessageLink: false,
    bump: {
        enable: false,
        // Role ID for Mention Bump Role
        roleID: "roleID"
    },
    ree: false,
    sudo: false,
    selfping: {
        enable: false,
        // Custom Message for Trigger when someone Pings your Bot
        // (Optional)
        customMessage: ""
    },
    nicknameOnJoin: {
        enable: false,
        // Nickname to Change on Join
        // Use {user} as variable to use user's name
        // Only Works in Suffix
        nickname: "Verified Nerd {user}"
    },
    autoPublish: {
        enable: false,
        // Only Publish Bot's messages
        botOnlyChannelID: [],
        // Publish messages, regardless of bot or user
        channelID: []
    },
    /*
        Autorole with Membership Screen Support
    */
    autorole: {
        enable: false,
        userRoleID: "",
        botRoleID: ""
    },
    /*
        Post random posts from Subreddits
    */
    autopost: {
        enable: false,
        posts: [
            {
                name: "LOL",
                channelID: "",
                subredditToFollow: [],
                intervalInMinutes: 30
            }
        ]
    },
    /*
        AutoCreateChannel
        Creates new channel if someone mentions inexistent channel such as #computer-showcase
    */
    autoCreateChannel: {
        enable: false,
        // Set Undefined to create outside of categories
        categoryID: "category ID"
    },
    ghostPing: false,
    /*
        AutoRenameChannel
        Changes Channel's name every X minutes
    */
    autoRenameChannel: {
        enable: false,
        // target channel to rename
        // It can be voice or text
        channelID: "channel ID",
        // Variables to use for replacement
        variables: [
            "people",
            "cats",
            "dogs"
        ],
        // Use $ to replace with a choice of variables above
        nameToBeReplaced: "cool $"
    },
    levelXP: {
        enable: false,
        rolesRewards: [
            {
                ID: "role ID",
                level: 5
            }
        ],
        levelUP: {
            // Use "0" to send on channel where user has sent and reached level up
            // OR insert a channel ID in the quotations to specify which channel to send the message to
            channelID: "0",
            customMessage: "Congrats {user}, you just reached level {level}!"
        },
        // Reward with 100 XP when someone bumps this server
        // Only if bump reminder plugin is enabled
        rewardWhenBump: true,
        // Ignores Cooldown for specific role
        // (optional as [])
        ignoreCooldownRoles: [
            "role ID"
        ],
        // Ignores Gaining XP for specific channel
        // (optional as [])
        ignoreXPChannels: [
            "channel ID"
        ],
        multiplyXP: 1,
        minXP: 15,          // Minimum amount of XP to earn from Each Message (you can change this)
        maxXP: 25,          // Maximum amount of XP to earn from Each Message (you can change this)
    },
    funfact: {
        enable: false,
        // documentation: https://github.com/MacTechStudios/SystemdBot/wiki/Source-for-the-Fun-Fact
        source: "URL",
        intervalInMin: 120,
        channelID: "channelID"
    },
    clockChannel: {
        enable: false,
        channelID: "channel ID",
        channelName: "$EMOJI $TIME",
        timezone: "America/Chicago",
        intervalInMinutes: 5
    },
    rss: {
        enable: false,
        // This RSS Plugin Supports the Following Format(s):
        // Atom, RSS1, and RSS2
        feedsURL: [
            "feed URL"
        ],
        channelID: "channel ID",
        customMessage: "📰 | **$title**\n\n$url"
    },
    logging: {
        enable: false,
        warnLogChannelID: "",
        events: []
    },
    // This also needs to have
    // --unstable enabled in the deno.jsonc
    // if you want to have music support
    music: {
        enable: false
    },
    greeting: {
         /*
               You can Use the following attributes in Fields, as long as they are under the `` (not required to do, but its helpful):
               {ctx.mention} - user's mention
               {ctx.author} - author's name and tag
               {ctx.authorAvatarURL} - Adds the Avatar of the person who joined/left
               {ctx.memberCount} - server's member count
               {ctx.serverName} - server's name
               Make sure to follow the embed template used in embed.temp.ts under the custom folder
        */
        enable: true,
        join: {
            enable: true,
            channelID: "channelID",
            customMessage: (ctx: ContextMessage) => {
                return ctx.embed
                .setTitle("Member Joined")
                .setDesc(``)
                .addField("", ``, true)
                .setThumb(ctx.authorAvatarURL)
                .build()
            }
        },
        leave: {
            enable: true,
            channelID: "channelID",
            customMessage: (ctx: ContextMessage) => {
                return ctx.embed.setTitle("Member Left")
                .setThumb(ctx.authorAvatarURL)
                .setDesc(``)
                .addField("", ``, true)
                .addField("", ``)
                .build()
            }
        },
        ban: {
            enable: false,
            channelID: "channelID",
            customMessage: (ctx: ContextMessage) => {
                return `${ctx.author} got banned`
            }
        }
    }
} as Plugins

export const config: IJollyConfig = {
    token: "Token",
    botID: "Bot ID",
    description: "Description",
    /* WARNING: Owners have access to eval command!!!
    Please Only select User ID's of Members YOU TRUST!!! */
    owners: ["user ID"],
    // REQUIRED - Otherwise it will break if you put invalid guild ID
    guildID: "guild ID",
    prefixes: [
        "sudo ",
        "doas "
    ],
    // Set Playing Activity
    playingStatus: "",
    // You can leave the Array Empty "[]" to disable AutoSentence
    autosentence: [
        {
            action: "timeout",
            durationInMinutes: 120,
            warnCount: 3
        },
        {
            action: "ban",
            durationInMinutes: 2160,
            warnCount: 5
        },
        {
            action: "ban",
            durationInMinutes: 0,
            warnCount: 7
        },
    ],
    // Allow Bots to use Command in Specific Channel
    // Useful if you want to let bridgers run command from Discord
    allowBotResponsingCommandChannelID: [],
    // Plugins
    plugins: plugins
}