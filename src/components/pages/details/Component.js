import { Link } from 'react-router-dom';
import { memo } from 'react';
import * as R from 'ramda';

const DetailsPage = ({
  data = {}
}) => {
  const info = R.keys(data).map((key) => (
    <div key={key}>
      {key}: {data[key]}
    </div>
  ));

  return (
    <>
      <Link to="/">
        back
      </Link>
      <br />
      {info}
    </>
  );
};

DetailsPage.propTypes = {
  data: PropTypes.object,
};

export default memo(DetailsPage);
