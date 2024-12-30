export let menuItems = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    priceCent: 1599,
    img: "./images/jpegs/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    priceCent: 1399,
    img: "./images/jpegs/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    priceCent: 699,
    img: "./images/jpegs/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    priceCent: 2099,
    img: "./images/jpegs/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    priceCent: 2299,
    img: "./images/jpegs/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    priceCent: 1899,
    img: "./images/jpegs/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    priceCent: 899,
    img: "./images/jpegs/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    priceCent: 1299,
    img: "./images/jpegs/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    priceCent: 1699,
    img: "./images/jpegs/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "morning energizer",
    category: "smoothies",
    priceCent: 1299,
    img: "./images/jpegs/item-10.jpeg",
    desc: `Cold-pressed juice blend with kale, spinach, green apple, and a hint of ginger for a refreshing start to your day.`,
  },
  {
    id: 11,
    title: "Pancake Stack",
    category: "breakfast",
    priceCent: 850,
    img: "./images/item-11.jpeg",
    desc: "Fluffy pancakes served with syrup, fresh berries, and whipped cream.",
  },
  {
    id: 12,
    title: "Turkey Club Sandwich",
    category: "lunch",
    priceCent: 1100,
    img: "./images/item-12.jpeg",
    desc: "Classic turkey club sandwich layered with lettuce, tomato, bacon, and mayo.",
  },
  {
    id: 13,
    title: "Strawberry Banana Smoothie",
    category: "shakes and smoothies",
    priceCent: 600,
    img: "./images/item-13.jpeg",
    desc: "Refreshing smoothie made with fresh strawberries, ripe bananas, and yogurt.",
  },
  {
    id: 14,
    title: "Avocado Smoothie",
    category: "smoothies",
    priceCent: 750,
    img: "./images/item-14.jpeg",
    desc: "Creamy smoothie made with avocado, almond milk, and a touch of honey.",
  },
  {
    id: 15,
    title: "Chicken Caesar Wrap",
    category: "lunch",
    priceCent: 950,
    img: "./images/item-15.jpeg",
    desc: "Grilled chicken Caesar salad wrapped in a soft tortilla for a satisfying lunch.",
  },
];

//declare object class
class Item {
  constructor(itemDetails) {
    this.id = itemDetails.id;
    this.title = itemDetails.title;
    this.category = itemDetails.category;
    this.priceCent = itemDetails.priceCent;
    this.img = itemDetails.img;
    this.desc = itemDetails.desc;
  }
}

// reassign menuItems & loop thrugh the menuitems to return a class object
menuItems = menuItems.map((menuItem) => new Item(menuItem));
