---
title: Even More Info
sidebar_position: 2
---

# Even More Info

The servers are designed to run with a good amount of players online at once (with fully optimized configs and startup flags). I've done so much optimizations to the servers to make it as lag free as possible. Hence why I'm using Airplane (a fork of Tuinity and Paper) and Waterfall (fork of BungeeCord) as my server softwares. The vanilla server software is way too inefficient, which it constantly gives me tps lag warnings in the console. And plus Aikar's timings makes it _way way_ easier to check for lag (along with the spark plugin).

I always try to update the server software and plugins as fast as i can. Airplane does update the upstreams once a while, so bugs mix not be fixed right away, since they need to make sure it complies correctly. The server is already using the Starlight lighting engine made by Spottedleaf (part of tuinity, complete rewrite of the vanilla lighting engine). So there should not be any lighting issues unless the starlight engine version isn't bumped up yet. Yes I'm aware of the Phosphor mod, but that can only do so much. And the changes don't address the root cause: the vanilla lighting engine itself. Spottedleaf goes into more technical details within this link [here](https://github.com/Spottedleaf/Starlight/blob/fabric/TECHNICAL_DETAILS.md)

Note that **most vanilla farm designs** (iron farms, slime farms, afk fish farms, etc) **will not work** because of the changes that Tuinity, Airplane, PaperMC and Spigot makes to the code. (And how I have the configs set up) The chunks for the server have been pre-generated. 1.5K radius for the survival server, and 5K for the creative server (from the point of 0,0 on both servers). When I mean I "pre-generated" the chunks, I **didn't** load all the chunks by myself. I don't even know what those chunks have, since I never went any further than the spawnpoint. What I'm referring to is using a plugin ([Chunky](https://www.spigotmc.org/resources/chunky.81534/)) in order to pre generate all of the chunks within a radius of 1.5K on the smp economy server, 7.5K on the creative server and 12K on the smp factions server

If people within the server complain about lag, then it's most likely not the fault of the server. All of the configs have been set to optimize for a lag-free server. ([Here's the guide that I used to optimize the servers](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/)) If you check the tps is around 20, that means there is basically no server lag. This might be a issue of ping. To check ping, press the tab button (if your on java edition), and look at the green bar. If it's full, that means you have good ping. The lower it goes, the worse your ping becomes. Alternatively, you can run the `/ping` cmd to find out your ping and someone else's ping in ms. The high that number is, the more lag you will have connecting to the server. Note that this might be a issue with the ddos protection that is in place

Fun fact: some of the server's databases aren't running H2 or SQLite. I'm running MySQL for the database engine. Moving to a database engine like MySQL makes running through queries and looking through data a lot easier and faster (and also i self taught myself the SQL language so looking through tables has been easier than ever). And no the dynmap plugin is not running MySQL due to the transfer process and seperate web server

The mc servers are using Aikar's JVM GC flags already...
