import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://fontmeme.com/permalink/200730/039fb631b7354f162bd1e4c130876525.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente co-criado por  Ariani na
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>
         
      </p>
    </FooterBase>
  );
}

export default Footer;
