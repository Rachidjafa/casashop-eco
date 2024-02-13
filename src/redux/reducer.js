import img1 from "../composants/images/1.webp";
import img2 from "../composants/images/2.webp";
import img3 from "../composants/images/3.jpg";
import img4 from "../composants/images/4.jpg";
import img5 from "../composants/images/6.jpg";
import img6 from "../composants/images/8.webp";
import img7 from "../composants/images/a1.avif";
import img8 from "../composants/images/a-2.avif";
import img9 from "../composants/images/a3.avif";
import img10 from "../composants/images/a4.avif";
import img11 from "../composants/images/a5.avif";
import img12 from "../composants/images/a6.avif";
import img13 from "../composants/images/p1.avif";
import img14 from "../composants/images/p2.avif";
import img15 from "../composants/images/p3.avif";
import img16 from "../composants/images/p4.avif";
import img17 from "../composants/images/p5.avif";
import img18 from "../composants/images/p6.avif";
import img19 from "../composants/images/m1.avif";
import img20 from "../composants/images/m2.avif";
import img21 from "../composants/images/m3.avif";
import img22 from "../composants/images/m4.avif";
import img23 from "../composants/images/m5.avif";
import img24 from "../composants/images/m6.avif";
import img25 from "../composants/images/m7.avif";
import img26 from "../composants/images/m8.avif";
import img27 from "../composants/images/m9.avif";
import img28 from "../composants/images/m10.avif";
import img29 from "../composants/images/m11.avif";
import img30 from "../composants/images/m12.avif";
import img31 from "../composants/images/m13.avif";
import img32 from "../composants/images/m14.avif";
import img33 from "../composants/images/m15.avif";

const initialState = {
  hom_products: [
    {
      id: 19,
      title: "Sneakers de football CA Pro Maroc",
      price: 130,
      img: img19,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 27,
      title: "Veste de survêtement Maroc FtblCulture",
      price: 280,
      img: img32,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 20,
      title: "Maillot Home 2022 du Maroc Enfant et Ado",
      price: 103,
      img: img25,
      marque: "puma",
      type: "shirt",
    },
    { id: 2, title: "Jumpman Two Trey", price: 89, img: img2, marque: "Nike" },
    {
      id: 26,
      title: "Hoodie FtblCulture Maroc",
      price: 180,
      img: img31,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 8,
      title: "CHAUSSURE OZWEEGO",
      price: 89,
      img: img8,
      marque: "Adidas",
    },
    {
      id: 21,
      title: "Maillot Away 2022 du Maroc",
      price: 210,
      img: img26,
      marque: "puma",
      type: "shirt",
    },
    { id: 13, title: "Sneakers Club", price: 70, img: img13, marque: "puma" },
    {
      id: 14,
      title: "Sneakers Super Team OG",
      price: 110,
      img: img14,
      marque: "puma",
    },
  ],
  products: [
    {
      id: 19,
      title: "Sneakers de football CA Pro Maroc",
      price: 130,
      img: img19,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 1,
      title: "Nike Air",
      price: 60,
      img: img1,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 2,
      title: "Jumpman Two Trey",
      price: 89,
      img: img2,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 3,
      title: "Air Jordan 1 Retro High OG",
      price: 98,
      img: img3,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 4,
      title: "Air Jordan 1 Retro High OG",
      price: 80,
      img: img4,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 5,
      title: "Nike Air Monarch IV",
      price: 50,
      img: img5,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 6,
      title: "Nike Impact 4",
      price: 70,
      img: img6,
      marque: "Nike",
      type: "Shoes",
    },
    {
      id: 7,
      title: "CHAUSSURE NMD_V3",
      price: 120,
      img: img7,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 8,
      title: "CHAUSSURE OZWEEGO",
      price: 89,
      img: img8,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 9,
      title: "CHAUSSURE FORUM MID",
      price: 100,
      img: img9,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 10,
      title: "CHAUSSURE CAMPUS 00S",
      price: 140,
      img: img10,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 11,
      title: "CHAUSSURE GAZELLE 85",
      price: 120,
      img: img11,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 12,
      title: "CHAUSSURE FORUM LOW",
      price: 170,
      img: img12,
      marque: "Adidas",
      type: "Shoes",
    },
    {
      id: 13,
      title: "Sneakers Club",
      price: 70,
      img: img13,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 14,
      title: "Sneakers Super Team OG",
      price: 110,
      img: img14,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 15,
      title: "Sneakers Super Team OG Red",
      price: 110,
      img: img15,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 16,
      title: "Chaussures de training Disperse XT 3",
      price: 80,
      img: img16,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 17,
      title: "Chaussures fitness PWRFrame Homme",
      price: 70,
      img: img17,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 18,
      title: "Chaussures de running NITRO Femme",
      price: 90,
      img: img18,
      marque: "puma",
      type: "Shoes",
    },
    {
      id: 20,
      title: "Maillot Home 2022 du Maroc Enfant et Ado",
      price: 103,
      img: img25,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 21,
      title: "Maillot Away 2022 du Maroc",
      price: 210,
      img: img26,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 22,
      title: "Maillot Home Coupe du Monde 23/24 Maroc Femme",
      price: 210,
      img: img27,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 23,
      title: "Maillot sans manche Maroc FtblCulture",
      price: 160,
      img: img28,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 24,
      title: "Pantalon de survêtement Maroc FtblCulture",
      price: 260,
      img: img29,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 25,
      title: "Short Maroc FtblCulture",
      price: 130,
      img: img30,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 26,
      title: "Hoodie FtblCulture Maroc",
      price: 180,
      img: img31,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 27,
      title: "Veste de survêtement Maroc FtblCulture",
      price: 280,
      img: img32,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 28,
      title: "Short Morocco 22/23 Replica Homme",
      price: 110,
      img: img33,
      marque: "puma",
      type: "shirt",
    },
  ],
  can_products: [
    {
      id: 19,
      title: "Sneakers de football CA Pro Maroc",
      price: 130,
      img: img19,
      marque: "puma",
    },
    {
      id: 20,
      title: "Maillot Home 2022 du Maroc Enfant et Ado",
      price: 103,
      img: img25,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 21,
      title: "Maillot Away 2022 du Maroc",
      price: 210,
      img: img26,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 22,
      title: "Maillot Home Coupe du Monde 23/24 Maroc Femme",
      price: 210,
      img: img27,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 23,
      title: "Maillot sans manche Maroc FtblCulture",
      price: 160,
      img: img28,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 24,
      title: "Pantalon de survêtement Maroc FtblCulture",
      price: 260,
      img: img29,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 25,
      title: "Short Maroc FtblCulture",
      price: 130,
      img: img30,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 26,
      title: "Hoodie FtblCulture Maroc",
      price: 180,
      img: img31,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 27,
      title: "Veste de survêtement Maroc FtblCulture Homme",
      price: 280,
      img: img32,
      marque: "puma",
      type: "shirt",
    },
    {
      id: 28,
      title: "Short Morocco 22/23 Replica Homme",
      price: 110,
      img: img33,
      marque: "puma",
      type: "shirt",
    },
  ],
  orders: [],
  Like: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, orders: [...state.orders, action.payload] };
    case "ADD_LIKE":
      return { ...state, Like: [...state.Like, action.payload] };
    case "DELETE_PRODUCT":
      const tab = state.orders.filter((d) => d.id !== action.payload);
      return { ...state, orders: tab };
    case "REMOV_LIKE":
      const tab1 = state.Like.filter((d) => d.id !== action.payload);
      return { ...state, Like: tab1 };
    default:
      return state;
  }
};
export default Reducer;
