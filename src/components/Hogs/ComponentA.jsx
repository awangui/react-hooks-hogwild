import {useState} from 'react';
import porkers from '../porkers_data';
import ComponentC from './ComponentC';
function componentA() {
  const [hogs, setHogs] = useState(porkers);

  return (
    <div><ComponentC/></div>
  );
}
export default componentA;