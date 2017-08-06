# Telegram-Bot

In index.js, add your token to the URL https://api.telegram.org/TOKEN/sendMessage?chat_id='+message.chat.id+'&text='+

I like to deploy in zeit.co, it serves perfectly for this purpose. You can download the CLI from https://zeit.co/download#command-line

* Type now --update
* Hold the URL that returns you (something like telegrambot-rpqgagsgsvzb.now.sh)

Then remember to add a webhook, so each call to Telegram API triggers the response in zeit.co. You can do this with CURL

curl -F "url=https://telegrambot-rpqgugafafafb.now.sh/new-message" https://api.telegram.org/TOKEN/setWebhook
