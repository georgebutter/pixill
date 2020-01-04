import * as React from 'react';

const tools = ['Move', 'Draw', 'Erase']

const Toolbar: React.FC<Props> = ({ setTool, setCellSize }) => (
  <div className={'bg-gray-500 fixed inset-y-0 right-0 z-20'}>
    <ul className={``}>
      {tools.map((tool) => (
        <li key={tool}>
          <button
            className={'p-1 outline-none active:outline-none focus:outline-none'}
            onClick={() => {
              setTool(tool)
            }}
          >
            {tool}
          </button>
        </li>
      ))}
      <li>
        <button
          className={'p-1 outline-none active:outline-none focus:outline-none'}
          onClick={() => {
            setCellSize(prev => prev + 1)
          }}
        >
          {'Zoom in'}
        </button>
      </li>
      <li>
        <button
          className={'p-1 outline-none active:outline-none focus:outline-none'}
          onClick={() => {
            setCellSize(prev => prev - 1)
          }}
        >
          {'Zoom out'}
        </button>
      </li>
    </ul>
  </div>
)


export interface Props {
  setTool: React.Dispatch<React.SetStateAction<string>>;
  setCellSize: React.Dispatch<React.SetStateAction<number>>;
}

export default Toolbar;
