import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './app.css';
import { fetchData } from "./api";
import HomePage from './components/pages/home';
import DetailsPage from './components/pages/details';
import {
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage data={data} />
        </Route>
        <Route path="/details/:id">
          <DetailsPage data={data} />
        </Route>
      </Switch>
    </Layout>
  );
}
