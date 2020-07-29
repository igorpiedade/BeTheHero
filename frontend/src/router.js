//Importação de pacotes
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Importação dos Componentes de Rota
import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/NewIncident'

//Definição das Rotas
export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>

        </BrowserRouter>
    )
};
