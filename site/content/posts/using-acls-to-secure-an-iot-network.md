---
title: 'Using ACLs to secure an IoT Network'
description: 'Building ACLs on a Ubiquiti EdgeRouter to isolate an IoT VLAN from the rest of the home network while still allowing internet access.'
pubDate: 2021-07-21
tags: ['networking', 'iot', 'security']
featured: false
---

With more and more Internet of Things (IoT) and Smart Devices showing up in my house, I figured it would be a good idea to build a separate network for these devices to live on, rather than on my regular network. Creating the actual network was the easy part, but figuring out the ACLs to block this traffic was a little more difficult. I wanted to share my experiences in case anyone else is looking to do this same thing.

## My Setup

At the current time of writing this post, my home network is fairly simple:

- Ubiquiti Edge Router
- A somewhat managed L2 switch
- EoL enterprise-grade AP
- Pi-hole for DNS processing

## Configuration

My first step for the configuration was figuring out the network and VLAN I wanted to use (192.168.15.0/24 and VLAN 15). With that out of the way, I proceeded to add this information to my Router. The DCHP settings were easy and the VLAN wasn't too bad, after I realized I needed to add it to the switch0 interface, from there I assigned this new VLAN to the vid on an interface and tested it to make sure I had this all working. From here I made the VLAN adjustments to my AP and Switch ports (eth2 and eth3) so I could utilize this network on those devices. The pvid and vid were a little confusing on how they worked, but after some quick googling I was able to find [my answer](https://community.ui.com/questions/Understanding-PVID-and-VID-functionality/a74cc75e-5c31-4711-9ddc-57efb7dd06f6).

[![IoT DHCP](/images/using-acls-to-secure-an-iot-network/IoT_DHCP.png)](/images/using-acls-to-secure-an-iot-network/IoT_DHCP.png)
[![IoT Vlan](/images/using-acls-to-secure-an-iot-network/IoT_Vlan.png)](/images/using-acls-to-secure-an-iot-network/IoT_Vlan.png)
[![IoT VlanPort](/images/using-acls-to-secure-an-iot-network/IoT_VlanPort.png)](/images/using-acls-to-secure-an-iot-network/IoT_VlanPort.png)
With the easy part done, I proceeded to configure the ACLs. My goal was to allow the 192.168.15.0/24 network out to the internet only and not to any of my internal networks except for my DNS server. I knew this could be done, but I've never been very good at building ACLs, but I guess that means I just need to do more. After much trial and error, I finally had a configuration that I believe meets these goals.

For the first Ruleset, I configured an Action to Accept for All protocols with the State of New and Established to the Destination IP Address of my DNS server. I then proceeded to block access to any private networks. I did this on the switch0.15 interface (VLAN15 if I'm interpreting this correctly) with the Direction set to in and set the Default Action to Accept. This seemed to block all traffic to my local networks except for my DNS server and still allowed access to the internet. However, the devices were not able to reach the default gateway because of these settings.

[![ACL IoT in DNS Basic](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Basic.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Basic.png)
[![ACL IoT in DNS Advanced](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Advanced.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Advanced.png)
[![ACL IoT in DNS Dest](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Dest.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_DNS_Dest.png)
[![ACL IoT in Rule](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Rule.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Rule.png)
[![ACL IoT in Config](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Config.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Config.png)
[![ACL IoT in Int](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Int.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_in_Int.png)
For the second Ruleset, I configured an Action to Accept for All protocols with the Destination Address of the IoT_Network (192.168.15.0/24) I configured previously. I did this again on the switch0.15 interface, but with the Direction set to local and set the Default Action to Drop.

[![ACL IoT Local Rule](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Rule.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Rule.png)
[![ACL IoT Local Config](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Config.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Config.png)
[![ACL IoT Local Int](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Int.png)](/images/using-acls-to-secure-an-iot-network/ACL_IoT_Local_Int.png)

## Final Thoughts

Since this is not a topic that I do daily. It took me some trial and error before I finally had something up and working. Doing this allowed me to better understand how ACLs work. However, if you notice any errors in my configuration or logic please let me know so I can correct them.

Currently, I have to be on this VLAN or network to get access to the IoT devices I have placed on this network. I plan to make some more configuration changes that allow me to be on my main network and allow access to these devices with limited communication back. I'm sure when I have this working another post will follow.

Thanks for taking the time to read this article.
