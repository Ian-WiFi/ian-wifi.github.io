---
title: 'Keeping track of IP addresses with software'
description: 'Setting up phpIPAM to track IP addresses and subnets while segmenting a home network into multiple VLANs.'
pubDate: 2020-11-23
tags: ['networking', 'ip-management', 'homelab']
featured: false
---

Over the last little bit, I feel that I am losing a bit of my networking knowledge due to doing the same thing. I decided I needed a new challenge to help me stay fresh, and that I would start separating my home network into multiple Vlans and subnets. Currently, most of the devices in my house are on DHCP, which I'm fine with, except for a handful of more critical devices that need dedicated IPs. Usually, I either rely on my memory, which is not the greatest, or my browser history to find a device. My goal is to break my network into 3 zones default, internet-only, and a lab area.

Wanting something a little better than a Google Sheet I started looking for some basic Free options when I came across this, [https://en.wikipedia.org/wiki/IP_address_management](https://en.wikipedia.org/wiki/IP_address_management).  
This was a great starting point to find an IP address management software, after checking out some of the live demos for a couple of the fairly recently updated ones I soon settled on phpIPAM ([https://phpipam.net/](https://phpipam.net/)). The installation guide was pretty straightforward and soon I had this running on a spare Linux box.

After a little bit of customization, I soon had something that I could use and begin tinkering and learning with.

[![ipam](/images/keeping-track-of-ip-addresses-with-software/ipam.png)](/images/keeping-track-of-ip-addresses-with-software/ipam.png)
A couple of quick highlights, I like the various visual views of used and free IP addresses, the ability to have it automatically scan a local subnet and report back its findings, and the possibility to use API.

Is this an overkill solution? Definitely, but my goal with this is to use it to further expand my knowledge and better document what I have, and since it doesn't take much as for resources, I figured why not. I hope that tinkering with this will cause me to discover some different ways to do things than how I have always done it in the past. Also, I can use this for documentation on some of the side work I have done with clients to remember how I set up their subnets for what is free, used, and which devices are what.

Let me know what you think or if you have any suggestions that I should look into.  
Thank you,
