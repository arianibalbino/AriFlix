import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';
//raiz da aplicação=> inicializa o react 



 //se nao achar enhuma outra rota, o terceiro router sem o path sera  o 404
  ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path= "/cadastro/video" component={CadastroVideo}/>
      <Route path= "/cadastro/Categoria" component={CadastroCategoria}/>
      <Route  component={()=> (<div> 404 NOT FOUND</div>)}/>  
    </Switch>  
    
  </BrowserRouter>,
  document.getElementById('root')
);

