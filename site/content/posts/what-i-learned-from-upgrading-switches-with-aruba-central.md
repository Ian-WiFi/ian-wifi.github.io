---
title: 'What I learned from upgrading switches with Aruba Central'
description: 'Lessons learned upgrading switch firmware through Aruba Central, including compliance settings and unexpected version rollbacks.'
pubDate: 2022-10-02
tags: ['aruba', 'networking', 'switches']
featured: false
coverImage: '/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Loading-image.jpg'
---

It’s been long overdue since I published a new post. Recently, I changed jobs and now manage an Aruba deployment, while this has been different, I am excited about this challenge. I wanted to share about one of the latest problems I ran into and what I learned from it.

I have a set of switches that were not syncing properly with Aruba Central. While working with TAC, and not being able to find what was wrong, they recommended that I upgrade the firmware on these switches as one of the first steps in the troubleshooting process.  Since this is a production network, I had to delay these changes until I could schedule a change window.

[![Central Switch firmware 1](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Switch-firmware-1-1024x88.png)](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Switch-firmware-1.png)

I tested the changes on a somewhat lab device and things seemed to work fine. However, when the day of the change window came, I had a few surprises that I wanted to share with others. In case they have these issues or in case I need to refer to my notes for when I need to upgrade the firmware again.

1st problem: uploading the firmware to the device

Usually, to do the firmware upgrade. I would go into Aruba Central and use the set compliance feature. When going to do so, the firmware upgrade that Aruba recommended was not in the list (10.09.1000).

[![Central Set Compliance](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Set-Compliance.png)](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Set-Compliance.png)

I didn’t find this a big deal since in my lab environment I had previously applied the firmware I wanted thru a TFTP server and knew the steps to do it again. When uploading the firmware thru the CLI on the switch, I was given the choice between saving it to the Primary or Secondary image location. Seeing how the current image was running on the Primary and the Secondary image was old I picked the Secondary location and rebooted the switch telling it to boot from the secondary image. The switch came back up and everything looked good, but after a few minutes the switch rebooted and I noticed that the firmware was back at the previous version.

My initial thoughts were that the switch had checked in with Aruba Central, noticed that the configuration was different due to the boot location I set in the CLI and overwrote my changes, and rebooted the device to make it match, while this is partially true it was not my entire solution. So back to the CLI to TFTP the firmware to the Primary image location and rebooted the switch. Success, well at least for a few minutes before the switch rebooted again.

[![Central Switch CLI](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Switch-CLI.png)](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Switch-CLI.png)

2nd Problem: setting the compliance

At this point, I noticed that the Primary image for the switch was also set back to the older version I had upgraded from. Initially, I was a little confused until I realized that the switches check in with Aruba Central to determine what version they are on and if it doesn’t match, they will upgrade and downgrade to the version listed.

At this point, I needed to set the compliance properly. Seeing how the firmware version I wanted to use was not in the list, I selected Custom Build and typed in the firmware version I wanted to use.

[![Central Set Compliance fixed](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Set-Compliance-fixed.png)](/images/what-i-learned-from-upgrading-switches-with-aruba-central/Central-Set-Compliance-fixed.png)

I was not sure if the upgrade would happen since this was set to Custom Build. So I went back to the CLI, uploaded the firmware to the switches, and rebooted.

Success, the switches took the firmware version and after a few minutes, I didn’t notice any reboots with the firmware being downgraded.

I hope you found this helpful, if you have any suggestions, please let me know and I’ll investigate them.

Thanks for stopping by.
