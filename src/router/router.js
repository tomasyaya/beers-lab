import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Beers } from "../pages/Beers";
import { Beer } from "../pages/Beer";
import { RandomBeer } from "../pages/RandomBeer";
import { NewBeer } from "../pages/NewBeer";
import { Layout } from "../components/Layout";
import { ROUTES } from ".";

function AppRouter() {
  return (
    <Switch>
      <Route path={ROUTES.newBeer}>
        <Layout>
          <NewBeer />
        </Layout>
      </Route>
      <Route path={ROUTES.beer}>
        <Layout>
          <Beer />
        </Layout>
      </Route>
      <Route path={ROUTES.randomBeer}>
        <Layout>
          <RandomBeer />
        </Layout>
      </Route>
      <Route path={ROUTES.beers}>
        <Layout>
          <Beers />
        </Layout>
      </Route>
      <Route exact path={ROUTES.root}>
        <Layout isHome={true}>
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
}

export default AppRouter;
