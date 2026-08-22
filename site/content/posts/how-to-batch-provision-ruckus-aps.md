---
title: 'How to Batch Provision Ruckus APs'
description: "Using Ruckus SmartZone's batch provisioning feature to mass-import APs with pre-configured settings via a CSV file."
pubDate: 2020-11-18
tags: ['ruckus', 'wireless', 'networking']
featured: false
---

After using Ruckus' SmartZone platform for a bit now, I have found a few tricks along the way that has made my life easier, one of these tricks is Batch Provisioning APs. This allows you to mass import AP's into your controller with some pre-configured settings. (Name, location, description, IP settings, etc) while this doesn't allow you to configure all of the settings of the AP it is a good start.

To get started you will want to download a copy of the file used as a template for this.

[![Export Batch](/images/how-to-batch-provision-ruckus-aps/Export-Batch-1024x803.png)](/images/how-to-batch-provision-ruckus-aps/Export-Batch.png)
After getting the file there are a couple of things that are required to be filled out (If I remember correctly they are AP Mac Address, Zone Name, Model, Administrative State, and the Serial Number.) Fill out the information that you need but please note a couple of things

1. The Zone Names need to be an exact match for spelling and capitalization.
2. I gather the MAC Addresses and the Serial Numbers by using a barcode scanner, I either pull this from the box that the AP came in or on the sticker on the bottom of the AP, I then use a formula to convert the MAC Address to the proper format. '=LEFT(A1,2)&":"&MID(A1,3,2)&":"&MID(A1,5,2)&":"&MID(A1,7,2)&":"&MID(A1,9,2)&":"&RIGHT(A1,2)'
3. The MAC addresses need to have the ":" in them.
4. When adding the serial number make sure to set the field as a number with no decimal places. This has to be reset each time you close and reopen the file.
5. Do a Save As on the file and make sure you change it to a CSV (Comma delimited) (\*.csv)

[![Batch Sheet 1](/images/how-to-batch-provision-ruckus-aps/Batch-Sheet-1-1024x80.png)](/images/how-to-batch-provision-ruckus-aps/Batch-Sheet-1.png)
Now import the file, pending everything was filled out correctly, it should show up under the default group for the zone you specified. At this point, the AP's will show up in your controller but with limited settings that can be changed.

[![Batch AP](/images/how-to-batch-provision-ruckus-aps/Batch-AP-1024x744.png)](/images/how-to-batch-provision-ruckus-aps/Batch-AP.png)
Only after an initial connection from the AP to the controller, you then can change all the other settings. Please note: that if you have an AP that won't seem to join the controller, and all the scg settings are correct on the AP, verify that the MAC Address, Serial number, and AP model are accurate for the device in question.

I haven't yet looked into Ruckus' API system to see if this is possible to do another way, I am sure it is, but it's something that I hope to do soon. Please give me your feedback on this and if there's anything that I missed.  
Thank you,
