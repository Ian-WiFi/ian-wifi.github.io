---
title: 'Using A Ruckus AP to capture packets - Part 2'
description: "A follow-up on capturing packets from Ruckus 802.11ax APs, where the interfaces from my original post didn't work as expected."
pubDate: 2020-10-12
tags: ['ruckus', 'wireshark', 'packet-capture']
featured: false
---

After publishing my [last article](/posts/using-a-ruckus-ap-to-capture-packets), I was informed that these steps did not work for some AP models on the firmware I was running (5.2.1.0.698), thinking that I had tested this beforehand I set out to find out where I was wrong, and sure enough on the 802.11ax APs that I tested these settings did not work. Well, they worked but there weren't any packets streaming to Wireshark. 

Wondering what could be different, I set out to find my answer, I wasn't sure if these steps didn't work from just the Web GUI or also the CLI. I SSHed into an AP and followed my instructions with the same results as before. However, I did notice something unusual.

[![Ruckus AP Stream ac](/images/using-a-ruckus-ap-to-capture-packets-part-2/Ruckus-AP-Stream-ac-300x78.png)](/images/using-a-ruckus-ap-to-capture-packets-part-2/Ruckus-AP-Stream-ac.png)
This was a different message than what I normally get when using these commands on other AP models, so I decided to investigate further, after doing a get interface on the AP I was able to conclude that this interface didn't show up in the list and it was somewhat far away from the others in use.

[![Ruckus AP Interfaces](/images/using-a-ruckus-ap-to-capture-packets-part-2/Ruckus-AP-Interfaces-121x300.png)](/images/using-a-ruckus-ap-to-capture-packets-part-2/Ruckus-AP-Interfaces.png)
After getting this information, I modified Wireshark to use this interface to capture on, and behold I started receiving packets. I then wondered if this was a CLI setting only, so I switched over to the Web GUI and followed my steps, but this time I used the interface that I gathered from the CLI. Just as before, I started receiving packets on this interface, I did however see in the Wireshark Link-layer Header section that this interface is for 802.11 plus radiotap header and can confirm that there were some additional packets. It appears that my guessing was off on how Ruckus might implement additional radios. For the .ax models I tested these are the new interfaces to use for capturing packets:

2.4 GHz - wlan100  
5 GHz - wlan101

I am not sure if this will be reverted back to how they did it in the past or if this will become the new way in future releases, only time will tell.

Please let me know what you think.
