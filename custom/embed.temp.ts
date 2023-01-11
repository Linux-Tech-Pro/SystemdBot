import { Bot, BotWithCache, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { send } from "@utils/send.ts";
import { JollyEmbed } from "@classes/embed.ts";
import { avatarURL } from "@utils/avatarURL.ts";

class Embed extends JollyCommand {
    constructor() {
        super("embed", "embed", {
            description: "Information about this bot with some stats"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {

        const avatar = await avatarURL(client, client.id)
        const em = new JollyEmbed()
                .setTitle("")       // You can put anything in the quotations
                .setDesc("")        // You can put anything in the quotations
                .setThumb(avatar)
                .addField("",``, true)    // The Name goes in the quotations, the Value goes in the Markdowns. If you want the Value on a new line, move the Value to the next line
                                                             // you can also add true or false, which tells the program whether or not to use inline, true for yes, false for no
                .build()
            send(client, message.channelId, em)

    }
}

addCommand(new Embed())