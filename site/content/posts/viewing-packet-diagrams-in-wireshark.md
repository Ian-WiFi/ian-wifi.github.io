---
title: 'Viewing packet diagrams in Wireshark'
description: "How to enable and use Wireshark's Packet Diagrams feature to visually explore the fields inside a captured packet."
pubDate: 2021-02-24
tags: ['wireshark', 'packet-capture', 'tools']
featured: false
coverImage: '/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram-1024x720.png'
---

In one of my conversations with another wireless engineer, I was made aware of a feature in Wireshark that can be used to visually display a packet and the individual fields within it. I recall hearing about this feature a little while ago but thought it was only available in the beta versions of Wireshark. It looks like this has now been rolled into the stable release of Wireshark. After struggling for a little bit to find an exact name or how to turn it on, I figured I should write a blog post about it in case anyone else has wondered about this same thing. The exact feature name is called "Packet Diagrams" and they look something like this:

[![Packet Diagram](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram-1024x720.png)](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram-1024x720.png)
The part that I really like about this feature is if you would like to learn more about packet analysis (or if you are studying for the CWAP) you can use this to help visualize the packets in Wireshark, which I feel makes it a little easier to understand what is going on. Some brief highlights that I have discovered about this are:

- You can click on the individual element and have it highlighted in the "Packet Details" and "Packet Bytes" views sections.
- If you hover over an individual section it will show you the display filter used.
- If you right-click on the diagram you can check the box "Show Field Values" in addition to showing each of the fields, it will show the data that coincides with it.

Ok, enough teasing, but how can I get these cool options for myself you might ask? Initially, I went into the view menu to see what I could discover, but this option was greyed out.

[![Packet Diagram ViewMenu](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram_ViewMenu.png)](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram_ViewMenu.png)
After talking with Rowell over at the [Clear To Send Podcast](https://www.cleartosend.net/). He directed me to "Edit" then"Preferences" and the "Layout" Submenu which allowed me to set this as an option for one of my panes. I have heard that after selecting it this way it will be ungreyed out in the view menu and you can switch between it. I wonder if I didn't have something selected correctly and that's why I couldn't make this change.

[![Packet Diagram Preferences](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram_Preferences.png)](/images/viewing-packet-diagrams-in-wireshark/Packet_Diagram_Preferences.png)
Hopefully, you were able to find this piece of information helpful.  
Please let me know if you have any questions bout this and I will do my best to explain it. Thank you for stopping by.
