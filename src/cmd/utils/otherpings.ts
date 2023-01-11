import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { send } from "@utils/send.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class OtherRoles extends JollyCommand {
    constructor() {
        super("OtherRoles", "embeds", {
            aliases: ["otherroles", "miscroles"],
            description: "Generates the Reaction Role Embed for Other Roles"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {
        const user = client.users.get(client.id) ?? await client.helpers.getUser(client.id)
        const em = new JollyEmbed()
                .setTitle("Other Roles")
                .setDesc("React to Any of the Emojis to Gain Access to the roles:")
                .addField("📢 - Announcements",
                `**Info:
                Get Notified for Any Announcements**`, true)
                .addField("⬆️ - Server Bumper",
                `**Info:
                Get Notified for Server Bumps**`, true)
                .addField("📊 - Polls",
                `**Info:
                Get Notified for any Voting Sessions/Polls**`, true)
                .addField("<:MacTechStudios:1043641965885005954> - MacTechStudios",
                `**Info:
                Get Notified for any YouTube Video Uploads**`, true)
                .addField("<:NexusOSLogo:1043641805176053890> - Project Nexus",
                `**Info:
                Get Notified for Updates on Project Nexus**`, true)
                .addField("⛏️ - Minecraft Community",
                `**Info:
                Get Pinged for Any Updates to Our Minecraft Server**`, true)
                .addField("🔧 - Tech Support",
                `**Info:
                Get Pinged When Someone Needs Assistance with Tech,
                Computers, and Operating Systems**`, true)
                .setThumb(await avatarURL(client, user))
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new OtherRoles())