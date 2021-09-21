import Planets from "../../Planets/Planets"
import People from '../../People/People';
import Films from '../../Films/Films';
import Species from '../../Species/Species';
import Vehicles from '../../Vehicles/Vehicles'
import Starships from '../../Starships/Starships';
import {Route, Switch} from "react-router-dom"
import React from "react";

export default function MainContainer() {
    return (
        <div>
            <Switch>
                <Route exact path="/planets" component={Planets}>
                    <Planets items={"https://swapi.dev/api/planets"} />
                </Route>
                <Route exact path="/people" component={People}>
                    <People items={"https://swapi.dev/api/people"} />
                </Route>
                <Route exact path="/films" component={Films}>
                    <Films items={"https://swapi.dev/api/films"} />
                </Route>
                <Route exact path="/species" component={Species}>
                    <Species items={"https://swapi.dev/api/species "} />
                </Route>
                <Route exact path="/vehicles" component={Vehicles}>
                    <Vehicles items={"https://swapi.dev/api/vehicles"} />
                </Route>
                <Route exact path="/starships" component={Starships}>
                    <Starships items={"https://swapi.dev/api/starships"} />
                </Route>
            </Switch>
        </div>
    )
}