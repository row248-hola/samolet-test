import { memo } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Search';
import { useSelector } from 'react-redux';

const HomePage = ({
  data = []
}) => {
  const searchQuery = useSelector(({ value }) => value);

  const list = data.filter(({ territory }) => territory.toLowerCase().match(searchQuery.toLowerCase()));

  return (
    <>
      <Search />
      <br />
      {list.map(({ territory, buildings_management, order }) => (
        <div key={order}>
          <div>territory: {territory}</div>
          <div>buildings_management: {buildings_management}</div>
          <Link
            to={`/details/${order}`}
          >
            show details
          </Link>
          <br />
          <br />
        </div>
      ))}
    </>
  )
};

HomePage.propTypes = {
  data: PropTypes.array,
};

export default memo(HomePage);
