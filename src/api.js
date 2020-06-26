import data from './data';

// const BASE_URL = 'https://data.gov.ru/sites/default/files/opendata/';

// @todo: need server proxy for fixing CORS issue
const fetchData = () => {
  return Promise.resolve(data);
  // return fetch(`${BASE_URL}7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json`)
  //   .then(response => response.json());
};

export {
  fetchData
};
