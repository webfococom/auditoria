import Home from "views/home/Home";
import Anuncios from "views/anuncios/Anuncios";
import RaioX from "views/raiox/RaioX";
import Mixer from "views/mixer/Mixer";
import Resultados from "views/resultados/Resultados";
import Painel from "views/campanhas/PainelDaCampanha";
import Pagamento from "views/payments/Payment";
import Cadastro from "views/campanhas/PainelDaCampanha";
import Bot from "views/bot/Bot";
import Login from "views/campanhas/PainelDaCampanha";

import GMBIndex from 'views/googleMeuNegocio';
import GMBPostagens from 'views/googleMeuNegocio/postagens';
import GMBInformacoes from 'views/googleMeuNegocio/informacoes';
import GMBResultados from 'views/googleMeuNegocio/resultados';
import GMBAvaliacoes from 'views/googleMeuNegocio/avaliacoes';
import GMBMensagens from 'views/googleMeuNegocio/mensagens';
import GMBFotos from 'views/googleMeuNegocio/fotos';
import GMBProdutos from 'views/googleMeuNegocio/produtos';
import GMBServicos from 'views/googleMeuNegocio/servicos';
import GMBConfiguracoes from 'views/googleMeuNegocio/configuracoes';

import GADSIndex from "views/googleAds";
import GADSOportunidades from "views/googleAds/oportunidades";
import GADSPilotoAutomatico from "views/googleAds/pilotoAutomatico";

import LPIndex from "views/landingPages";
import LpNova from "views/landingPages/novaLP";
import LpEdit from "views/landingPages/editLP";

import PRODUTOSIndex from "views/produtos";
import PRODUTOSNew from "views/produtos/new";
import PRODUTOSEdit from "views/produtos/edit";

let routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: Home,
    },
    {
        name: "Anúncios",
        path: "/anuncios",
        exact: true,
        component: Anuncios,
    },
    {
        name: "Raio X",
        path: "/raio-x",
        exact: true,
        component: RaioX,
    },
    {
        name: "Mixer",
        path: "/mixer",
        exact: true,
        component: Mixer,
    },
    {
        name: "Resultados",
        path: "/resultados",
        exact: true,
        component: Resultados,
    },
    {
        name: "Painel da campanha",
        path: "/painel/:campanha",
        exact: true,
        component: Painel,
    },
    {
        name: "Pagamento",
        path: "/pagamento",
        exact: true,
        component: Pagamento,
    },
    {
        name: "Cadastro",
        path: "/cadastro",
        exact: true,
        component: Cadastro,
    },
    {
        name: "Login",
        path: "/login",
        exact: true,
        component: Cadastro,
    },
    {
        name: "Bot",
        path: "/bot",
        exact: true,
        component: Bot,
    },
    {
        name: "Google Meu Negócio",
        path: "/google-meu-negocio",
        exact: true,
        component: GMBIndex,
    },
    {
        name: "Postagens",
        path: "/google-meu-negocio/postagens",
        exact: true,
        component: GMBPostagens,
    },
    {
        name: "Informações",
        path: "/google-meu-negocio/informacoes",
        exact: true,
        component: GMBInformacoes,
    },
    {
        name: "Resultados",
        path: "/google-meu-negocio/resultados",
        exact: true,
        component: GMBResultados,
    },
    {
        name: "Avaliações",
        path: "/google-meu-negocio/avaliacoes",
        exact: true,
        component: GMBAvaliacoes,
    },
    {
        name: "Mensagens",
        path: "/google-meu-negocio/mensagens",
        exact: true,
        component: GMBMensagens,
    },
    {
        name: "Fotos",
        path: "/google-meu-negocio/fotos",
        exact: true,
        component: GMBFotos,
    },
    {
        name: "Produtos",
        path: "/google-meu-negocio/produtos",
        exact: true,
        component: GMBProdutos,
    },
    {
        name: "Serviços",
        path: "/google-meu-negocio/servicos",
        exact: true,
        component: GMBServicos,
    },
    {
        name: "Configurações",
        path: "/google-meu-negocio/configuracoes",
        exact: true,
        component: GMBConfiguracoes,
    },


    {
        name: "Visão Geral",
        path: "/google-ads",
        exact: true,
        component: GADSIndex,
    },
    {
        name: "Oportunidades",
        path: "/google-ads/oportunidades",
        exact: true,
        component: GADSOportunidades,
    },
    {
        name: "Piloto Automatico",
        path: "/google-ads/piloto-automatico",
        exact: true,
        component: GADSPilotoAutomatico,
    },

    {
        name: "Dashboard",
        path: "/landing-pages",
        exact: true,
        component: LPIndex,
    },
    {
        name: "Nova Landing Page",
        path: "/landing-pages/new",
        exact: true,
        component: LpNova,
    },
    {
        name: "Nova Landing Page",
        path: "/landing-pages/edit",
        exact: true,
        component: LpEdit,
    },


    {
        name: "Produtos",
        path: "/produtos",
        exact: true,
        component: PRODUTOSIndex,
    },{
        name: "Novo produto",
        path: "/produtos/new",
        exact: true,
        component: PRODUTOSNew,
    },{
        name: "Editar produto",
        path: "/produtos/edit",
        exact: true,
        component: PRODUTOSEdit,
    }
];

export default routes;
