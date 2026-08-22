---
title: 'Changing how SSIDs broadcast in Aruba Central'
description: 'How to use SSID zones in Aruba Central/Instant AP to broadcast different sets of SSIDs to different areas of a campus.'
pubDate: 2023-11-03
tags: ['aruba', 'wireless', 'networking']
featured: false
---

It's been too long since I posted and it's been far too long since I posted about a wireless topic. So no better time to start than now.

I have been working with an Aruba Central/Instant AP wireless deployment and ran into a somewhat unique situation where we wanted to not broadcast our standard set of SSIDs to a location and instead broadcast a single SSID. In addition to this, we had some areas on campus where we were already broadcasting an additional SSID and we didn't want to break this. At the time of writing, I am running Instant v8.10.x.x on my deployment.

To my understanding, if you do not have a zone specified, these SSIDs will be the default SSIDs broadcast to all APs in your group. For adding the additional SSIDs we achieved this by using zones.

[![Current zone configuration](/images/changing-how-ssids-broadcast-in-aruba-central/Current-zone-configuration-1024x384.png)](/images/changing-how-ssids-broadcast-in-aruba-central/Current-zone-configuration.png)

My initial thought on how to solve this was to use zones, but Zones only add SSIDs not take them away. Also, I read some documentation that stated that only 1 zone can be applied per AP.

Well after some more research (Thanks Scott), it turns out that I was wrong about the 1 zone per AP rule, that or it was for an older version of AOS than what I was running.  
_"SSID zones are created by configuring WLAN SSID profiles with a zone and attaching them to the AP using the zone name. A maximum of 6 SSID zones can be assigned to an AP and if no specific zone is assigned, the AP will broadcast only the SSIDs configured on the AP or the Instant cluster."_

My solution was to make a new zone (Main), add it to all APs in my group, and add the default SSIDs to this newly created Zone. This was fine until I ran into my first AP where we were broadcasting an additional SSID. Multiple SSIDs could be done, but I wasn't sure about the proper input. After getting some guidance on this. (Thanks Scott again) I found out that a "," needed to be used for multiple zones. I initially added the , with spaces after to make it easier to read, but I didn't see the SSIDs broadcasting. I am not sure if I wasn't patient enough but after removing the spaces I was able to see these SSIDs broadcasting. Example: Outdoors,CAFE,ITLAB Now for the AP that I only wanted a Single SSID broadcasting on I could just add that single Zone (Outdoors) and achieve my goal.

[![AP Zones](/images/changing-how-ssids-broadcast-in-aruba-central/AP-Zones.png)](/images/changing-how-ssids-broadcast-in-aruba-central/AP-Zones.png)

[![Final zone configuration](/images/changing-how-ssids-broadcast-in-aruba-central/Final-zone-configuration.png)](/images/changing-how-ssids-broadcast-in-aruba-central/Final-zone-configuration.png)

Thank you for taking the time to read this, I hope that you have found it helpful, If you have any questions about this please let me know.
