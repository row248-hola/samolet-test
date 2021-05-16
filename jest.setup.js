import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';

Enzyme.configure({ adapter: new Adapter() });

global.PropTypes = PropTypes;
