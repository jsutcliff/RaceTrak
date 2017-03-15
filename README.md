# RaceTrak

I developed the RaceTrak personal lap timer as a cheaper alternative to the TBS Lap timer. 

## Features

- Fully compadible with any wifi-enabled device with browser
- Does not require any apps or additional software
- Integrated 18650 battery for 6 hours of race tracking
- Integrated USB charging via micro USB port
- Full 40ch 5.8Ghz spectrum
- Built in band scanning mode (see below)

## Where to buy

The RaceTrak personal lap timer hardware is still in prototype stages. More info will be posted when the device is ready for production!

## User Manual

To turn on the RaceTrak lap timer, hold the main button down for 3 seconds. You will will see the LED indicator turn solid blue. In a few moments, the RaceTrak lap timer will initalize a Wifi Access point named: "RaceTrak_XXXXXXXX" where the Xs represent the ID of the product. Simply connect to this network using any device with a web browser. The user interface is optimised for mobile users, so an Android or iPhone is reccomended. 

<img src="/docs/wifi.PNG" alt="Wifi Config" height="500">

To acces the RaceTrak application, open a web browser and navigate to 192.168.1.1 Note, because you are connected to the RaceTrak wifi, you can actually use any web address you like, the RaceTrak DNS server will redirect you to 192.168.1.1 you can see the url thisdoesnnotmatter.com works just fine.

<img src="/docs/ipaddress.PNG" alt="Ip Address" height="500">     <img src="/docs/anyurl.PNG" alt="Use Any Url" height="500">

Here you can see the main screen of the RaceTrack web application. In the header of the user interface, there is a battery indicator and a power button, more on this later. The "Timer" tab is used to track a pilot's lap times. First you much select the band and channel of you 5.8 Ghz video transmitter. You will notice that the channels are maked with channel number and frequency in Mhz. After selecting the approprate channel, the blue bar slider will be updated with the live RSSI value. This allows you to double check that you are on the correct channel. Below the slider, there are three buttons: "Start", "Stop", and "Clear" Below the buttons there is a list of lap times. The first item in the list is always the current lap time. If a lap has been started, this time will be updated live. Times listed below the first time are completed lap times, the most recent lap is at the top of the list.

<img src="/docs/maintab.PNG" alt="Main Tab" height="500">     <img src="/docs/setband.PNG" alt="Main Tab" height="500">     <img src="/docs/setchannel.PNG" alt="Main Tab" height="500">     <img src="/docs/times.PNG" alt="Main Tab" height="500">

The next tab in the RaceTrak user interface is the "Scanner" tab. This feature allows user to scan all 40 channels of the 5.8Ghz band. Clicking on the bar graph displays the selected band and channel.

<img src="/docs/scanner.PNG" alt="Main Tab" height="500">

The final tab in the user interface is the "Settings" tab. This tab allows the user to change the SSID and password of the RaceTrak wifi network. Note, wifi settings will be applied after the device is restarted. The settings tab also allows the user to calibrate the RSSI value that the RaceTrak timer will trigger at. The user can manually enter a vlaue from 1 - 100 or click calibrate and the current RSSI value will be set. The RaceTrak timer should be positioned about 2m or 6ft from the the drone you wish to track. When calibrating, it is important that the RaceTrak timer is set to the correct channel. The last setting on the settings tabs is the "Start on Trigger" setting. When turned on, the RaceTrak timer will begin the first lap once the RSSI value reaches the calibrated trigger level. When off, the lap time beigns instantly when the start button is pressed. It is reccomended to leave this setting on.

<img src="/docs/settings.PNG" alt="Main Tab" height="500">

To turn the RaceTrak timer off, either hold the multi-function button down for 3 seconds unitl the LED turns off, or tap the power button in any tab of the user interface.


<img src="/docs/offbutton.PNG" alt="Main Tab" height="500">     <img src="/docs/off.PNG" alt="Main Tab" height="500"> 

##Feedback##

I am constatly looking to improve this project! Please feel free to ask questions, suggest features, or report bugs.
Contact me: 
email - justins210@gmail.com

fpvchat - jsut210
