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
          imagem="https://scontent.fmao1-1.fna.fbcdn.net/v/t1.6435-9/202951272_100490035635278_518365256874037561_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9uHyZxYbhMoAX-sFwhg&tn=vZ-2Wik3ayC5qIJO&_nc_ht=scontent.fmao1-1.fna&oh=48fd6f2c9134d7c931c654142a9db27b&oe=60F29CE6" 
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
