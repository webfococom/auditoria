import React from "react";
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';


// all available props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#00AEEF',
    headerFontColor: '#fff',
    headerFontSize: '18px',
    botBubbleColor: '#00AEEF',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

//Logo cielo
//https://www.planejarbrasil.com.br/wp-content/uploads/2018/02/LogoCielo1602.png
const styled = {
    width:'100%',
    heigth:'100%',

}

class Bot extends React.Component {


    render() {
        return (
            <ThemeProvider theme={theme}>
                
            <ChatBot 
            style={styled}
  steps={[
    {
      id: '1',
      delay: 2000,
      message: 'Olá! Obrigado por se cadastrar no AdsApp!',
      trigger: '2',
    },
    {
      id: '2',
      delay: 2000,
      message: 'Vamos fazer algumas perguntas pra entender seu momento e seu objetivo, ok?',
      trigger: '3',
    },
    {
      id: '3',
      delay: 2000,
      message: 'Sua empresa já aparece no Google Maps?',
      trigger: 'q_tem_gmb',
    },
    {
      id: 'q_tem_gmb',
      options:[
        { value: 'sim', label: 'Sim', trigger: '4' },
        { value: 'nao', label: 'Não', trigger: '4' }
      ]
    },
    {
      id: '4',
      delay: 2000,
      message: 'Você já possui site?',
      trigger: 'q_tem_lp',
    },
    {
    id: 'q_tem_lp',
    options:[
            { value: 'sim', label: 'Sim', trigger: '5' },
            { value: 'nao', label: 'Não', trigger: '5' }
        ]
    },
    {
      id: '5',
      delay: 2000,
      message:'Você já anuncia no Google?',
      trigger: 'q_tem_ads',
    },
    {
      id: 'q_tem_ads',
      options:[
        { value: 'sim', label: 'Sim', trigger: '6' },
        { value: 'nao', label: 'Não', trigger: '6' }
      ]
    },
    {
      id: '6',
      delay: 2000,
      message:'Ótimo! Agora preciso de algumas informções da sua empresa',
      trigger: '7',
    },
    {
      id: '7',
      delay: 2000,
      message:'Qual seu CNPJ?',
      trigger: 'cnpj',
    },
    {
      id: 'cnpj',
      user: true,
      trigger: '8',
    },
    {
      id: '8',
      delay: 2000,
      message: 'Qual sua Razão Social?',
      trigger:'razaoSocial',
    },
    {
        id: 'razaoSocial',
        user: true,
        trigger: '9',
      },
      {
        id: '9',
        delay: 2000,
        message:'Qual Segmento você atua?',
        trigger: 'segmento',
      },
      {
        id: 'segmento',
        user: true,
        trigger: '10',
      },
      {
        id: '10',
        delay: 2000,
        message:'Estamos quase acabando, ok?',
        trigger: '11',
      },
      {
        id: '11',
        delay: 2000,
        message:'Qual é o endereço da sua empresa?',
        trigger: 'endereco',
      },
      {
        id: 'endereco',
        user:true,
        trigger: '12',
      },
      {
        id: '12',
        delay: 2000,
        message:'Perfeito! Já tenho todas as informações que preciso.',
        trigger: '13',
      },
      {
        id: '13',
        delay: 2000,
        message:'Só mais um minuto. Já estou preparando tudo pra sua empresa mudar de patamar',
        trigger: '14',
      },
      {
        id: '14',
        delay:4,
        delay: 2000,
        message:'Prontinho. Já criei um site pra você:',
        trigger: '14',
      },
      {
        id: '14',
        delay:4,
        delay: 2000,
        message:'Prontinho. Já criei um site pra você:',
        trigger: '15',
      },
      {
        id: '15',
        delay: 2000,
        component:(<div><a href='http://auditoriaads.com' target="_blank">http://hub.auditoriaads.com</a></div>),
        end: true,
      },
  ]}
/>

</ThemeProvider>
        );
    }
}

export default Bot;