var TelegramBot = require('node-telegram-bot-api');

var token = '544765573:AAGKm9rgkak5QSQYGvPYCxuT5pL6DS9NP8M';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/insult/, function(msg, match) {
  var fromId = msg.from.id;
  var insults = ["Bla", "RandomResponse", "Random2"];
  var chosenInsult = insults[Math.floor(Math.random() * insults.length)];
  bot.sendMessage(fromId, chosenInsult);
});

bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "This spectacular bot just have one single command.\n/insult - Insult you.");
});
