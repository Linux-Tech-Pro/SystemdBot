import { Bot, BotWithCache, config, Message } from "@deps";
import { addCommand, JollyCommand } from "@classes/command.ts";
import { send } from "@utils/send.ts";
import { JollyEmbed } from "@classes/embed.ts";

class Rules extends JollyCommand {
    constructor() {
        super("rules", "rule", {
            description: "Information about this bot with some stats"
        })
    }

    override async run(message: Message, _args: string[], client: BotWithCache<Bot>): Promise<void> {

        const em = new JollyEmbed()
                .setTitle("Rules")
                .setDesc("Please Follow These Rules before Proceeding. This helps keep this server a Safe Place for all who join")
                .addField("**1. Be Respectful**",
                `You must respect all users, regardless of your liking towards them.
                Treat others the way you want to be treated.`)
                .addField("**2. No Inappropriate Language**",
                `The use of profanity is permitted, only to a limit.
                Any Form of Racism/Bigotry and/or any slurs are Not Allowed`)
                .addField("**3. No spamming**",
                `Don't send a lot of small messages right after each other.
                Do not disrupt chat by spamming.`)
                .addField("**4. No pornographic/adult/other NSFW material**",
                `This is a community server, so any form of this content will not be Allowed`)
                .addField("**5. No advertisements**",
                `Unless you were given written permission, We do not tolerate any kind of server/dm advertisements,
                whether it be for other communities or streams.
                You can post your content in the media channel if it is relevant and provides actual value (Computers/GitHub Repos/etc)`)
                .addField("**6. No offensive names and profile pictures**",
                `You will be asked to change your name or picture if the staff deems them inappropriate.`)
                .addField("**7. Server Raiding**",
                `Raiding or mentions of raiding are not allowed.`)
                .addField("**8. Direct & Indirect Threats**",
                `Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed`)
                .addField("**9. Fuck off Cryptomids (People trying to advertise their Pyramid Schemes)**",
                `Read Rule #5`)
                .addField("**10. Follow the Discord Community Guidelines**",
                `You can find them here: https://discordapp.com/guidelines`)
                .addField("------------------------------------", `------------------------------------`)
                .addField("**Other Information**",
                `**The Admins and Mods will Mute/Kick/Ban per discretion.
                If you feel mistreated, DM an Admin and we will resolve the issue.
                Your presence in this server implies accepting these rules, including all further changes.
                These changes might be done at any time without notice, it is your responsibility to check for them.**`)
                .build()
            send(client, message.channelId, em)
    }
}

addCommand(new Rules())