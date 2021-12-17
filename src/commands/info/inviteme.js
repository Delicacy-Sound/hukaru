const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Calypso to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://media.discordapp.net/attachments/878740764715266068/921504171432231002/PicsArt_12-17-01.21.44.png?width=604&height=604')
      .setDescription(oneLine`
        Click [here](https://discordapp.com/oauth2/authorize?client_id=916771865840713778&scope=bot&permissions=403008599)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/weayRSckT3) | ' +
        '[Repository](https://github.com/Delicacy-Sound/hukaru)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
