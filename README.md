# TBay Marine Monitor - Project Overview
The aim of this project is to create a marine environment monitoring and logging system using Low Power Wide Area Network (LPWAN) and open source web standards and protocols.

For code, see javaScriptCode folder.

Attached is a link to my SeaSensor Website https://erinnwhittyxx.github.io/SeaSensor/
Also check out my short video of my process for this project! https://www.youtube.com/watch?v=tl2NreBtzxc

# Initial Proposal - Application/Front end

I plan to design and implement a front end application that uses and visualises data from other third party services. My main goal is to utise the platform Blynk, a hardware-agnostic IoT platform with white-label mobile apps, private clouds, device management, data analytics, and machine learning.

My plan is to have my application display data such as local tide times, water temperature, current strength/direction, water depth, as well as a local weather report. This data will be optained from out marine monitor device placed on a bouy in Tramore Bay. 

# Update - 30/3/20

My progress so far mainly consisted of my Bynk Application design and research into how I would implement data from ThingSpeak. Attached is my current layout of my Sea Sensor Application designed with Blynk, I found the applications available to use on Slack very limited. I have decided to excude the feature of location as planned in my origional proposal as the marine monitor device shall be placed in the same position and therefore that data wouldn't be necessary. I plan to have a live local weather report in the "report" box, show the locations tide times where the "clock" is, and display a chart comparing our data with a nearby bouy. 

![originalDesign](https://user-images.githubusercontent.com/47150299/82068555-0fbfa700-96ca-11ea-9e06-401cc8ee2abf.PNG)


# Update - 13/5/20

Unfortunity due to the Covid19 pandemic, some plans for this project became a bit harder, and in turn I had to alter the aim for my Sea Sensor app. As a group we were unable to join our projects and get data from our own sea buoy, so I chose to get my information from the M5 Buoy off the coast of Waterford. I used Postman to analyse the website information, to narrow it down to the information I needed. This gave me information on the sea temperature, sea air temperature and updated date/time. Below is an updated image for what the design for my Blynk application looks like.

![appUpdate](https://user-images.githubusercontent.com/47150299/82067643-e81c0f00-96c8-11ea-80f6-0ea9558b90df.jpeg)

# Update - 15/5/20

I was unable to get the weather forecast widget running as originally planned and if I had more time I would look further into weather API's provided by websites such as Met Éireann. 

