// const express = require("express");

// const connectDB = require("./config/connectDB");

// require("dotenv").config();

// // const User = require("./models/User");

// const app = express();
// connectDB();

// const port = 5500;

// // User.find((err, data) => (err ? console.log(err) : console.log(data)));

// // User.create(
// //   [
// //     { name: "ahmed", age: 24 ,favoriteFood: ["couscous","brik","salade"]},
// //     { name: "ali", age: 20 ,favoriteFood: ["pasta","sushi"]},
// //   ],
// //   (err, data) => (err ? console.log(err) : console.log(data))
// // );



// // const updateUser = async (req, res) => {
// //   const user = await User.findById("635405b233063d76522714c5");

// //   if (user) {
// //     console.log("user", user);
// //     user.name = "updatedname";

// //     await user.save();
// //   }
// // };

// // updateUser();

// app.listen(port, (err) =>
//   err ? console.log(err) : console.log(`this server is runnig on port ${port}`)
// );

const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
const User = require("./models/User");


const port = 5500;
const findbyfood = async (req, res) => {
  const user = await User.find({ favoriteFood: "couscous" }).sort({name: 'asc'}).limit(2).select("-age").exec()
  if (user) {
    console.log("user", user);
  }
}
findbyfood();

const deleteALL = async (req, res) => {
  const user = await User.findOne({ name: "ahmed" })
  console.log("user", user);
  if (user) user.remove();
  console.log("user removed")
};

deleteALL();
const deleteById = async (req, res) => {
  const user = await User.findById("635e5652818d58cf6f07b750");
  console.log("user", user);
  if (user) user.remove();
  console.log("user removed")
};

deleteById();

const updateAge = async (req, res) => {
  const user = await User.findOne({ name: "ali" })
  if (user) {
    user.age = 15;
    console.log("user", user);
    await user.save();
  }
}
updateAge();

const updateUser = async (req, res) => {
  const user = await User.findById("635e5515b7ffbcfe3a03036d");

  if (user) {
    user.name = "updatedname";
    console.log("user", user);
    await user.save();
  }
};
updateUser();

const findbyid = async (req, res) => {
  const user = await User.findById({_id:"635e5515b7ffbcfe3a03036d"})
  if (user) {
    console.log("user", user);
  }
}
findbyid();

const findbyfood1 = async (req, res) => {
  const user = await User.findOne({ favoriteFood: "brik" })
  if (user) {
    console.log("user", user);
  }
}
findbyfood1();

const findUSER = async (req, res) => {
  const user = await User.find({ name: "ahmed" })
  if (user) {
    console.log("user", user);
  }
}
findUSER();

User.create(
  [
    { name: "ahmed", age: 22 ,favoriteFood: ["salade","couscous", "brik"]},
    { name: "ahmed", age: 10 ,favoriteFood: ["sushi","pasta"]},
  ],
  (err, data) => (err ? console.log(err) : console.log(data))
);

app.listen(port, (err) => {
  err
    ? console.log("error", err)
    : console.log(`this server is running on ${port}`);
});
