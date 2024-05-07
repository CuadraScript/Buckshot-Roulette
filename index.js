require("dotenv").config();
const HaxballJS = require("haxball.js");

HaxballJS.then((HBInit) => {
  const room = HBInit({
    roomName: "Buckshot Roulette",
    maxPlayers: 16,
    public: true,
    noPlayer: true,
    token: process.env.TOKEN,
  });

  room.setDefaultStadium("Big");
  room.setScoreLimit(5);
  room.setTimeLimit(0);

  room.onRoomLink = function (link) {
    console.log(link);
  };
  
});