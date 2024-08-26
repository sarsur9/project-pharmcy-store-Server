import  Product  from "../models/Product.js";
import Category from "../models/Category.js";
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/pharmappserver", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sliderItemSchema = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  desc: String,
  bg: String,
});


const SliderItem = mongoose.model("SliderItem", sliderItemSchema);


const sliderItems = [
  {
    id: 1,
    img: "logo",
    title: "DYNAMIC",
    desc: "UI DONE WITH REACT/REDUX+ STYLED COMPONENTS⏰",
    bg: "white",
  },
  {
    id: 2,
    img: "logo",
    title: "RESTapi",
    desc: "MONGODB,STRIPE & JWT ⏰",
    bg: "white",
  },
  {
    id: 3,
    img: "logo",
    title: "Sale 3",
    desc: "30% OFF! LIMITED TIME OFFER ⏰",
    bg: "white",
  },
];

const categories = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/16/a1/c0/16a1c087dd1a84fb532e8706daaebe0c.jpg",
    title: "Over The Counter Medicine",
    cat: "OTC",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/c4/90/11/c490116beaeeaa185b20d14efd3ee262.jpg",
    title: "Prescription Medicine",
    cat: "Prescription Medicine",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/c7/e6/84/c7e68446a191c33c8bce25e250d8602d.jpg",
    title: "Supplements",
    cat: "Health",
  },
];

const productList = [
  {
    id: 1,
    img: "https://i.pinimg.com/474x/24/fb/cf/24fbcf3f96a7712f0eb0079482e85e34.jpg",
    title: "Advil",
    categories: ["OTC"],
    cat: "OTC",
    desc: "pain killer tablets",
    size: [200, 400],
    price: "15",
  },

  {
    id: 2,
    img: "https://i.pinimg.com/474x/b0/fa/42/b0fa42389fe958728cd297d8be4cb09d.jpg",
    title: "Omega3",
    categories: ["Health", "OTC"],
    cat: "Health",
    desc: "omega3 tablets",
    size: ["DHA/EPA"],
    price: "30",
  },

  {
    id: 3,
    img: "https://i.pinimg.com/474x/4e/e1/63/4ee1636308ad2c881632a179e15a4fce.jpg",
    title: "vitamin D",
    categories: ["Health", "OTC"],
    cat: "Health",
    desc: "vitamin D tablets",
    size: ["5000IU"],
    price: "20",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/474x/e4/15/07/e415079fc623a296aa7e70173b791f44.jpg",
    title: "Nurofen ",
    categories: ["OTC"],
    cat: "OTC",
    desc: "aches & pain relif",
    size: ["512mg"],
    price: "15",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR15q0T1lIpBzpjMg4qBFPkMSQS1W3fuhsdg&s",
    title: "Augmentin ",
    categories: ["Prescription Medicine"],
    cat: "Prescription Medicine",
    desc: "Antibiotics",
    size: ["1g"],
    price: "18",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/474x/5f/41/4e/5f414e95dfde859f147c1f63b9f01e9f.jpg",
    title: "CeraVe",
    categories: ["Health"],
    cat: "Health",
    desc: "Hydration creme",
    size: ["453g"],
    price: "22",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/474x/bc/5c/48/bc5c4821e414d10e5157ae6244696c3a.jpg",
    title: "Oral B io ",
    categories: ["Health"],
    cat: "Health",
    desc: "Elctric Toothbrush",
    size: [""],
    price: "30",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/474x/7e/31/1e/7e311ed85890b56c4f9aebfdcbe66dc8.jpg",
    title: "Nivea Deodorant ",
    categories: ["Health"],
    cat: "Health",
    desc: "Brightening deep serum ",
    size: ["40ml"],
    price: "10",
  },
];


SliderItem.insertMany(sliderItems)
  .then(() => console.log("Slider items inserted"))
  .catch((err) => console.error("Error inserting slider items:", err));

Category.insertMany(categories)
  .then(() => console.log("Categories inserted"))
  .catch((err) => console.error("Error inserting categories:", err));

Product.insertMany(productList)
  .then(() => {
    console.log("Products inserted");
    mongoose.connection.close(); // Close the connection after all inserts
  })
  .catch((err) => console.error("Error inserting  products:", err));