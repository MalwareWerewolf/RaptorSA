const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    var dogs = [
        'https://cdn.shopify.com/s/files/1/1324/6367/collections/Why_all_dogs_love_us_close_up_large.jpg?v=1487160259',
        'https://static01.nyt.com/images/2018/02/11/realestate/11dogs-topbreeds-Chihuahua/11dogs-topbreeds-Chihuahua-master495.jpg',
        'https://woodsboroworld.com/wp-content/uploads/2018/04/scroll0015.jpg',
        'https://123callingalldogs.com/wp-content/uploads/2017/11/slide-4-1900x825_t.jpg',
        'https://i.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243--dachshund-puppies-weenie-dogs.jpg',
        'http://www.insidedogsworld.com/wp-content/uploads/2016/03/Dog-Pictures.jpg',
        'https://i.huffpost.com/gen/3754046/original.jpg',
        'https://www.dogster.com/wp-content/uploads/2014/06/A-Doberman-puppy.jpg',
        'http://dogcatandman.com/wp-content/uploads/2015/09/doberman1.jpg',
        'https://petsidi.com/wp-content/uploads/2018/06/adopt-a-corgi-puppy.jpg',
        'https://www.pets4homes.co.uk/images/breeds/50/large/fdaffb675fe084458758d97f7bac468f.jpg',
        'https://www.lifegate.it/app/uploads/corgi-surf.jpg',
        'https://www.ideegreen.it/wp-content/uploads/2016/01/pastore-tedesco1.jpg',
        'http://puppytoob.com/wp-content/uploads/2016/09/Black-German-Shepherd-750x493.jpg'

    ];

    const embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription(`Oh look i found a cuty dog :dog:`)
        .setImage(dogs[Math.floor(Math.random()*dogs.length)]);

    return message.channel.send(embed);    
}