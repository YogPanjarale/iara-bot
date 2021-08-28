import { Discord, SimpleCommand, SimpleCommandMessage } from "discordx";
import { Message, MessageEmbed } from "discord.js";
@Discord()
class Fun {
	@SimpleCommand("count")
	public async count(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const count = command.argString;
		try {
			for (let index = 0; index < parseInt(count); index++) {
				message.channel.send(`${index + 1}`);
			}
		} catch {
			message.channel.send("invalid number provided");
		}
	}
	@SimpleCommand("pfp", { aliases: ["dp", "photo"] })
	public async pfp(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		let pfpurl: string | null =
			message.mentions?.users.first()?.avatarURL() ||
			message.author.avatarURL();
		message.channel.send(pfpurl || "");
	}
	@SimpleCommand("hello", { aliases: ["hey"] })
	public async hello(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const hellogifs = [
			"https://media.giphy.com/media/djRJNZqj508sE/giphy.gif",
			"https://media.giphy.com/media/Vbtc9VG51NtzT1Qnv1/giphy.gif",
			"https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
			"https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif",
		];
		const embed = new MessageEmbed({
			title: `${message.author.username} is saying hello to ${
				message.mentions?.users.first()?.username || "You"
			}`,
			color: "PURPLE",
			image: {
				url: hellogifs[Math.floor(Math.random() * hellogifs.length)],
			},
		});
		await message.reply({ embeds: [embed] });
	}
	@SimpleCommand("hifi", { aliases: ["h5", "highfive"] })
	public async hifi(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const hellogifs = [
			"https://media.giphy.com/media/bp0fLZr8kFz4Bm4kRV/giphy.gif",
			"https://media.giphy.com/media/HX3lSnGXZnaWk/giphy.gif",
			"https://media.giphy.com/media/DuWay0MoeQxWM/giphy.gif",
			"https://media.giphy.com/media/3o7TKWuJdNJSt2JHpK/giphy.gif",
		];
		const embed = new MessageEmbed({
			title: `${message.author.username} is giving high five to ${
				message.mentions?.users.first()?.username || "You"
			}`,
			color: "PURPLE",
			image: {
				url: hellogifs[Math.floor(Math.random() * hellogifs.length)],
			},
		});
		await message.reply({ embeds: [embed] });
	}
	@SimpleCommand("sus", { aliases: ["suspicious", "susy"] })
	public async sus(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const susgifs = [
			"https://media.giphy.com/media/cJMlR1SsCSkUjVY3iK/giphy.gif",
			"https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif",
			"https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif",
		];
		const embed = new MessageEmbed({
			color: "PURPLE",
			image: {
				url: susgifs[Math.floor(Math.random() * susgifs.length)],
			},
		});
		await message.reply({ embeds: [embed] });
	}
	@SimpleCommand("bruh", { aliases: ["bro", "bruhh"] })
	public async bruh(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const bruhgifs = [
			"https://media.giphy.com/media/VIOkcgpsnA2Zy/giphy.gif",
			"https://media.giphy.com/media/kWp8QC99Z6xFn8bF0v/giphy.gif",
			"https://media.giphy.com/media/fm0FiSOfefH5m/giphy.gif",
			"https://media.giphy.com/media/CxQw7Rc4Fx4OBNBLa8/giphy.gif",
		];
		const embed = new MessageEmbed({
			color: "PURPLE",
			image: {
				url: bruhgifs[Math.floor(Math.random() * bruhgifs.length)],
			},
		});
		await message.reply({ embeds: [embed] });
	}
	@SimpleCommand("spoiler", { aliases: ["s", "hide"] })
	public async spoiler(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const spoiler = new MessageEmbed({
			title: "**SPOILER**",
			description: `${message.author.tag} has put a spoiler :-\n\n||${message.content}||`,
			color: "BLUE",
		});
		await message.channel.send({ embeds: [spoiler] });
		message.delete();
	}
	@SimpleCommand("whoismg", { aliases: ["whotfismg"] })
	public async whoismg(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const wimg = [
			"cant say , he could be lying abt his name for all yk",
			"dont ask a man his salary , a woman her age and mg his name",
			"he'll reveal that on his bday , i.e if u remember it",
			"even yog , the co founder of mgsb doesnt know",
			"stop asking that",
			"not telling",
			"shoo",
			"idk okay?",
			"why do u wanna know?",
			"hint : its related to a gods name",
			"do i look like google to u?",
			">:((",
			"smh",
			"bruh stop already with this Q",
			"dont ask",
		];
		//random element from array wimmg
		const hdp = wimg[Math.floor(Math.random() * wimg.length)];
		const wmg = new MessageEmbed({
			title: "",
			description: hdp,
			color: "BLUE",
		});
		await message.channel.send({ embeds: [wmg] });
	}
	@SimpleCommand("8b", { aliases: ["8ball", "askbot", "askme"] })
	public async eightball(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		const responses = [
			"It is certain.",
			"It is decidedly so.",
			"Without a doubt.",
			"Yes - definitely.",
			"You may rely on it.",
			"As I see it, yes.",
			"Most likely.",
			"Outlook good.",
			"Yes.",
			"Signs point to yes.",
			"Reply hazy, try again.",
			"Ask again later.",
			"Better not tell you now.",
			"Cannot predict now.",
			"Concentrate and ask again.",
			"Don't count on it.",
			"My reply is no.",
			"My sources say no.",
			"Outlook not so good.",
			"Very doubtful.",
		];
		const eightball = new MessageEmbed({
			title: "Ask Bot",
			description: "Get your questions answered by the bot",
			color: "RED",
		});
		eightball.addField("Question", command.argString);
		eightball.addField(
			"Answer",
			responses[Math.floor(Math.random() * responses.length)]
		);
		//set footer
		eightball.setFooter(`Requested by ${message.author.tag}`);
		await message.channel.send({ embeds: [eightball] });
	}
	@SimpleCommand("say", { aliases: ["talk", "repeat"] })
	public async say(command: SimpleCommandMessage): Promise<void> {
		const { message } = command;
		if (message.author.bot) return;
		await message.reply(command.argString);
	}
	@SimpleCommand("nick", { aliases: ["nickname"] })
	public async nick(command: SimpleCommandMessage): Promise<void | Message> {
		const { message } = command;
		if (message.author.bot) return;
		let member = message.mentions.members!.first();
		const nick = command.argString.split(" ").slice(1).join(" ");
		if (nick.length > 32) return message.reply("nickname too long");
		await member!.setNickname(nick);
		await message.channel.send(
			`${member?.user.tag} has changed their nickname to ${nick}`
		);
	}
	/*
     @commands.command(aliases=['encrypt','enc'],help ='use this command to create passwords with lithium encryption , the bot sends u the message privately') 
    @commands.cooldown(1,20,commands.BucketType.guild)
    async def e(self,ctx,*, term:str=''):
        targetMember = ctx.message.author
        y=term.lower()
        l=list(y)
        k= ['f','g','h','j','k','l','a','s']
        m = ['q','w','e','r','t','y','u','i']
        dd = random.choice(k)
        mm = random.choice(m)
        random.shuffle(l)
        c = ''.join(l)
        f=''
        a=['a','c','e','g','i','k','m','o','q','s','u','w','y']
        b=['b','d','f','h','j','l','n','p','r','t','v','x','z']
        for i in c:
            if i in a:
                f+=f"{dd}"
            elif i in b:
                f+=f"{mm}"
            elif i==" ":
                f+='-'
        myEmbed11=discord.Embed(title="Encrypter", description="lithium Encryption",color=0x992d22)
        myEmbed11.add_field(name="Encrypt", value=term,inline=False)
        myEmbed11.add_field(name="Encrypted as", value=f,inline=False)
        await targetMember.send(embed = myEmbed11)
        await ctx.send("Encrypted password has been sent to the user")
*/
}
