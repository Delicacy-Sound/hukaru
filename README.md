<h1 align="center">
  <br>
  <a href="https://github.com/Delicacy-Sound/hukaru"><img src="./data/images/hikaru_title.png"></a>
  <br>
  Hikaru - Discord Bot
  <br>
</h1>

<h3 align=center>A fully customizable bot built with <a href=https://github.com/discordjs/discord.js>discord.js</a></h3>


<div align=center>

  <a href="https://discord.gg/weayRSckT3">
    <img src="https://discordapp.com/api/guilds/709992782252474429/widget.png?style=shield" alt="shield.png">
  </a>

  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.5.3-blue.svg?logo=npm" alt="shield.png">
  </a>

  <a href="https://github.com/Delicacy-Sound/hukaru/LICENSE">
    <img src="https://img.shields.io/badge/license-GNU%20GPL%20v3-green" alt="shield.png">
  </a>

</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
  •
  <a href="#credits">Credits</a>
</p>

## About

Hikaru is an open source, fully customizable Discord bot that is constantly growing. She comes packaged with a variety of commands and a multitude of settings that can be tailored to your server's specific needs. Her codebase also serves as a base framework to easily create Discord bots of all kinds. You can invite her to your Discord server using [this](https://discordapp.com/oauth2/authorize?client_id=874396158741594113&scope=bot&permissions=403008599) link! Also, you can join the official [Hikaru Support Server](https://discord.gg/weayRSckT3) for all questions, suggestions, and assistance!

If you liked this repository, feel free to leave a star ⭐ to help promote Hikaru!

## Features

**110+** commands and counting across **8** different categories!

  * **Administration:** A huge amount of settings to customize with commands like `setprefix`, `setwelcomemessage`, and `setverificationrole`
  * **Moderation:** Commands such as `kick`, `ban`, and `mute` to assist your moderator staff
  * **Fun & Games:** Tons of fun commands like `trivia`, `meme`, `emojify`, and a variety of animal pic commands like `cat`, `dog`, and `fox`
  * **Information:** Commands like `userinfo` and `serverinfo` for general utility
  * **Points:** A unique points system with a rotating winner that has commands like `leaderboard`, `givepoints`, and `crown`
  * **Color:** Change your Discord color with commands like `color`, `createcolor` and `randomcolor`
  * **Owner:** Owner specific commands like `eval` and `servers`
  * **Miscellaneous:** All other commands like `feedback` and `bugreport`

Hikaru also comes packed with a variety of features, such as:

  * **Auto role** assignment
  * Server **verification** via reactions
  * **Welcome messages** and **farewell messages**
  * **Logging** for mod commands and various events
  * **Moderator only** channels
  * A **starboard**
  * **Auto kicking** when a warn limit is reached
  * Auto **random colors** when members join
  * Per **command disabling**
  * And much more! There are over **30+** settings to tweak!

## Emojis

If you are **self-hosting** Hikaru, you may notice that the emojis for certain commands are not displaying. This is because Hikaru uses **custom emojis** for a variety of her commands. These emojis will have to be added to your own server, and you will have to change the corresponding IDs in the `emojis.json` util if you would like to use them. Or, you can replace the emojis in `emojis.json` with ones you already have access to. If you would like to use Hikaru's original custom emojis, hop into the [Hikaru Support Server](https://discord.gg/weayRSckT3) where you can snag them all.

## Colors

Upon being invited to a server, Hikaru will automatically create **6** predefined colors for your server to enjoy. To add more, use the provided `createcolor` command to quickly and easily create new colors.

To add colors manually, first create a few empty roles at the bottom of your server's role hierarchy. The names of these roles must begin with the character `#`, for example, `#Red` or `#Blue`. Then change the color of that role to your desired hex, and that's it! After they are set up, the members of your server can then change their color by using Hikaru's color commands! Credit to [Threebow](https://github.com/Threebow) for the idea.

![Alt Text](https://i.imgur.com/SLJCN6y.gif)

## To-Do

Hikaru is in a continuous state of development. New features/updates may come at any time. Some pending ideas are:

  * Music
  * Automod
  * Stream alerts
  * Custom tag/reaction system

## License

Released under the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html) license.