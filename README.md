Here are the steps I followed to make a bot and make it compatible with Elementor forms.

1. Installation: Install the Telegram Notify Link plugin and just activate it.
Follow the instructions of the plugin to create your telegram bot.

1) Create a bot and get their token and paste it inside plugin settings
Go to this link
https://t.me/BotFather

And type /newbot and after it makes your bot followed with simple steps and copy the token from there
Get The Chat Bot Id and we needed it for plugins and to send notifications to you.
https://t.me/get_id_bot
type /start

It will get your id and copy-paste to the plugin settings

2) Copy and paste the following code and modify it to call our function when the form is submitted:
Note Label1 and Label2 to match the labels you have added while creating form fields.

Plugin Link
https://it.wordpress.org/plugins/notification-for-telegram/#reviews

Doc to the elementor form action hook.
https://developers.elementor.com/forms-api/

