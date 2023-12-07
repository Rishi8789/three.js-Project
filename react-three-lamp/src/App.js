// App.js
import React, { useState } from 'react';
import Lamp from './Lamp';

const App = () => {
  const [isLampOn, setLampOn] = useState(false);

  const toggleLamp = () => {
    setLampOn(!isLampOn);
  };

  return (
    <div>
      <button onClick={toggleLamp}>{isLampOn ? 'Turn Off' : 'Turn On'}</button>
      <Lamp isOn={isLampOn} />
    </div>
  );
};

export default App;
