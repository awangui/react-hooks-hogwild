import React, { useState } from 'react';
import porkers from '../../porkers_data.js';

import ComponentC from './ComponentC';
import ComponentB from './ComponentB';

function ComponentA() {
  const [hogs, setHogs] = useState(porkers);
  return (
      <div>
        <ComponentB setHogs={setHogs} hogs={hogs}/>
        <ComponentC hogs={hogs}/>
      </div>
  );
}
export default ComponentA;