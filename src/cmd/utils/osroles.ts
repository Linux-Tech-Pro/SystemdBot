import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { send } from "@utils/send.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class OSRoles extends JollyCommand {
    constructor() {
        super("OSRoles", "embeds", {
            aliases: ["os", "osroles"],
            description: "Generates the Reaction Role Embed for OS Roles"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {
        const user = client.users.get(client.id) ?? await client.helpers.getUser(client.id)
        const em = new JollyEmbed()
                .setTitle("Operating Systems")
                .setDesc("React to Any of the Emojis to Gain Access to the roles:")
                .addField("<:Imposter:1041515166036152410> - Windows",
                `**Examples:
                Windows 11, Windows Server 2003, MS-DOS 6.0**`, true)
                .addField("<:Mac:1041515160147329134> - macOS",
                `**Examples:
                macOS 13 (Ventura), macOS Server, OS 9**`, true)
                .addField("<:Linux:1041519904861470802> - GNU/Linux",
                `**Examples:
                Ubuntu, Arch, Manjaro, Debian, RHEL, Fedora**`, false)
                .addField("❓ - Other OS",
                `**Examples:
                UNIX, OpenBSD, FreeBSD, NetBSD**`, true)
                .setThumb(await avatarURL(client, user))
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new OSRoles())