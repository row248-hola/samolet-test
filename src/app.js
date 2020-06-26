import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './app.css';
import { fetchData } from "./api";
import HomePage from './components/pages/home';
import DetailsPage from './components/pages/details/Component';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <Layout>
      {data.length && (
        <DetailsPage data={data[0]} />
      )}
      <HomePage data={data} />
    </Layout>
  );
}
