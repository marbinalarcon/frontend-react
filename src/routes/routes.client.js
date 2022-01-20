import {ClientLayouts} from "../layouts";
import {Home} from "../pages/Client";

const routesClient = [
    {
        path: "/",
        layout: ClientLayouts,
        component: Home,
        
    },
    
];

export default routesClient;