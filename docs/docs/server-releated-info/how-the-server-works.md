---
title: How The Server Works
sidebar_position: 1
---

# How the Server Works

There are multiple parts of the server that function together. Here's a explanation on how it works:

### Minecraft Server

This is the Minecraft server you will be playing on. It's just a regular server, running Purpur instead

### MySQL Database

The MySQL Database houses some of the information that the servers needs to run. Essentially this is another way to reduce storage, and to let the data be easily accessed by me that would normally be inaccessable or only through in-game commands. This also allows for one central database, where everything connects to it and makes it a lot more cleaner. MySQL is also known to be acid compliant, which means if a power outage happened while the servers, the data would still be intact.

### Plugins

This is where the most complex part comes in. There are 35+ plugins on the server, and they contain a lot of the basic framework of the server. Luckperms as the perms manager, Geyser for bedrock support, etc. Every plugin has a purpose; whether it's a lib, API, or something else. Configuring these plugins often takes hours of work to do, since there is so much to keep track of and so much that needs to be changed. And often stacktraces and error logs pop up everywhere.

### Web Server

For the web server, I am using Mircosoft IIS. The reason why is for the dynmap plugin, which allows you to see the minecraft world like google maps. But the thing is, there is going to be 3 dynmap pages, because im adding the dynmap plugin to all 3 servers.

* The first part is the "hub". This is the site you see in order to access the dynmap pages. This is custom coded in HTML + CSS and is part of the main website. This also uses bootstrap in order to get it working. Also open source as well, and can be found [here](https://github.com/No767/Dcey-SMP-Hub)
* The second part is the actual dynmap pages themselves. This is where you can use the dynmap and see what the world is like.

### Jenkins CI

#### Note that the Jenkins CI will not be running anymore

The Jenkins CI automatically deploys new changes within the Dcey-SMP-Hub project (Dynmap Hub), and allows for builds to be checked to see if they pass or not. Here's the process and steps of each of them:

1. git checkout on dev or master branch. It's to check if it's up to date or not
2. git pull dev. pulls the latest commit to the local repo, or this case, to the local runner
3. stop IIS by cd to sys32/intersev and then `appcmd stop site`
4. copies all of the files from the hub folder into the folder that IIS will be using to display the actual website
5. start iis up again by cd to sys32/intersev and `appcmd start site`

Basically all this is a fancy and automated way to deploy the website without having to manaully getting all the files and placing them in by hand.