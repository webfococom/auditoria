// import Dashboard from "views/Dashboard.jsx";
// import Icons from "views/Icons.jsx";
// import Map from "views/Map.jsx";
// import Notifications from "views/Notifications.jsx";
// import Rtl from "views/Rtl.jsx";
// import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
// import UserProfile from "views/UserProfile.jsx";

import Home from "views/home/Home";
import Anuncios from "views/anuncios/Anuncios";
import RaioX from "views/raiox/RaioX";
import Mixer from "views/mixer/Mixer";
import Resultados from "views/resultados/Resultados";

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
];

export default routes;
