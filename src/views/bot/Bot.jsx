import React, { Component }  from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logarUsuario } from '../../redux/actions';


// all available props
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#55b5a2",
  headerFontColor: "#fff",
  headerFontSize: "18px",
  botBubbleColor: "#55b5a2",
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
              <td><b>E-mail:</b> contato@empresaltda.com.br</td>
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
  constructor(props) {
    super(props);

    console.log(props);
  }

  goToDash = () => {
    this.props.logarUsuario(true);

    setTimeout(() => {
      window.location.href = document.location.origin
    }, 500);
  };

  render() {
    return (
      <ThemeProvider theme={theme} {...this.props}>
        <ChatBot
          {...this.props}
          // handleEnd={this.handleEnd}
          // botAvatar="data:image/png;base64,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"
          style={styled}
          headerTitle="Cadastre-se, no AdsApp"
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
              message: "Encontrei algumas informações sobre esse CNPJ",
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
              message: "Você já tem conta no Google Meu Negócio?",
              trigger: "q_tem_gmb"
            },
            {
              id: "q_tem_gmb",
              options: [
                { value: "sim", label: "Sim", trigger: "4" },
                { value: "nao", label: "Não", trigger: "4" }
              ]
            } ,/*
            {
              id:"25",
              delay:1200,
              message: "Certo. Já estou criando uma pra você.",
              trigger:"4"
            }, */
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
              component: ( <div><a href="http://webfocosaopaulo.com.br/adsapp/lp/model1/" target="_blank" > Ver o site </a></div> ),
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
              component:(
                <div>
                    <button type="button" onClick={this.goToDash}>
                      Acessar Dashboard
                    </button>
                    <a href="#" ></a>
                    {/* <Link to='/'>Acessar Dashboard</Link> */}
                </div>
              ),
              end:true
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
      logarUsuario 
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bot);
