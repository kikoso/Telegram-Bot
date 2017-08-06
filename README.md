# Telegram-Bot

In index.js, add your token to the URL https://api.telegram.org/TOKEN/sendMessage?chat_id='+message.chat.id+'&text='+

I like to deploy in zeit.co, it serves perfectly for this purpose. You can download the CLI from https://zeit.co/download#command-line

* Type now --update
* Hold the URL that returns you (something like telegrambot-rpqgagsgsvzb.now.sh)

Then remember to add a webhook, so each call to Telegram API triggers the response in zeit.co. You can do this with CURL

curl -F "url=https://telegrambot-rpqgugafafafb.now.sh/new-message" https://api.telegram.org/TOKEN/setWebhook

![Example Image][1]
![Example Image][2]

Developed By
--------------------

Enrique López Mañas - <eenriquelopez@gmail.com>

<a href="https://twitter.com/eenriquelopez">
  <img alt="Follow me on Twitter"
       src="https://raw.github.com/kikoso/android-stackblur/master/art/twitter.png" />
</a>
<a href="https://plus.google.com/103250453274111396206">
  <img alt="Follow me on Google+"
       src="https://raw.github.com/kikoso/android-stackblur/master/art/google-plus.png" />
</a>
<a href="http://de.linkedin.com/pub/enrique-l%C3%B3pez-ma%C3%B1as/15/4a9/876">
  <img alt="Follow me on LinkedIn"
       src="https://raw.github.com/kikoso/android-stackblur/master/art/linkedin.png" />

[1]: https://raw.githubusercontent.com/kikoso/Telegram-Bot/master/art/1.png
[2]: https://raw.githubusercontent.com/kikoso/Telegram-Bot/master/art/2.png
