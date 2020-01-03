import * as React from 'react';

const tools = ['Move', 'Draw', 'Erase']

const Toolbar: React.FC<Props> = ({ setTool }) => (
  <div className={'bg-gray-500 fixed inset-y-0 right-0 z-20'}>
    <ul className={``}>
      {tools.map((tool) => (
        <li key={tool}>
          <button
            className={'p-1'}
            onClick={() => {
              setTool(tool)
            }}
          >
            {tool}
          </button>
        </li>
      ))}
    </ul>
  </div>
)


export interface Props {
  setTool: React.Dispatch<React.SetStateAction<string>>;
}

export default Toolbar;
