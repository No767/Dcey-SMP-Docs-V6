---
title: Noted Issues
sidebar_position: 1
---

# Noted Issues

- Most farms won't work as expected due to how Paper and all upstream projects adjust the code in favor of performance over playability

- Paper currently has an issue ([#7063](https://github.com/PaperMC/Paper/issues/7063)) that prevents me from upgrading the server to 1.18.1. As of writing this (12/29/2021), I'm still waiting on a proper fix for this. Spigot currently also has an issue when upgrading a world from 1.17.1 to 1.18.1. 

## Solved Issues

- [x] issue with bedrock clients having a hard time joining. this is the cause by paper and the patches again. Waterfall was constantly kicking bedrock players out due to overflow of packets. Solved by switching to FlameCord. Already fixed by Geyser
- [x] atr plugin having a hard time with bedrock players. fixed in the lastest build
- [x] if you refresh the server list too much, you might get blacklisted. This is due to the antibot plugin that is in place. Fixed by adjusting the config
- [x] the html website has a hard time with mobile users. still trying to optimize the code and get support working with it (has bootstrap installed). This is already fixed within the latest dev commit and on the website itself
- [x] Mobs have a lower spawning rate than before. This has to do with Paper's no-view-tick-distance, the current bukkit.yml config, and other factors like plugins, etc. This might be an issue with Paper (Issue [#6214](https://github.com/PaperMC/Paper/issues/6214)), where the 1.17.1 no-view-tick-distance is broken. Methods to fix this include changing the bukkit.yml to have it's default vaules (actually increasing them will account for this), and waiting for the bug to be fixed