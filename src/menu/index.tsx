import * as React from 'react';
import MenuButton from './button';

const Menu: React.FC<Props> = ({ saveImage }) => {
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
        <li>
          <button
            className={`p-2 outline-none focus:outline-none active:outline-none`}
            onClick={() => saveImage()}
          >
            {'Save image'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export interface Props {
  saveImage: () => void;
}

export default Menu;
