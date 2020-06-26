import { memo } from 'react';
import * as R from 'ramda';

const DetailsPage = ({
  data = {}
}) => {

  return (
    R.keys(data).map((key) => (
      <div key={key}>
        {key}: {data[key]}
      </div>
    ))
  );
};

DetailsPage.propTypes = {
  data: PropTypes.object,
};

export default memo(DetailsPage);
