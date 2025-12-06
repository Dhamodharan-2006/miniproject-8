import airpods from "../images/airpods.jpg";
import iphone from "../images/iphone.jpg";
import camera from "../images/camera.jpg";
import keyboard from "../images/keyboard.jpg";
import mouse from "../images/mouse.jpg";
import playstation from "../images/playstation.jpg";

const products = [
  {
    _id: "1",
    name: "Apple Airpods Pro 3",
    image: airpods,
    description:
      "Bluetooth technology lets you to connect it with compatible devices",
    brand: "Apple",
    category: "Electronics",
    price: 10999,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Iphone 17 Pro Max",
    image: iphone,
    description:
      "Introducing iphone 16 pro max,selling apple iphone in great feature is awesome",
    brand: "Apple",
    category: "Electronics",
    price: 94990,
    countInStock: 0,
    rating: 4.6,
    numReviews: 12,
  },
  {
    _id: "3",
    name: "Sony Alpha a7R V Mirrorless Camera",
    image: camera,
    description:
      "ideal for photography beginners,content creator,vloggers and professionals",
    brand: "Sony",
    category: "Electronics",
    price: 20000,
    countInStock: 5,
    rating: 4.4,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "HP K300 Wired gaming keyboard",
    image: keyboard,
    description:
      "perfect for office works,gaming,online classes and everyday use",
    brand: "HP",
    category: "Electronics",
    price: 799,
    countInStock: 499,
    rating: 4.7,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Zebronics Zeb-Transformer-M Gaming mouse",
    image: mouse,
    description:
      "it is suitable for office work,gaming,design and computer use",
    brand: "Zebronics",
    category: "Electronics",
    price: 499,
    countInStock: 0,
    rating: 4.1,
    numReviews: 12,
  },
  {
    _id: "6",
    name: "Sony Playstation 5 Gaming Console",
    image: playstation,
    description:
      "perfect for gamig lovers,casual players,and friends and families",
    brand: "Sony",
    category: "Electronics",
    price: 54990,
    countInStock: 100,
    rating: 4.7,
    numReviews: 12,
  },
];

export default products;
