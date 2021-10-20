import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Zeca do Boteco'}
          fotoUsuario={'https://bhaz.com.br/wp-content/uploads/2020/05/zeca-1536x806.jpg'}
          fotoPost={'https://s2.glbimg.com/6TeJjM1nnZv-l1Ze5Bn59jdzG1k=/e.glbimg.com/og/ed/f/original/2016/09/29/ze.jpg'}
        />
        <Post
          nomeUsuario={'Pitty Bonekinha'}
          fotoUsuario={'http://4.bp.blogspot.com/-lNOCel9nIEc/UOxwU2G4InI/AAAAAAAABzQ/iQpR81RmBgo/s1600/Pitty++PB++PNG.png'}
          fotoPost={'https://static1.purepeople.com.br/articles/1/39/51/@/31983--950x0-1.jpg'}
        />
        <Post
          nomeUsuario={'Lizzo Delicious'}
          fotoUsuario={'https://dazedimg-dazedgroup.netdna-ssl.com/1200/0-0-1314-876/azure/dazed-prod/1270/8/1278462.jpg'}
          fotoPost={'http://bridalsmagazine.com/wp-content/uploads/2019/07/lizzo-announces-tour-1024x683.jpg'}
        />
      </div>
    );
  }
}

export default App;
