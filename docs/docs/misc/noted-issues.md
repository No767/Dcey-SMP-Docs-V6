---
title: Noted Issues
sidebar_position: 1
---

# Noted Issues

- Farms will not work due to how Airplane and all upstreams edit the code to patch expolits and bugs. in return, farms **WILL NOT WORK**. If this is the case, I'm switching to a Velocity based proxy with fabric server running Lithuim, Starlight, carpet, and more optimization mods

### Solved Issues

- [x] issue with bedrock clients having a hard time joining. this is the cause by paper and the patches again. Waterfall was constantly kicking bedrock players out due to overflow of packets. Solved by switching to FlameCord. Already fixed by Geyser
- [x] atr plugin having a hard time with bedrock players. fixed in the lastest build
- [x] if you refresh the server list too much, you might get blacklisted. This is due to the antibot plugin that is in place. Fixed by adjusting the config
- [x] the html website has a hard time with mobile users. still trying to optimize the code and get support working with it (has bootstrap installed). This is already fixed within the latest dev commit and on the website itself
- [x] Mobs have a lower spawning rate than before. This has to do with Paper's no-view-tick-distance, the current bukkit.yml config, and other factors like plugins, etc. This might be an issue with Paper (Issue [#6214](https://github.com/PaperMC/Paper/issues/6214)), where the 1.17.1 no-view-tick-distance is broken. Methods to fix this include changing the bukkit.yml to have it's default vaules (actually increasing them will account for this), and waiting for the bug to be fixed