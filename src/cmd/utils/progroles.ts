import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { send } from "@utils/send.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class ProgRoles extends JollyCommand {
    constructor() {
        super("ProgRoles", "embeds", {
            aliases: ["prog", "progroles"],
            description: "Generates the Reaction Role Embed for Programmer Roles"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {
        const user = client.users.get(client.id) ?? await client.helpers.getUser(client.id)
        const em = new JollyEmbed()
                .setTitle("Programming Languages")
                .setDesc("React to Any of the Emojis to Gain Access to the roles:")
                .addField("<:CLang:1041515170108821595> - C Developer", 
                `**(C, C++, C#)
                File Ext Examples:
                ".h", ".h++", ".c", ".c++"**`, true)
                .addField("<:Assembly:1041515156015947786> - Assembly Developer",
                `**File Ext Examples:
                ".asm", ".s"**`, true)
                .addField("<:Python:1041515158041788547> - Python Developer", 
                `**File Ext Examples:
                ".py", ".pyi", ".pyc"**`, true)
                .addField("🌐 - Web Developer",
                `**(HTML, CSS)
                File Ext Examples:
                ".html", ".htm", ".css"**`, true)
                .addField("<:JavaScript:1041515168011657306> - JavaScript Developer",
                `**File Ext Examples:
                ".js", ".jsx"**`, true)
                .addField("<:Typescript:1041517631640981545> - TypeScript Developer",
                `**File Ext Examples:
                ".ts", ".tsx"**`, true)
                .addField("<:PHP:1041517630500118551> - PHP Developer",
                `**File Ext Examples:
                ".php", ".phtml"**`, true)
                .addField("<:Rust:1041517629329907772> - Rust Developer",
                `**File Ext Examples:
                ".rs"**`, true)
                .addField("❓- Other Developer",
                `**Examples:
                Java, Ruby, Kotlin, etc.**`, true)
                .setThumb(await avatarURL(client, user))
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new ProgRoles())