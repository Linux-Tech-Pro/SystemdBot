import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { send } from "@utils/send.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class TextEditor extends JollyCommand {
    constructor() {
        super("TextEditor", "embeds", {
            aliases: ["editor", "texteditorroles"],
            description: "Generates the Reaction Role Embed for Other Roles"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {
        const user = client.users.get(client.id) ?? await client.helpers.getUser(client.id)
        const em = new JollyEmbed()
                .setTitle("Text Editor Roles")
                .setDesc("React to Any of the Emojis to Gain Access to the roles:")
                .addField("<:VisualStudioCode:1053790431646855189> - Visual Studio Code",
                `**Info:
                Visual Studio Code Editor**`, true)
                .addField("<:VIM:1053790430015262760> - Vim",
                `**Info:
                VIM Text Editor**`, true)
                .addField("<:NotepadPP:1053790425351196773> - Notepad++",
                `**Info:
                Notepad++ Text Editor**`, true)
                .addField("<:SublimeText:1053790422692007977> - Sublime Text",
                `**Info:
                Sublime Text Editor**`, true)
                .addField("❓ - Other Text Editor",
                `**Info:
                Any Text Editor Not Listed Here**`, true)
                .setThumb(await avatarURL(client, user))
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new TextEditor())