const { Command } = require('discord.js-commando');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
module.exports = class test extends Command {
	constructor(client) {
		super(client, {
			name: 'vol1',
			group: 'simple',
			memberName: 'vol1',
			description: 'begins the steam version of Nekopara Vol 1.',
		});
    }
run(message) {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF00FF')
    .setImage('https://media.discordapp.net/attachments/688427230015127742/690326586314326046/1.png?width=883&height=497')
    message.channel.send(embed)
    
    .then(msg =>{
        msg.react('▶️')
        
        const filter = (reaction, user) => {
            return reaction.emoji.name === '▶️' && user.id === message.author.id;
        };
        
        const collector = msg.createReactionCollector(filter, { time: 1800000 });
        let i = 0

        collector.on('collect', (reaction, reactionCollector) => {
            console.log(i)
            if (i == 0){
                const embed = new Discord.MessageEmbed()  
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112346382925836/unknown.png?width=883&height=497')
             msg.edit(embed)
            }
            else if(i == 1){
                const embed = new Discord.MessageEmbed()  
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112444642885708/unknown.png?width=883&height=497')
                msg.edit(embed)
            }
            else if (i == 2){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112501169389608/unknown.png?width=883&height=497')
                msg.edit(embed)
            }
            else if (i == 3){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112536770510868/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 4){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112629989179392/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 5){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112654269874276/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 6){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112688793190426/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 7){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112716702220347/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 8){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112746750345236/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 9){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112789238251580/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 10){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112812403654686/unknown.png?width=883&height=497')
                msg.edit(embed)
            }else if (i == 11){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112849753932023/unknown.png?width=883&height=497')
                msg.edit(embed)
            }else if (i == 12){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112883010306099/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 13){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112923376549888/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 14){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690112968867709102/unknown.png?width=883&height=497')
                msg.edit(embed)
            } else if (i == 15){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113010764742665/unknown.png?width=883&height=497')
                msg.edit(embed)
            }else if (i == 16){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113042364629005/unknown.png?width=883&height=497')
                msg.edit(embed)
            }else if (i == 17){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113243825569839/unknown.png?width=883&height=497')
                msg.edit(embed)
            }else if (i == 18){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113278546018372/unknown.png?width=883&height=497')
                msg.edit(embed)
                //in exchange for freedom
            }else if (i == 19){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113317917818898/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 20){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113378177253406/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 21){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113402269597704/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 22){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113563939045393/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 23){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113602459271186/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 24){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113666036531227/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 25){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113760643383322/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 26){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113836824657920/unknown.png?width=884&height=498')
                msg.edit(embed)
            }else if (i == 27){
                const embed = new Discord.MessageEmbed()
                .setColor('#FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113862543999018/unknown.png?width=884&height=498')
                msg.edit(embed)
                //if fact, there were two of them
            }else if (i == 28){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113900997246976/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 29){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113946971144202/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 30){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690113989866291260/unknown.png?width=884&height=497')
                msg.edit(embed)
                //annoying warnings
              }else if (i == 31){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114033285726316/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 32){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114067829882949/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 33){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114094245740613/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 34){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114126772436993/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 35){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114147392028687/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 36){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/690114165213364273/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 37){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891455303614535/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 38){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891484877783091/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 39){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891524752900156/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 40){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891568193568838/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 41){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891607468900382/unknown.png?width=884&height=497')
                msg.edit(embed)
                //meow?
              }else if (i == 42){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891637856632892/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 43){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891667426476142/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 44){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891717473042462/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 45){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891756161040414/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 46){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891792035053648/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 47){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891822900936714/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 48){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891872527941660/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 49){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891909886607441/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 50){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891944753725480/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 51){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691891983781855262/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 52){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892015201255504/unknown.png?width=884&height=497')
                msg.edit(embed)
                // picked up chocola
              }else if (i == 53){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892051578716231/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 54){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892698130677800/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 55){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892742967656449/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 56){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892781177634886/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 57){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892808113455114/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 58){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892843140087818/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 59){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892882717540362/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 60){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892914929795103/unknown.png?width=884&height=497')
                msg.edit(embed)
                //infornt of her
              }else if (i == 61){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892942251491388/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 62){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691892976246456360/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 63){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691893012506345492/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 64){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691893052641509437/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 65){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691893082807074846/unknown.png?width=884&height=497')
                msg.edit(embed)
              }else if (i == 66){
                const embed = new Discord.MessageEmbed()
                .setColor('FF00FF')
                .setImage('https://media.discordapp.net/attachments/688427230015127742/691893146748977223/unknown.png?width=884&height=497')
                msg.edit(embed)
              }
            else{
                
            }
            console.log(`Collected ${reaction.emoji.name}`);
            i++
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });


    })
}
}