---
title: 'Keeping track of wireless validation surveys with Google Sheets'
description: 'A Google Sheets version of my Excel conditional-formatting trick for tracking wireless validation survey dates, for access from any device.'
pubDate: 2021-02-18
tags: ['wireless-surveys', 'google-sheets', 'tools']
featured: false
---

As a follow-up to one of the previous articles that I had [created](/posts/keeping-track-of-wireless-validation-surveys-with-excel). I wanted to have a backup of this data, and also be able to access it from more than just my computer. My solution to this problem is to put this data in Google Sheets since this allows me to achieve both of my goals. Also, I know that not everyone uses Excel so why not.

While it is not as easy in Excel. It's still different enough that I decided to put together another blog post documenting the steps.

Starting highlight the row, column, or data you want this to be applied on and in the top menu bar click on "Format", and in the drop-down menu select "Conditional formatting".

[![Google Sheets 01](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_01.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_01.png)

From here a new menu will appear on the right of your screen. Click on "+ Add another rule" when this section appears choose "Color scale" from the top menu and click on the section noted as "preview". Now choose a color scale of your liking, for me it is "green to yellow to red", this is an easy solution for me to know what ones I need to re-evaluate.

[![Google Sheets 02](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_02.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_02.png)
[![Google Sheets 03](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_03.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_03.png)
[![Google Sheets 04](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_04.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_04.png)
The only issue I have with this color scheme is that the colors are backward. (newest is red oldest is green) This is an easy fix I swapped the colors from the "Min value" and the "Max value". By doing so I now have the color scheme of my liking and applied to the data I had selected.

[![Google Sheets 05](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_05.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_05.png)
[![Google Sheets 06](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_06.png)](/images/keeping-track-of-wireless-validation-surveys-with-google-sheets/Google_Sheets_06.png)
I still don't have this data being automated yet, but at least I have this in an easier to access format and with some form of backup in case my computer decides to crash and burn.

Hopefully you were able to find this information helpful, Thank you for stopping by.
