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

## Lavender (Secondary Prod Server)

CPU: Intel Core i5-4590T @2GHz (4 cores)

RAM: 16GB DDR3 SDRAM

Storage: 256GB SSD

Internet: 1Gbps CAT 6 ethernet

OS: Ubuntu Server 20.04.03 LTS

Critical Processes: 

- Docker - Hosting for [Rin](https://github.com/No767/Rin) and [Kumiko](https://github.com/No767/Kumiko) + Status Trackers
- HAProxy - Reverse Proxy for the web infrastructure
- Varnish - HTTP Accelerator + Cache (used to cache all images being loaded)
- PostgreSQL - Data Storage for Rin and Kumiko + Dynmap
- MySQL - Main DB Storage for Dcey SMP + TransDiaries SMP                
