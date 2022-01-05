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
  {
   title: 'Fresas',
   price: 6,
   pictureUrl: '/Imagenes/home1.png',
   category: 'frutas',
   stock: 7,
   detail: "Son una fuente de vitaminas del grupo B, como la vitamina B6, la niacina, la riboflavina, el ácido pantoténico o el ácido fólico. -Actúa como un potente antioxidante y antiinflamatorio natural. Una taza de fresas contiene 21 gramos de manganeso."
},
{
 
   title: 'Durazno',
   price: 5,
   pictureUrl: '/Imagenes/home2.png',
   category: 'frutas',
   stock: 3,
   detail: "Estos dulces frutos tienen vitamina A, B1, B2 y vitamina C. Acorde a profesionales de la Clínica Mayo, la vitamina A es un nutriente importante para la visión, el crecimiento, la división celular, la reproducción y la inmunidad. También tiene propiedades antioxidantes."
  
},
{
 
   title: 'Manzana',
   price: 9,
   pictureUrl: '/Imagenes/home3.png',
   category: 'frutas',
   stock: 4,
   detail: "Contiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además, gracias a la presencia de ácido málico y tartárico facilita la digestión de aquellos alimentos que posean un alto contenido en grasas."
},
{
  
  title: 'Sandia',
  price: 7,
  pictureUrl: '/Imagenes/home4.png',
  category: 'frutas',
  stock: 5,
  detail: "La sandia es rica en vitaminas B, necesarias para la producción de energía. Son una buena fuente de vitamina B6, B1 y también son una buena fuente de magnesio y potasio. 100. La información se refiere a 100 gramos (3.52 onzas) de la fruta fresca."
},{
  
  title: 'Zanahoria',
  price: 6,
  pictureUrl: '/Imagenes/foto5.png',
  category: 'verduras',
  stock: 6,
  detail: "Ricas en potasio y fósforo, las zanahorias son un remedio para mentes cansadas y nervios desatados. Los betacarotenos son unos poderosos protectores que evitan el envejecimiento prematuro. Protegen nuestra retina y evitan la aparición de cataratas."
},
{
  
  title: 'Tomate',
  price: 4,
  pictureUrl: '/Imagenes/home6.png',
  category: 'verduras',
  stock: 7,
  detail: "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C (14); también presenta carotenoides como el licopeno, el que junto a la vitamina C son antioxidantes (15, 16)."
},
{
  
  title: 'Cebolla',
  price: 5,
  pictureUrl: '/Imagenes/home7.png',
  category: 'verduras',
  stock: 8,
  detail: "La cebolla contiene azúcar natural, vitaminas A, B6, C y E. También minerales como el sodio, potasio, hierro y fibra alimentaria. Además son un buena fuente de ácido fólico. 100 gramos de cebolla contienen 44 calorías y 1,4 gramos de fibra."
},{
 
  title: 'Pimenton',
  price: 8,
  pictureUrl: '/Imagenes/home8.png',
  category: 'verduras',
  stock: 9,
  detail: "El pimentón tiene un aporte calórico importante, mucha agua, fibra y casi no tiene grasas, por lo que se puede tomar en dietas de adelgazamiento. El pimentón contiene: Vitaminas: C (muchísima, más que los cítricos) E, A, B1, B2, B3, B6. Minerales: fósforo y magnesio, potasio,calcio."
}
]
 

const db = getFirestore(app);
const ref = collection(db, 'products')



// data.map((product) => addDoc(ref, product))


export default db;
