require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

module.exports.connectMongo = () => {
  return mongoose.connect(
    "mongodb+srv://theAkbarov:(Sniper60)@cluster0.gbajm.mongodb.net/Cluster0?retryWrites=true&w=majority"
  );
};
