import React from "react";

function CenterMenu() {
  const listStyle = "mr-[3rem] hover:cursor-pointer";

  return (
    <div className='menu-flex'>
      <ul className='flex w-[100%] justify-between'>
        <li className={listStyle}>Home</li>
        <li className={listStyle}>About</li>
        <li className={listStyle}>Performer</li>
        <li className={listStyle}>Event Schedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
