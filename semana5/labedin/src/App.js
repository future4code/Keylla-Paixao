import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEsSK7niarfVQ/profile-displayphoto-shrink_800_800/0/1622824317450?e=1640217600&v=beta&t=BFmI3HvRAZotIWFRLaN0sX_8dULfHMHoF3zKALjyHa0" 
          nome="Keylla Paixao" 
          descricao="adoro tecnologia, meus pets e o zeca pagodinho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno  
          descricao="Email: meuemail@.com" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno  
          descricao="Endereço: Minha casa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.olx.com.br/images/85/852820116256751.jpg" 
          nome="Plano A" 
          descricao="Professora de Ciências" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
