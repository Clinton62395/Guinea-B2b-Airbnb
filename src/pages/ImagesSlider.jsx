import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ← CETTE LIGNE EST CRUCIALE

// Import modules dont tu as besoin (ex: Pagination, Navigation, Autoplay)
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import colors from "../components/colorsPalette";

export const properties = [
  {
    id: 1,
    title: "Appartement Luxueux Vue Océan",
    location: "Kaloum, Conakry",
    rating: "4.95",
    reviews: 127,
    description: "Magnifique appartement 2 chambres avec vue sur l'Atlantique",
    bedrooms: "2 chambres · 2 lits queen · 2 salles de bain",
    dates: "23 – 28 jan",
    price: "450 000",
    currency: "GNF",
    discount: 30,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=500",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
    ],
  },
  {
    id: 2,
    title: "Villa Moderne avec Jardin",
    location: "Ratoma, Conakry",
    rating: "4.87",
    reviews: 89,
    description: "Spacieuse villa 4 chambres avec jardin tropical",
    bedrooms: "4 chambres · 4 lits · 3 salles de bain",
    dates: "1 – 6 déc",
    price: "1 200 000",
    currency: "GNF",
    discount: 25,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: "2024-01-15",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 3,
    title: "Villa Bord de Mer avec Piscine",
    location: "Dixinn, Conakry",
    rating: "4.92",
    reviews: 203,
    description: "Luxueuse propriété en bord de mer avec piscine privée",
    bedrooms: "3 chambres · 3 lits king · 3.5 salles de bain",
    dates: "19 – 24 jan",
    price: "900 000",
    currency: "GNF",
    discount: 15,
    isTrending: false,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500",
    ],
  },
  {
    id: 4,
    title: "Studio Confortable",
    location: "Matam, Conakry",
    rating: "4.78",
    reviews: 56,
    description: "Parfait pour voyageurs solo et couples",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "10 – 15 fév",
    price: "150 000",
    currency: "GNF",
    discount: 10,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-10",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
    ],
  },
  {
    id: 5,
    title: "Penthouse Exécutif",
    location: "Kaloum Centre, Conakry",
    rating: "4.98",
    reviews: 167,
    description: "Vue panoramique 360° sur la ville",
    bedrooms: "3 chambres · 3 lits · 4 salles de bain",
    dates: "5 – 12 mar",
    price: "2 100 000",
    currency: "GNF",
    discount: 20,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
    ],
  },
  {
    id: 6,
    title: "Maison de Jardin",
    location: "Kindia",
    rating: "4.82",
    reviews: 45,
    description: "Retraite paisible au cœur de la nature",
    bedrooms: "2 chambres · 2 lits · 1 salle de bain",
    dates: "30 jan – 4 fév",
    price: "180 000",
    currency: "GNF",
    discount: 5,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-08",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500",
    ],
  },
  {
    id: 7,
    title: "Suite Affaires Luxe",
    location: "Matoto, Conakry",
    rating: "4.89",
    reviews: 234,
    description: "Parfait pour voyageurs d'affaires",
    bedrooms: "1 chambre · 1 lit king · 1 salle de bain",
    dates: "14 – 19 fév",
    price: "380 000",
    currency: "GNF",
    discount: 15,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500",
    ],
  },
  {
    id: 8,
    title: "Maison Familiale avec Piscine",
    location: "Kankan",
    rating: "4.91",
    reviews: 178,
    description: "Spacieuse maison familiale avec piscine privée",
    bedrooms: "5 chambres · 5 lits · 4 salles de bain",
    dates: "1 – 8 mar",
    price: "1 800 000",
    currency: "GNF",
    discount: 30,
    isTrending: false,
    isSpecialOffer: true,
    lastSearched: "2024-01-12",
    images: [
      "https://images.unsplash.com/photo-1575517111836-8e82de8e6abd?w=500",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
    ],
  },
  {
    id: 9,
    title: "Loft Moderne Style Industriel",
    location: "Dixinn, Conakry",
    rating: "4.85",
    reviews: 92,
    description: "Loft style industriel avec hauts plafonds",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "5 – 10 fév",
    price: "280 000",
    currency: "GNF",
    discount: 10,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1548611635-b6e7847d390d?w=500",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=500",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
    ],
  },
  {
    id: 10,
    title: "Condo Luxe avec Salle de Sport",
    location: "Kaloum, Conakry",
    rating: "4.93",
    reviews: 145,
    description: "Toutes commodités incluant gym et spa",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "25 – 30 jan",
    price: "550 000",
    currency: "GNF",
    discount: 20,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
    ],
  },
  {
    id: 11,
    title: "Bungalow Bord de Mer",
    location: "Kamsar",
    rating: "4.76",
    reviews: 67,
    description: "Bungalow traditionnel à quelques pas de la plage",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "20 – 25 fév",
    price: "320 000",
    currency: "GNF",
    discount: 15,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-09",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500",
    ],
  },
  {
    id: 12,
    title: "Appartement Centre Ville",
    location: "Labé",
    rating: "4.81",
    reviews: 112,
    description: "Emplacement central avec vue incroyable sur la ville",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "10 – 15 mar",
    price: "420 000",
    currency: "GNF",
    discount: 10,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
    ],
  },
  {
    id: 13,
    title: "Studio de Luxe",
    location: "Matoto, Conakry",
    rating: "4.88",
    reviews: 89,
    description: "Studio boutique avec finitions premium",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "8 – 13 fév",
    price: "340 000",
    currency: "GNF",
    discount: 12,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-11",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 14,
    title: "Maison Familiale Exécutive",
    location: "Nzérékoré",
    rating: "4.94",
    reviews: 156,
    description: "Maison familiale moderne dans résidence sécurisée",
    bedrooms: "4 chambres · 4 lits · 3 salles de bain",
    dates: "3 – 10 mar",
    price: "1 500 000",
    currency: "GNF",
    discount: 25,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1575517111836-8e82de8e6abd?w=500",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 15,
    title: "Penthouse avec Terrasse",
    location: "Kaloum, Conakry",
    rating: "4.97",
    reviews: 203,
    description: "Terrasse spectaculaire avec vues panoramiques",
    bedrooms: "3 chambres · 3 lits · 3 salles de bain",
    dates: "28 fév – 6 mar",
    price: "2 600 000",
    currency: "GNF",
    discount: 35,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 16,
    title: "Appartement Jardin Cosy",
    location: "Kindia",
    rating: "4.79",
    reviews: 78,
    description: "Rez-de-chaussée avec jardin privé",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "29 jan – 3 fév",
    price: "200 000",
    currency: "GNF",
    discount: 8,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-14",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500",
    ],
  },
  {
    id: 17,
    title: "Appartement Business Class",
    location: "Ratoma, Conakry",
    rating: "4.86",
    reviews: 134,
    description: "Entièrement équipé pour le travail à distance",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "12 – 17 fév",
    price: "480 000",
    currency: "GNF",
    discount: 18,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500",
    ],
  },
  {
    id: 18,
    title: "Villa de Luxe avec Piscine",
    location: "Dixinn, Conakry",
    rating: "4.95",
    reviews: 189,
    description: "Villa privée avec piscine à débordement",
    bedrooms: "4 chambres · 4 lits · 4 salles de bain",
    dates: "7 – 14 mar",
    price: "3 100 000",
    currency: "GNF",
    discount: 30,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500",
    ],
  },
  {
    id: 19,
    title: "Studio Moderne",
    location: "Siguiri",
    rating: "4.83",
    reviews: 64,
    description: "Studio intelligent parfait pour nomades digitaux",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "6 – 11 fév",
    price: "220 000",
    currency: "GNF",
    discount: 10,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-13",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 20,
    title: "Appartement Exécutif",
    location: "Kaloum, Conakry",
    rating: "4.92",
    reviews: 178,
    description: "Vie de luxe avec service de conciergerie",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "31 jan – 5 fév",
    price: "620 000",
    currency: "GNF",
    discount: 22,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
    ],
  },
  {
    id: 21,
    title: "Maison de Plage",
    location: "Boffa",
    rating: "4.89",
    reviews: 95,
    description: "Accès direct à la plage, parfait pour familles",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "15 – 20 fév",
    price: "750 000",
    currency: "GNF",
    discount: 20,
    isTrending: false,
    isSpecialOffer: true,
    lastSearched: "2024-01-16",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500",
    ],
  },
  {
    id: 22,
    title: "Appartement Vue Ville",
    location: "Mamou",
    rating: "4.84",
    reviews: 123,
    description: "Vues incroyables sur le plateau du Fouta-Djalon",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "8 – 13 mar",
    price: "460 000",
    currency: "GNF",
    discount: 12,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
    ],
  },
  {
    id: 23,
    title: "Suite Hôtel Boutique",
    location: "Matoto, Conakry",
    rating: "4.91",
    reviews: 167,
    description: "Expérience hôtel de luxe avec intimité",
    bedrooms: "1 chambre · 1 lit king · 1 salle de bain",
    dates: "9 – 14 fév",
    price: "410 000",
    currency: "GNF",
    discount: 18,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500",
    ],
  },
  {
    id: 24,
    title: "Résidence Familiale",
    location: "Kankan",
    rating: "4.93",
    reviews: 145,
    description: "Grande résidence parfaite pour famille élargie",
    bedrooms: "6 chambres · 6 lits · 5 salles de bain",
    dates: "12 – 19 mar",
    price: "3 500 000",
    currency: "GNF",
    discount: 35,
    isTrending: false,
    isSpecialOffer: true,
    lastSearched: "2024-01-17",
    images: [
      "https://images.unsplash.com/photo-1575517111836-8e82de8e6abd?w=500",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
    ],
  },
  {
    id: 25,
    title: "Penthouse Skyline",
    location: "Kaloum, Conakry",
    rating: "4.98",
    reviews: 212,
    description: "Vues à couper le souffle sur Conakry",
    bedrooms: "3 chambres · 3 lits · 3 salles de bain",
    dates: "25 fév – 2 mar",
    price: "2 800 000",
    currency: "GNF",
    discount: 40,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 26,
    title: "Résidence Ambassadeurs",
    location: "Ratoma, Conakry",
    rating: "4.96",
    reviews: 187,
    description: "Propriété de standing dans quartier diplomatique",
    bedrooms: "4 chambres · 4 lits · 4 salles de bain",
    dates: "18 – 25 mar",
    price: "2 200 000",
    currency: "GNF",
    discount: 28,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
    ],
  },
  {
    id: 27,
    title: "Villa Coloniale Rénovée",
    location: "Kindia",
    rating: "4.90",
    reviews: 134,
    description: "Charme colonial avec confort moderne",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "22 – 27 fév",
    price: "680 000",
    currency: "GNF",
    discount: 15,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-18",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
    ],
  },
  {
    id: 28,
    title: "Appartement Terrasse Panoramique",
    location: "Labé",
    rating: "4.87",
    reviews: 98,
    description: "Grande terrasse avec vue sur les montagnes",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "5 – 10 mar",
    price: "390 000",
    currency: "GNF",
    discount: 12,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
    ],
  },
  {
    id: 29,
    title: "Loft Artiste Lumineux",
    location: "Dixinn, Conakry",
    rating: "4.84",
    reviews: 76,
    description: "Espace créatif avec lumière naturelle abondante",
    bedrooms: "2 chambres · 2 lits · 1 salle de bain",
    dates: "16 – 21 fév",
    price: "350 000",
    currency: "GNF",
    discount: 10,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-19",
    images: [
      "https://images.unsplash.com/photo-1548611635-b6e7847d390d?w=500",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=500",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
    ],
  },
  {
    id: 30,
    title: "Maison Écologique",
    location: "Nzérékoré",
    rating: "4.88",
    reviews: 67,
    description: "Construction durable au cœur de la forêt",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "11 – 16 mar",
    price: "520 000",
    currency: "GNF",
    discount: 14,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-20",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500",
    ],
  },
  {
    id: 31,
    title: "Duplex Moderne Design",
    location: "Matoto, Conakry",
    rating: "4.92",
    reviews: 156,
    description: "Duplex contemporain avec design épuré",
    bedrooms: "3 chambres · 3 lits · 2.5 salles de bain",
    dates: "28 fév – 5 mar",
    price: "780 000",
    currency: "GNF",
    discount: 25,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
    ],
  },
  {
    id: 32,
    title: "Bungalow Rivière",
    location: "Pita",
    rating: "4.81",
    reviews: 89,
    description: "Au bord de la rivière avec cascade naturelle",
    bedrooms: "2 chambres · 2 lits · 1 salle de bain",
    dates: "13 – 18 fév",
    price: "290 000",
    currency: "GNF",
    discount: 8,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-21",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500",
    ],
  },
  {
    id: 33,
    title: "Appartement Minimaliste",
    location: "Kaloum, Conakry",
    rating: "4.86",
    reviews: 102,
    description: "Design minimaliste japonais épuré",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "24 – 29 fév",
    price: "320 000",
    currency: "GNF",
    discount: 11,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 34,
    title: "Villa Piscine Privée",
    location: "Coyah",
    rating: "4.94",
    reviews: 178,
    description: "Villa luxueuse avec piscine chauffée",
    bedrooms: "5 chambres · 5 lits · 4 salles de bain",
    dates: "15 – 22 mar",
    price: "2 900 000",
    currency: "GNF",
    discount: 32,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500",
    ],
  },
  {
    id: 35,
    title: "Studio Centre d'Affaires",
    location: "Ratoma, Conakry",
    rating: "4.83",
    reviews: 94,
    description: "Proche des centres d'affaires et ambassades",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "7 – 12 fév",
    price: "260 000",
    currency: "GNF",
    discount: 9,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-22",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 36,
    title: "Maison Traditionnelle Moderne",
    location: "Siguiri",
    rating: "4.79",
    reviews: 72,
    description: "Architecture traditionnelle avec équipements modernes",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "19 – 24 fév",
    price: "440 000",
    currency: "GNF",
    discount: 13,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-23",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
    ],
  },
  {
    id: 37,
    title: "Condo Vue Océan",
    location: "Dixinn, Conakry",
    rating: "4.91",
    reviews: 145,
    description: "Vue directe sur l'océan Atlantique",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "2 – 7 mar",
    price: "650 000",
    currency: "GNF",
    discount: 22,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=500",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
    ],
  },
  {
    id: 38,
    title: "Résidence Sécurisée Luxe",
    location: "Kaloum, Conakry",
    rating: "4.95",
    reviews: 201,
    description: "Complexe sécurisé 24/7 avec toutes commodités",
    bedrooms: "3 chambres · 3 lits · 3 salles de bain",
    dates: "20 – 27 mar",
    price: "1 400 000",
    currency: "GNF",
    discount: 28,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
    ],
  },
  {
    id: 39,
    title: "Loft Industriel Rénové",
    location: "Matoto, Conakry",
    rating: "4.87",
    reviews: 118,
    description: "Ancien entrepôt transformé en loft moderne",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "9 – 14 mar",
    price: "540 000",
    currency: "GNF",
    discount: 16,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1548611635-b6e7847d390d?w=500",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=500",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
    ],
  },
  {
    id: 40,
    title: "Villa Prestige Jardin Tropical",
    location: "Kankan",
    rating: "4.93",
    reviews: 167,
    description: "Villa d'exception avec jardin tropical luxuriant",
    bedrooms: "4 chambres · 4 lits · 4 salles de bain",
    dates: "13 – 20 mar",
    price: "2 400 000",
    currency: "GNF",
    discount: 35,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1575517111836-8e82de8e6abd?w=500",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
    ],
  },
  {
    id: 41,
    title: "Studio Étudiant Moderne",
    location: "Matam, Conakry",
    rating: "4.76",
    reviews: 84,
    description: "Parfait pour étudiants et jeunes professionnels",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "1 – 6 fév",
    price: "140 000",
    currency: "GNF",
    discount: 7,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-24",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 42,
    title: "Appartement Rooftop",
    location: "Kaloum, Conakry",
    rating: "4.89",
    reviews: 132,
    description: "Dernier étage avec terrasse rooftop privée",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "17 – 22 fév",
    price: "720 000",
    currency: "GNF",
    discount: 24,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 43,
    title: "Maison Campagne Charme",
    location: "Dalaba",
    rating: "4.85",
    reviews: 96,
    description: "Maison rustique avec vue sur les montagnes",
    bedrooms: "3 chambres · 3 lits · 2 salles de bain",
    dates: "4 – 9 mar",
    price: "380 000",
    currency: "GNF",
    discount: 11,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-25",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500",
    ],
  },
  {
    id: 44,
    title: "Penthouse Ultra Moderne",
    location: "Dixinn, Conakry",
    rating: "4.97",
    reviews: 189,
    description: "Technologie domotique et design futuriste",
    bedrooms: "3 chambres · 3 lits · 3 salles de bain",
    dates: "21 – 28 mar",
    price: "3 200 000",
    currency: "GNF",
    discount: 38,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
  {
    id: 45,
    title: "Cottage Bord de Lac",
    location: "Koundara",
    rating: "4.82",
    reviews: 78,
    description: "Cottage paisible au bord du lac",
    bedrooms: "2 chambres · 2 lits · 1 salle de bain",
    dates: "26 fév – 3 mar",
    price: "310 000",
    currency: "GNF",
    discount: 9,
    isTrending: false,
    isSpecialOffer: false,
    lastSearched: "2024-01-26",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500",
    ],
  },
  {
    id: 46,
    title: "Appartement Coworking Intégré",
    location: "Ratoma, Conakry",
    rating: "4.88",
    reviews: 112,
    description: "Espace coworking privé inclus",
    bedrooms: "2 chambres · 2 lits · 2 salles de bain",
    dates: "11 – 16 fév",
    price: "580 000",
    currency: "GNF",
    discount: 19,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500",
    ],
  },
  {
    id: 47,
    title: "Villa Architecte Design",
    location: "Labé",
    rating: "4.94",
    reviews: 154,
    description: "Villa signée par architecte renommé",
    bedrooms: "4 chambres · 4 lits · 3 salles de bain",
    dates: "16 – 23 mar",
    price: "1 900 000",
    currency: "GNF",
    discount: 30,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500",
    ],
  },
  {
    id: 48,
    title: "Studio Smart Home",
    location: "Kaloum, Conakry",
    rating: "4.86",
    reviews: 103,
    description: "Entièrement automatisé et connecté",
    bedrooms: "1 chambre · 1 lit · 1 salle de bain",
    dates: "3 – 8 fév",
    price: "290 000",
    currency: "GNF",
    discount: 12,
    isTrending: true,
    isSpecialOffer: false,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=500",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
    ],
  },
  {
    id: 49,
    title: "Résidence Familiale Premium",
    location: "Nzérékoré",
    rating: "4.92",
    reviews: 142,
    description: "Résidence familiale haut standing avec jardin",
    bedrooms: "5 chambres · 5 lits · 4 salles de bain",
    dates: "10 – 17 mar",
    price: "2 600 000",
    currency: "GNF",
    discount: 33,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1575517111836-8e82de8e6abd?w=500",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500",
    ],
  },
  {
    id: 50,
    title: "Penthouse Presidential",
    location: "Kaloum, Conakry",
    rating: "4.99",
    reviews: 234,
    description: "Le summum du luxe avec service 5 étoiles",
    bedrooms: "4 chambres · 4 lits king · 5 salles de bain",
    dates: "25 mar – 1 avr",
    price: "4 500 000",
    currency: "GNF",
    discount: 40,
    isTrending: true,
    isSpecialOffer: true,
    lastSearched: null,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500",
    ],
  },
];

// Compare The Highest Reviewed Past Offers
const topReviewedProperties = properties
  .slice()
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 8)
  .map((item) => {
    const ramdomImages =
      item.images && item.images.length > 0
        ? item.images[Math.floor(Math.random() * item.images.length)]
        : [];
    return {
      title: item.title,
      image: ramdomImages,
    };
  });

console.log("Top Reviewed Properties:", topReviewedProperties);

export const ImagesSlider = () => {
  return (
    <>
      <div
        style={{ backgroundColor: colors.neutral.bgSection }}
        className="min-h-screen py-5 px-5"
      >
        {" "}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {properties.map((property, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg shadow-md overflow-hidden group cursor-pointer"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Slider Swiper avec animations */}
              <div className="relative h-64 overflow-hidden">
                <Swiper
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  modules={[Pagination, Navigation]}
                  className="h-full relative"
                >
                  {property.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Image avec effet de chargement */}
                        <motion.img
                          src={image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          loading="lazy"
                        />

                        {/* Overlay animé au survol */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                           flex items-end justify-start p-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.span
                            className="text-white text-lg font-semibold"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {property.title}
                          </motion.span>
                        </motion.div>

                        {/* Indicateur d'images multiples */}
                        {property.images.length > 1 && (
                          <motion.div
                            className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {property.images.length} pictures
                          </motion.div>
                        )}
                      </motion.div>
                    </SwiperSlide>
                  ))}

                  {/* Navigation custom avec animations */}
                  <motion.div
                    className="swiper-button-next"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight />
                  </motion.div>
                  <motion.div
                    className="swiper-button-prev"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft />
                  </motion.div>
                </Swiper>

                {/* Bouton favori avec animation cœur */}
                <motion.button
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg z-10"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "#fef2f2",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.3 + idx * 0.05,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heart
                      color={colors.neutral.textPrimary}
                      fill={colors.neutral.textPrimary}
                    />
                  </motion.div>
                </motion.button>

                {/* Badge de statut (Nouveau, Populaire, etc.) */}
                {property.isNew && (
                  <motion.div
                    className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-md z-10"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                  >
                    NOUVEAU
                  </motion.div>
                )}
              </div>

              {/* Contenu de la carte avec animations en cascade */}
              <motion.div
                className="p-4 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
              >
                {/* En-tête avec titre et rating */}
                <motion.div
                  className="flex justify-between items-start mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                >
                  <motion.h3
                    className="font-semibold text-gray-900 line-clamp-1"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {property.title}
                  </motion.h3>
                  <motion.div
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span
                      className="text-yellow-400"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                    >
                      ★
                    </motion.span>
                    <span className="text-sm text-gray-900">
                      {property.rating}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Localisation et dates */}
                <motion.div
                  className="flex items-center justify-between mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.05 }}
                >
                  <motion.p
                    className="text-gray-500 text-sm flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    📍 {property.location}
                  </motion.p>
                  <motion.p
                    className="text-gray-500 text-sm"
                    whileHover={{ x: -5 }}
                  >
                    📅 {property.dates}
                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-500 text-sm mb-3 line-clamp-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + idx * 0.05 }}
                >
                  {property.description}
                </motion.p>

                {/* Prix et durée */}
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + idx * 0.05 }}
                >
                  <div className="text-gray-900 font-semibold w-full flex items-center justify-between">
                    <motion.div
                      className="text-black font-bold flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 1.1 + idx * 0.05,
                        }}
                      >
                        {property.price}
                      </motion.span>
                      <span>{property.currency}</span>
                    </motion.div>
                    <motion.span
                      className="text-gray-600 font-normal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + idx * 0.05 }}
                    >
                      for 5 nights
                    </motion.span>
                  </div>
                </motion.div>

                {/* Bouton de réservation discret */}
                <motion.button
                  className="w-full mt-3 py-2 bg-blue-500 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: colors.primary.buttonHover,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Réserver maintenant
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Compare The Highest Reviewed Past Offers  */}
      <div>
        <h2 className="text-2xl font-bold mb-4 px-5">
          Compare The Highest Reviewed Past Offers{" "}
        </h2>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 px-5 mb-10">
          {topReviewedProperties.map((property, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }} // état initial
              animate={{ opacity: 1, y: 0 }} // état final
              transition={{ duration: 0.5, delay: index * 0.1 }} // délai progressif
              whileHover={{ scale: 1.05 }} // effet hover
            >
              <motion.img
                src={property.image}
                alt={property.title}
                className="w-full h-40 object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="p-2 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3
                  className="text-sm font-semibold text-gray-900 line-clamp-2"
                  whileHover={{ color: "#4f46e5" }} // change couleur au hover
                >
                  {property.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
