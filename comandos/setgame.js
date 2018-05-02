const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
let { leftover, options } = client.utils.parseArgs(args, ['s:', 'w', 'l']);

    if (leftover.length < 1) {
        if (options.s) {
            throw 'You must provide a game as well as a stream URL.';
        }

        client.user.setActivity(null, {});
        return message.edit('Cleared your game! :ok_hand:').then(m => m.delete(3000));
    }

    let game = leftover.join(' ');
    let stream = options.s;

    let fields = [];

    let activityOptions = { type: 'PLAYING' };
    let activityFieldTitle = ':video_game: Game';

    if (stream) {
        stream = `twitch.tv/${stream}`

        activityOptions.url = stream;
        activityOptions.type = 'STREAMING';

        fields.push({ name: ':headphones: Stream URL', value: stream });
    } else if (options.w) {
        activityOptions.type = 'WATCHING';
        activityFieldTitle = ':eyes: Watching';
    } else if (options.l) {
        activityOptions.type = 'LISTENING';
        activityFieldTitle = ':sound: Listening to';
    }

    fields.unshift({ name: activityFieldTitle, value: game });

    client.user.setActivity(game, activityOptions);

    message.delete();

    (await message.channel.send({
        embed: client.utils.embed(':ok_hand: Game changed!', '', fields)
    })).delete(5000);
   };
      
   }
}
