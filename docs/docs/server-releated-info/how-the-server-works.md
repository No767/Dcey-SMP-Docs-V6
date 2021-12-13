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

For the web server, I am using Nginx. The main reason why I picked Nginx over Apache or IIS is that Nginx does support Windows, and I've gotten used to configuring Nginx web servers. Plus, it should run faster than Apache. It can be broken down into 2 main parts: the Dcey SMP Maps and the reverse proxies

- The Dcey SMP Maps will be just the Dynmap page, therefore there is no "hub" you have to access first. The Dcey SMP now only runs as 1 server, due to personal reasons, so it wouldn't make sense for users to click extra buttons in order to access something that doesn't need the hub. Running Nginx + PHP.
- The Reverse Proxies handle the input for the status trackers (for both Dcey SMP and for Rin + Kumiko) and will turn something like `http://status.dcey.net:3001/status` to `http://status.dcey.net`. This should make it easier for users to just access the status tracker. Note when first loading it, it will attempt to redirect you to the dashboard. Just click on the button "Status Page" to get redirected to the status page.

### Jenkins CI

#### Note that the Jenkins CI will not be running anymore

The Jenkins CI automatically deploys new changes within the Dcey-SMP-Hub project (Dynmap Hub), and allows for builds to be checked to see if they pass or not. Here's the process and steps of each of them:

1. git checkout on dev or master branch. It's to check if it's up to date or not
2. git pull dev. pulls the latest commit to the local repo, or this case, to the local runner
3. stop IIS by cd to sys32/intersev and then `appcmd stop site`
4. copies all of the files from the hub folder into the folder that IIS will be using to display the actual website
5. start iis up again by cd to sys32/intersev and `appcmd start site`

Basically all this is a fancy and automated way to deploy the website without having to manaully getting all the files and placing them in by hand.
