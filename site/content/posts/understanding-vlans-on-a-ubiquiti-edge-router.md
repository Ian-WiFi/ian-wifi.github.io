---
title: 'Understanding VLANs on a Ubiquiti Edge Router'
description: 'Setting up VLANs on a Ubiquiti EdgeRouter to segment smart home devices onto their own network.'
pubDate: 2023-06-20
tags: ['ubiquiti', 'networking', 'vlans']
featured: false
---

It's been quite a while since I posted an update to the blog, so I figured I better get on it. To ease into it, I am starting with a recently completed topic, segmenting my home network and lab into multiple VLANs.

As of the time of writing, I performed this on a Ubiquiti EdgeRouter X running firmware Firmware v2.0.9-hotfix.6.

I have been acquiring more smart home devices and figured it was time to start segmenting these off my network. To do this, I thought it would be easiest to create an "internet only" VLAN on which I could put all these devices.

Setting these up in the EdgeRouter was an easy process.

From the dashboard, click the "Add Interface" button and choose "Add VLAN".

[![Add Vlan](/images/understanding-vlans-on-a-ubiquiti-edge-router/Add-Vlan.png)](/images/understanding-vlans-on-a-ubiquiti-edge-router/Add-Vlan.png)

Fill out the dialog box with your particular settings and save to continue.

[![Add Vlan box](/images/understanding-vlans-on-a-ubiquiti-edge-router/Add-Vlan-box.png)](/images/understanding-vlans-on-a-ubiquiti-edge-router/Add-Vlan-box.png)

Do note that I added this VLAN not to an individual interface or port but to the switch0 interface.

From here, I headed over to the "Services" tab and created a new DHCP Server so I could test connectivity after finishing my configuration.

[![DHCP server](/images/understanding-vlans-on-a-ubiquiti-edge-router/DHCP-server.png)](/images/understanding-vlans-on-a-ubiquiti-edge-router/DHCP-server.png)

With this all completed. I returned to the "Dashboard" tab to add the VLANs to the ports. Find "Switch0" in the list and choose "Actions" When the menu pops up, click on the "Vlan" tab.

[![vlan config](/images/understanding-vlans-on-a-ubiquiti-edge-router/vlan-config.png)](/images/understanding-vlans-on-a-ubiquiti-edge-router/vlan-config.png)

From how I have understood this, the pvid acts as the native, untagged, or access VLAN, depending on what vendor you have previously used, if you leave the pvid section blank, it will use the native VLAN (1). The vid acts as the trunked or tagged VLANs. In the vid section, you can use commas to specify multiple VLANs, but you cannot do a range of VLANs. Save your changes.

Now test and verify that it is all working correctly.

Using the appropriate commands, you can also do this same configuration from the "Config Tree" tab or the CLI. The config tree helps quite a bit in understanding how this is set up and the commands needed to do this thru the CLI.

Please let me know if you have any questions about this. Thank you for reading.
