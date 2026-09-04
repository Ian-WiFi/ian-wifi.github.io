---
title: 'Will WiFi interfere with Bluetooth?'
description: 'Testing whether Wi-Fi actually interferes with Bluetooth devices, using RSSI data and real-world interference tests.'
pubDate: 2021-07-01
tags: ['wireless', 'rf', 'bluetooth']
featured: false
coverImage: '/images/will-wifi-interfere-with-bluetooth/2.4Jammer.png'
---

After listening to a podcast by the Clear to Send folks about [Spectrum Analysis](https://www.cleartosend.net/264). I had some recollections about some recent conversations that I had with few people about Bluetooth devices and determining if WiFi will stop these devices from working.

Let me provide you some background on this situation. Recently, I was informed about an upcoming event and the person in charge of this event wanted me to make some modifications to the WiFi we had deployed at the location. Usually, this is a custom SSID for them, but this time they wanted me to disable the WiFi at this location namely the 2.4 GHz. I will say I was intrigued and had a couple of questions as to why? They informed me that they were hosting a robotics tournament and didn't want the WiFi interfering with devices, since they would be communicating with the robots over Bluetooth. At this point, I assured them that they would not have a problem with the WiFi interfering with their robots since WiFi does not interfere with Bluetooth due to how the protocol was designed.

## **The data behind this solution**

Having a background in WiFi, I didn't do a lot of research with regards to the Received Signal Strength Indicator (RSSI) that a client device would need to achieve for data communication. These factors are going to vary on a wide range of topics and a per case basis, but I did find this nice chart that I think sums it up fairly well.

[![image](/images/will-wifi-interfere-with-bluetooth/image.png)](/images/will-wifi-interfere-with-bluetooth/image.png)
I wasn't able to find a chart similar to this for Bluetooth that spelled it out as cleanly as this did, but I was able to find this information on [Bluetooth.com](https://www.bluetooth.com/learn-about-bluetooth/key-attributes/range/) under the Receiver Sensitivity section: "Bluetooth® technology specifies that devices must be able to achieve a minimum receiver sensitivity of -70 dBm to -82 dBm, depending on the PHY used. However, Bluetooth implementations typically achieve much higher receiver sensitivity levels. For example, average implementations of the Bluetooth LE 125K (Coded) PHY are achieving a receiver sensitivity of -103 dBm."

After seeing this information I began doing some research and testing of my own to validate these settings. I connected a pair of Bluetooth headphones, began streaming music, and collected the RSSI levels. I decided that streaming music is would be the easiest way to discover if some kind of data loss happened since the audio would distort or cut off.

[![BluetoothRSSI 1](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_1.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_1.png)
[![BluetoothRSSI 2](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_2.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_2.png)
[![BluetoothRSSI 3](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_3.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_3.png)
[![BluetoothRSSI 4](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_4.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothRSSI_4.png)
Around the -110 dBm mark, the audio playback started getting somewhat choppy, but the Bluetooth device stayed connected. At this point, I concluded my signal level tests since I knew that trying to find the exact RSSI value that Bluetooth would disconnect would prove to be difficult and that WiFi would have already disconnected much before reaching this signal level.

In another test, I followed the same setup that I did in my previous test, but this time I took a device that generated wideband RF interference in the 2.4 GHz spectrum and turned it on.

[![BluetoothAndWifi](/images/will-wifi-interfere-with-bluetooth/BluetoothAndWifi.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothAndWifi.png)
[![BluetoothWithInterference](/images/will-wifi-interfere-with-bluetooth/BluetoothWithInterference.png)](/images/will-wifi-interfere-with-bluetooth/BluetoothWithInterference.png)
[![2.4Jammer](/images/will-wifi-interfere-with-bluetooth/2.4Jammer.png)](/images/will-wifi-interfere-with-bluetooth/2.4Jammer.png)
In the first picture, you can see WiFi and Bluetooth working without any issues. The second photo shows what the spectrum looked like after turning on the device that generates the wideband interference. At this point, WiFi stopped working. From what I can tell WiFi followed the Energy Detect mechanisms built into the protocol and proceeded to backs off some of its transmissions. However, Bluetooth still worked fine without any pauses or skipping to the music. I think it's interesting to point out that the AP changed from using OFDM to DSSS in this photo. In the last photo, I placed the RF generating device somewhat close to the Spectrum analyzer. At which point the entire spectrum was wiped out and neither WiFi nor Bluetooth would work.

## **Conclusion**

More tests could have been performed to show the initial point I set out to prove, but I felt sufficient with the results that I had gathered. I did run a few Speedtest and Iperf tests continually to see if I was able to cause any issues to the Bluetooth device, but I was never able to cause any kind of jitter with the Bluetooth audio. However, if there are things that I am not taking into account or have presented some wrong information please contact me, and would be happy to review this data. Thank you for stopping by.
