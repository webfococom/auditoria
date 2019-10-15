import Home from "views/home/Home";
import Anuncios from "views/anuncios/Anuncios";
import RaioX from "views/raiox/RaioX";
import Mixer from "views/mixer/Mixer";
import Resultados from "views/resultados/Resultados";
import Painel from "views/campanhas/PainelDaCampanha";

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
];

export default routes;
