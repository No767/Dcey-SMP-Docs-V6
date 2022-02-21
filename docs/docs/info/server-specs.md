---
title: Server Specs
sidebar_position: 2
---

# Server Specs

## Deltaline (Main Prod Server)

CPU: Intel Core i5-4590T @ 2GHz (4 cores)

RAM: 16GB DDR3 SDRAM

Server RAM allocation:

* SMP Economy: 6GB

Chunks Pre-Gen Radius:

* SMP Economy: 1.5K

Storage: 256GB SSD

Internet: 1Gbps CAT 7 ethernet

OS: Windows 10 Pro

Additional Critical Processes:

* Docker - Hosting for [Rin](https://github.com/No767/Rin) (will be moved to lavender soon)
* NGINX - Dynmap Web Server + Reverse Proxy (will be moved to lavender soon)
* PostgreSQL - Data Storage for Rin and Kumiko

## Lavender (Secondary Prod Server)

CPU: Intel Core i5-4590T @2GHz (4 cores)

RAM: 16GB DDR3 SDRAM

Storage: 256GB SSD

Internet: 1Gbps CAT 6 or 7 ethernet

OS: Ubuntu Server 20.04.03 LTS

Critical Processes: 

- Docker - Hosting for [Rin](https://github.com/No767/Rin) and [Kumiko](https://github.com/No767/Kumiko) + Status Trackers
- NGINX - Reverse Proxy
- PostgreSQL - Data Storage for Rin and Kumiko
