import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

function App() {
  const [cards] = useState([
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Fuel Price Detector",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Price Tags Detector",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Calories Calculator",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Anomaly Detection",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Barcode scanning",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },
    {
      img : "https://picsum.photos/400/200/?blur=8", 
      title:"Position detection",
      description:"Here we describe some details about the model",
      btnText:"Learn more",
      link:"link"
    },

  ])
  return (
    <div className="App">
      <Navbar/>
      <div className='container-ttl'>
      <div className='header'>
      <h1>Available Pre-trained Models</h1>
      <p>Video, image and signal analysis models to label images, detect anomalies and a lot more. </p>
      </div>
      <div className='cards'>
        {cards.map((card, i) => (
           <Card className="card"
             imgSrc={card.img}
             title={card.title}
             description={card.description}
             btnText={card.btnText}
             link={card.link}
          />
         ))}
      </div>
      </div>
    </div>
  );
}

export default App;
