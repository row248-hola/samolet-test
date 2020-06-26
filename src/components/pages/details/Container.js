import {
  useParams
} from "react-router-dom";
import Component from './Component';

const Container = ({
  data = []
}) => {
  const { id } = useParams();

  return (
    <Component data={data[id]} />
  )
};

Container.propTypes = {
  data: PropTypes.array,
};

export default Container;
