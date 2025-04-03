import React from 'react';
import Button from './Button';

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Romance", "All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"];

const ButtonList = () => {
  return (
    <div className="flex my-2 overflow-x-scroll">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;