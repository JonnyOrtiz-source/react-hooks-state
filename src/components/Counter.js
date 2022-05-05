import React, { useState } from 'react';

function Counter() {
   const [count, setCount] = useState(0);

   function increment() {
      console.log('Count before setCount:', count);
      setCount((currentCount) => currentCount + 1);
      console.log('Count after 1st setCount:', count);
      setCount((currentCount) => currentCount + 1);
      console.log('Count after 2nd setCount:', count);
   }

   return (
      <button onClick={increment}>I have been clicked {count} times</button>
   );
}

export default Counter;
