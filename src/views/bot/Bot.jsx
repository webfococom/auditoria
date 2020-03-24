import React, { Component }  from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import NumberFormat from 'react-number-format';

// all available props
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#00AEEF",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "#22cfEF",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

//Logo cielo
//https://www.planejarbrasil.com.br/wp-content/uploads/2018/02/LogoCielo1602.png
const styled = {
  width: "100%",
  heigth: "100%"
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      razao:'',
      cnpj:'',
      endereco:'',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { razao, cnpj, endereco } = steps;

    this.setState({ razao, cnpj, endereco });
  }

  render() {
    const { razao, cnpj, endereco } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h4>Resumo</h4>
        <table>
          <tbody>
            <tr>
              <td><b>Razão Social:</b> Empresa ltda</td>
            </tr>
            <tr>
              <td><b>CNPJ:</b> <NumberFormat value={cnpj.value} displayType={'text'} format="##.###.###/####-##" /> </td>
            </tr>
            <tr>
              <td><b>Endereço:</b> Rua das flores</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};


class Bot extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="data:image/png;base64,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"
          style={styled}
          headerTitle="Cadastre-se no Cielo Vantagens"
          steps={[
            {
              id: "1",
              delay: 1200,
              message: "Olá! Obrigado pelo interesse no AdsApp! Qual seu nome?",
              trigger: "nome"
            },
            {
              id: "nome",
              user: true,
              trigger: "2"
            },
            {
              id: "2",
              delay: 1200,
              message:
              "{previousValue}, vamos fazer algumas perguntas pra entender seu momento e seu objetivo, ok?",
              trigger: "7"
            },
            {
              id: "7",
              delay: 1200,
              message: "Qual seu CNPJ?",
              trigger: "cnpj"
            },
            {
              id: "cnpj",
              user: true,
              trigger: "16"
            },
            {
              id: "16",
              delay: 4000,
              message: "Encontrei, no site da Cielo, um cadastro com esse cnpj",
              trigger: "review"
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'confirm_review',
            },
            {
              id: 'confirm_review',
              message: 'Essas informações são da sua empresa?',
              trigger: 'opt_confirm_review',
            },
            {
              id: "opt_confirm_review",
              options: [
                { value: "sim", label: "Sim", trigger: "17" },
                { value: "nao", label: "Não", trigger: "3" }
              ]
            },
            {
              id: "17",
              delay: 1200,
              message: "Ótimo! Vamos usá-las para completar seu cadastro.",
              trigger: "18"
            },
            {
              id: "18",
              delay: 1200,
              message: "Nãos e preocupe, você pode alterá-las depois, se precisar",
              trigger: "3"
            },

            {
              id: "3",
              delay: 1200,
              message: "Sua empresa já aparece no Google Maps?",
              trigger: "q_tem_gmb"
            },
            {
              id: "q_tem_gmb",
              options: [
                { value: "sim", label: "Sim", trigger: "4" },
                { value: "nao", label: "Não", trigger: "4" }
              ]
            },
            {
              id: "4",
              delay: 1200,
              message: "Você já possui site?",
              trigger: "q_tem_lp"
            },
            {
              id: "q_tem_lp",
              options: [
                { value: "sim", label: "Sim", trigger: "5" },
                { value: "nao", label: "Não", trigger: "5" }
              ]
            },
            {
              id: "5",
              delay: 1200,
              message: "Você já anuncia no Google?",
              trigger: "q_tem_ads"
            },
            {
              id: "q_tem_ads",
              options: [
                { value: "sim", label: "Sim", trigger: "6" },
                { value: "nao", label: "Não", trigger: "6" }
              ]
            },
            {
              id:"18",
              delay:2000,
              message:"Só mais um minuto! Vou fazer alguns cadastros pra você",
              trigger:"14"
            },
            {
              id: "6",
              delay: 1200,
              message:
                "Ótimo! Agora preciso de algumas informações da sua empresa",
              trigger: "8"
            },
            {
              id: "8",
              delay: 1200,
              message: "Qual sua Razão Social?",
              trigger: "razaoSocial"
            },
            {
              id: "razaoSocial",
              user: true,
              trigger: "9"
            },
            {
              id: "9",
              delay: 1200,
              message: "Qual Segmento você atua?",
              trigger: "segmento"
            },
            {
              id: "segmento",
              user: true,
              trigger: "10"
            },
            {
              id: "10",
              delay: 1200,
              message: "Estamos quase acabando, ok?",
              trigger: "11"
            },
            {
              id: "11",
              delay: 1200,
              message: "Qual é o endereço da sua empresa?",
              trigger: "endereco"
            },
            {
              id: "endereco",
              user: true,
              trigger: "23"
            },
            {
              id: "23",
              delay: 1200,
              message: "Qual e-mail você mais acessa?",
              trigger: "email"
            },
            {
              id: "email",
              user: true,
              trigger: "12"
            },
            {
              id: "12",
              delay: 1200,
              message: "Perfeito! Já tenho todas as informações que preciso.",
              trigger: "13"
            },
            {
              id: "13",
              delay: 1200,
              message:
                "Só mais um minuto. Já estou preparando tudo pra sua empresa mudar de patamar",
              trigger: "14"
            },
            {
              id: "14",
              delay: 1200,
              message: "Prontinho. Já criei um site pra você:",
              trigger: "15"
            },
            {
              id: "15",
              delay: 1200,
              component: ( <div><a href="http://webfocosaopaulo.com.br/adsapp/lp/model1/" target="_blank" >
              <img src={"data:image/png;base64,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"} /></a>

              <div><a href="http://webfocosaopaulo.com.br/adsapp/lp/model1/" target="_blank" > Ver o site </a></div>
              </div> ),
              trigger:"19"
            },
            {
              id:"19",
              delay:1200,
              message:"Você receberá seus dados de acesso no e-mail cadastrado, tá?",
              trigger:"20"
            },
            {
              id:"20",
              options:[
                { value: "ok", label: "Ok, entendi", trigger: "21" },
              ]
            },
            {
              id:"21",
              delay:1200,
              message:"Agora é só acessar pelo link abaixo:",
              trigger:"22"
            },
            {
              id:"22",
              delay:1000,
              component:(<div><Link to="/login">Acessar Dashboard</Link></div>),
              end:true
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default Bot;
