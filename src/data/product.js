// src/data/product.js

// Import gambar
import laptopImg from "../assets/laptop.jpg";
import hpImg from "../assets/samsung.png";
import headphoneImg from "../assets/headphones.jpg";
import mouseImg from "../assets/mouse.jpg";
import iPadImg from "../assets/iPad.jpg";
import speakerImg from "../assets/speakers.jpg";
import kaosImg from "../assets/kaos.jpeg";
import celanajeansImg from "../assets/celana-jeans.jpeg";
import sepatuImg from "../assets/sepatu.jpg";
import jaketImg from "../assets/jaket.jpg";
import tasImg from "../assets/tas-ransel.jpeg";
import jamtanganImg from "../assets/jam-tangan.jpg";
import lipstikImg from "../assets/lipstik.jpg";
import sunscreenImg from "../assets/sunscreen.png";
import eyelinerImg from "../assets/eyeliner.png";
import primerImg from "../assets/primer.jpg";
import tonerImg from "../assets/toner.jpg";

export const products = [
  { id: 1, name: "Laptop", desc: "Laptop untuk kerja dan gaming", category: "Elektronik", price: 12000000, image: laptopImg, rating: 5 },
  { id: 2, name: "HP", desc: "Smartphone terbaru", category: "Elektronik", price: 4500000, image: hpImg, rating: 4 },
  { id: 3, name: "Headphone", desc: "Headphone bass mantap", category: "Elektronik", price: 750000, image: headphoneImg, rating: 4 },
  { id: 4, name: "Mouse", desc: "Mouse wireless", category: "Elektronik", price: 250000, image: mouseImg, rating: 3 },
  { id: 5, name: "iPad", desc: "Tablet serbaguna", category: "Elektronik", price: 6500000, image: iPadImg, rating: 5 },
  { id: 6, name: "Speaker", desc: "Speaker bluetooth portable", category: "Elektronik", price: 1200000, image: speakerImg, rating: 4 },
  { id: 7, name: "Kaos", desc: "Kaos katun nyaman", category: "Fashion", price: 75000, image: kaosImg, rating: 4 },
  { id: 8, name: "Celana", desc: "Celana jeans keren", category: "Fashion", price: 200000, image: celanajeansImg, rating: 4 },
  { id: 9, name: "Sepatu", desc: "Sepatu sport stylish", category: "Fashion", price: 350000, image: sepatuImg, rating: 5 },
  { id: 10, name: "Jaket", desc: "Jaket hangat", category: "Fashion", price: 400000, image: jaketImg, rating: 4 },
  { id: 11, name: "Tas", desc: "Tas ransel multifungsi", category: "Fashion", price: 250000, image: tasImg, rating: 3 },
  { id: 12, name: "Jam Tangan", desc: "Jam tangan elegan", category: "Fashion", price: 1500000, image: jamtanganImg, rating: 5 },
  { id: 13, name: "Lipstik", desc: "Lipstik matte tahan lama", category: "Kecantikan", price: 120000, image: lipstikImg, rating: 4 },
  { id: 14, name: "Sunscreen", desc: "Sunscreen SPF 50", category: "Kecantikan", price: 95000, image: sunscreenImg, rating: 5 },
  { id: 15, name: "Eyeliner", desc: "Eyeliner waterproof", category: "Kecantikan", price: 60000, image: eyelinerImg, rating: 3 },
  { id: 16, name: "Primer", desc: "Primer untuk makeup flawless", category: "Kecantikan", price: 150000, image: primerImg, rating: 4 },
  { id: 17, name: "Toner", desc: "Toner wajah segar", category: "Kecantikan", price: 85000, image: tonerImg, rating: 4 },
];
