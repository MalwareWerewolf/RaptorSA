# Super advanced discord bot ![alt text](https://i.imgflip.com/xu2ct.jpg)

![Issues](https://img.shields.io/github/issues/cramenorn/raptorsa.svg)
![Stars](https://img.shields.io/github/stars/cramenorn/raptorsa.svg)
![Forks](https://img.shields.io/github/forks/cramenorn/raptorsa.svg)

**RaptorSA** is a multi function bot, you can listen music, manage roles, get various informations and many other things. This Discord bot can be helpful for anyone who wants to learn how to make a discord.js bot, every command has it's own folder so it's more easy to read the entire project. I made this so new users can also look at the methods used for certain commands and get some ideas for their Discord bot.

# Contributing

If you want help, don't worry, there are many ways to do it:

* **Contribute with code**: Setup a development environment, make some changes, and [open a pull request](https://github.com/Cramenorn/RaptorSA/pulls).

* **Contribute with ideas**: Have a great idea, but don't know how to code ? No problem! Open an issue so we can talk about your idea.

# Branching

New Pull Requests should be made upon the **testing** branch. If the code does not have any particular issues, then it will be merged into **master** branch.

## Common Issues & Resolutions

Please see the [Common Issues](https://github.com/Cramenorn/RaptorSA/wiki/Common-Issues) page before posting an issue.

# Api keys and tokens

Some commands require an **Api Key** or a **Token** which can be find on these websites: 

* [Google Custom Search Api Key and CX](https://developers.google.com/custom-search/)
* [Riot Games Developer](https://developer.riotgames.com/)
* [Discord Developer to get the token for the bot](https://discordapp.com/developers/applications/)

As many of you know i can't provide my **Api Keys**, because i could compromise my security.

# What do i need to make the bot work ?

* You will need [FFmpeg](https://www.ffmpeg.org/) for the play, stop and skip commands, as ytdl-core package needs ffmpeg or it will not work.
* Make a folder and git clone this repository: [RaptorSA.git](https://github.com/Cramenorn/RaptorSA.git).
* Then type **npm install** to get the needed packages (see the next section) for the bot.
* Check if ytdl-core is updated with the following command npm outdated, if the current version is not updated to the last, type `npm update ytdl-core`
* Edit json files in jsonFiles folder, you need a discord bot **Token** and various **Api Keys** to get the bot work.
* Launch the `index.js` file.

# Built with
* [Discord.js](https://discord.js.org/#/)
* [Node js](https://nodejs.org/en/)