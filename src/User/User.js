import React from 'react';

const User = (props) => {
    console.log(props.data)
    return(
      <div>
        {props.data.map((item)  => (
            <li>
                {item.username}
            </li>
        ))
        }
      </div>
    );  
  }

export default User;
 