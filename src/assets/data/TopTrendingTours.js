import tourImg02 from "../images/tour-img02.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg03 from "../images/tour-img03.jpg";


const toptours=[
{
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    Trending: true,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    Trending: true,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    Trending: true,
  },
];

export default toptours