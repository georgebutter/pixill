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

const Menu: React.FC = () => {
  const [menu, setMenu] = React.useState('')
  return (
    <nav className={'bg-gray-900 text-white text-sm fixed top-0 inset-x-0 z-10'}>
      <ul className={'flex items-center'}>
        <li>
          <strong className={'p-2'}>
            Pixill
          </strong>
        </li>
        <MenuButton name={'File'} setMenu={setMenu} menu={menu} />
        <MenuButton name={'Insert'} setMenu={setMenu} menu={menu} />
      </ul>
    </nav>
  )
}

export interface Props {
  name: string;
  menu: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

export default Menu;
