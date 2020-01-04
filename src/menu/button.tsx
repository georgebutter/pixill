import * as React from 'react';
const MenuButton: React.FC<Props> = ({ name, menu, setMenu }) => (
  <li>
    <button
      className={`p-2 outline-none focus:outline-none active:outline-none ${menu === name ? 'bg-blue-500' : ''}`}
      onClick={() => {
        setMenu((prev) => prev === name ? '' : name)}
      }
    >
      {name}
    </button>
  </li>
)

export interface Props {
  name: string;
  menu: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

export default MenuButton;
