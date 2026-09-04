---
title: 'Keeping track of wireless validation surveys with excel'
description: "Using Excel's conditional formatting to color-code wireless validation survey dates and spot aging surveys at a glance."
pubDate: 2020-11-09
tags: ['wireless-surveys', 'excel', 'tools']
featured: false
coverImage: '/images/keeping-track-of-wireless-validation-surveys-with-excel/Color-Scales.png'
---

One thing that I have found helpful, is using excel to record the dates of when I have performed a wireless validation survey. This helps me know when that survey is getting old and needs to be re-evaluated. To do this I use the conditional formatting section in excel to show me a color code of these dates.

This is as easy as selecting the column clicking the conditional formatting button, choosing color scales and use the one that I like the most.

[![Color Scales](/images/keeping-track-of-wireless-validation-surveys-with-excel/Color-Scales.png)](/images/keeping-track-of-wireless-validation-surveys-with-excel/Color-Scales.png)
The nice part about this is as I populate this column with data excel will automatically change the color based on the date (or whatever other data I entered in here) so I am able to quickly tell how old a survey of a particular building is and when I need to start considering a new validation survey for it.

[![School list color scales](/images/keeping-track-of-wireless-validation-surveys-with-excel/School-list-color-scales.png)](/images/keeping-track-of-wireless-validation-surveys-with-excel/School-list-color-scales.png)
At the time of this writing, I am manually gathering this data either from the Ekahau project summary or the date created on the Ekahau project file. One day I hope to be able to automate this process with python and have this information automatically populated for me.
