// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc,getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1swOskREs_FpoLROrjbJgjYCBdFBGymU",
  authDomain: "react-fir-2021.firebaseapp.com",
  projectId: "react-fir-2021",
  storageBucket: "react-fir-2021.appspot.com",
  messagingSenderId: "350777620910",
  appId: "1:350777620910:web:7e08e4fdd5e8d0b222703f"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const data = [
  { id: '1',
   title: 'Fresas',
   price: 6,
   pictureUrl: '/Imagenes/foto1.jpg',
   category: 'frutas',
   stock: 7,
   detail: "Son una fuente de vitaminas del grupo B, como la vitamina B6, la niacina, la riboflavina, el ácido pantoténico o el ácido fólico. -Actúa como un potente antioxidante y antiinflamatorio natural. Una taza de fresas contiene 21 gramos de manganeso."
},
{
   id: '2',
   title: 'Durazno',
   price: 5,
   pictureUrl: '/Imagenes/foto2.jpg',
   category: 'frutas',
   stock: 3,
   detail: "Estos dulces frutos tienen vitamina A, B1, B2 y vitamina C. Acorde a profesionales de la Clínica Mayo, la vitamina A es un nutriente importante para la visión, el crecimiento, la división celular, la reproducción y la inmunidad. También tiene propiedades antioxidantes."
  
},
{
   id: '3',
   title: 'Manzana',
   price: 9,
   pictureUrl: '/Imagenes/foto3.jpg',
   category: 'frutas',
   stock: 4,
   detail: "Contiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además, gracias a la presencia de ácido málico y tartárico facilita la digestión de aquellos alimentos que posean un alto contenido en grasas."
},
{
  id: '4',
  title: 'Sandia',
  price: 7,
  pictureUrl: '/Imagenes/foto4.jpg',
  category: 'frutas',
  stock: 5,
  detail: "La sandia es rica en vitaminas B, necesarias para la producción de energía. Son una buena fuente de vitamina B6, B1 y también son una buena fuente de magnesio y potasio. 100. La información se refiere a 100 gramos (3.52 onzas) de la fruta fresca."
},{
  id: '5',
  title: 'Zanahoria',
  price: 6,
  pictureUrl: '/Imagenes/foto5.png',
  category: 'verduras',
  stock: 6,
  detail: "Ricas en potasio y fósforo, las zanahorias son un remedio para mentes cansadas y nervios desatados. Los betacarotenos son unos poderosos protectores que evitan el envejecimiento prematuro. Protegen nuestra retina y evitan la aparición de cataratas."
},
{
  id: '6',
  title: 'Tomate',
  price: 4,
  pictureUrl: '/Imagenes/foto6.jpg',
  category: 'verduras',
  stock: 7,
  detail: "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C (14); también presenta carotenoides como el licopeno, el que junto a la vitamina C son antioxidantes (15, 16)."
},
{
  id: '7',
  title: 'Cebolla',
  price: 5,
  pictureUrl: '/Imagenes/foto7.jpg',
  category: 'verduras',
  stock: 8,
  detail: "La cebolla contiene azúcar natural, vitaminas A, B6, C y E. También minerales como el sodio, potasio, hierro y fibra alimentaria. Además son un buena fuente de ácido fólico. 100 gramos de cebolla contienen 44 calorías y 1,4 gramos de fibra."
},{
  id: '8',
  title: 'Pimenton',
  price: 8,
  pictureUrl: '/Imagenes/foto8.jpg',
  category: 'verduras',
  stock: 9,
  detail: "El pimentón tiene un aporte calórico importante, mucha agua, fibra y casi no tiene grasas, por lo que se puede tomar en dietas de adelgazamiento. El pimentón contiene: Vitaminas: C (muchísima, más que los cítricos) E, A, B1, B2, B3, B6. Minerales: fósforo y magnesio, potasio,calcio."
}
]
 

const db = getFirestore(app);
const ref = collection(db, 'products')



export default db;
