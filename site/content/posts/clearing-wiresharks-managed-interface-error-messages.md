---
title: 'Clearing Wiresharks Managed Interface Error Messages'
description: 'A quick fix for Wireshark''s "Can''t get list of interfaces" error that builds up after repeatedly capturing from remote devices.'
pubDate: 2020-10-27
tags: ['wireshark', 'troubleshooting', 'tools']
featured: false
---

As another follow up to one of my previous posts of [Capturing packets from a Ruckus AP](/posts/using-a-ruckus-ap-to-capture-packets) you will probably get an error stating that Wireshark "Can't get list of interfaces: is the server properly installed on x.x.x.x?" I am not sure if this happens on all operating systems, but I have had this happen while using Windows 10.

[![Wireshark Error](/images/clearing-wiresharks-managed-interface-error-messages/Wireshark-Error.png)](/images/clearing-wiresharks-managed-interface-error-messages/Wireshark-Error.png)
Normally this isn't a big deal, but these will show up for each device you have connected to in the past and over time you can accumulate quite a few. The solution I have found is to edit the "**Recent_common**" file located in "**%userprofile%\\AppData\\Roaming\\Wireshark**". First, if you have Wireshark open please close it as these changes will not take effect and will be overwritten if closed after. Now, Open this file with your favorite editor of choice and delete or comment out the lines named "**recent.remote_host: <IP Address>,,0**" save the file and exit.

[![Wireshark Recent Common](/images/clearing-wiresharks-managed-interface-error-messages/Wireshark-Recent_Common-1024x726.png)](/images/clearing-wiresharks-managed-interface-error-messages/Wireshark-Recent_Common.png)
Now, relaunch Wireshark and these errors should not show up again until after you have added another remote interface.

Hopefully you found this helpful, thanks for stopping by.
