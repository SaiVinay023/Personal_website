import { useState } from 'react';


function Practice() {
    return (
      <div>
        <h1>Welcome to my app</h1>
            <MyButton />
            <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
        </div>
        
    );
}
  
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 2);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
export default Practice;