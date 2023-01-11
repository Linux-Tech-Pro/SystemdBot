import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { send } from "@utils/send.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class AgeRoles extends JollyCommand {
    constructor() {
        super("AgeRoles", "embeds", {
            aliases: ["age", "ageroles"],
            description: "Generates the Reaction Role Embed for OS Roles"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {
        const user = client.users.get(client.id) ?? await client.helpers.getUser(client.id)
        const em = new JollyEmbed()
                .setTitle("What is your Age Range?")
                .setDesc("React to Any of the Emojis to Gain Access to the roles:")
                .addField("🧒: 13-15",
                `**Ages:
                13, 14, 15**`, false)
                .addField("🧑‍🦱: 16-17",
                `**Ages:
                16, 17**`, false)
                .addField("🧔‍♂️ - 18-20",
                `**Ages:
                18, 19, 20**`, false)
                .addField("🧓 - 21+",
                `**Ages:
                21, 22, 23, etc.**`, false)
                .setThumb(await avatarURL(client, user))
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new AgeRoles())