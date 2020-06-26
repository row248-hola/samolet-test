import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './app.css';
import { fetchData } from "./api";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <Layout>
      <pre>
        { JSON.stringify(data, null, 2) }
      </pre>
    </Layout>
  );
}
