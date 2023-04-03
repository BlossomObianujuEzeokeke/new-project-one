// import React, { useState } from 'react'

// function HookCounter() {

//    const [count, setCount] = useState(0)

//   return (
//     <div>
//       <button onClick = {() => setCount(count + 1)}> Count {count} </button>
//     </div>
//   )
// }

// export default HookCounter

// ============================
import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Click {count} times</button>
    </div>
  );
};

export default HookCounter;
