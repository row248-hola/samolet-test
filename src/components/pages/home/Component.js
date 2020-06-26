import { memo } from 'react';
import * as R from 'ramda';

const HomePage = ({
  data = []
}) => {
  const list = data.map(R.pick(['territory', 'buildings_management', 'order']));

  return (
    list.map(({ territory, buildings_management, order }) => (
      <div key={order}>
        <div>territory: {territory}</div>
        <div>buildings_management: {buildings_management}</div>
        <br />
      </div>
    ))
  )
};

HomePage.propTypes = {
  data: PropTypes.array,
};

export default memo(HomePage);
