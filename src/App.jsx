import copy from 'clipboard-copy';

import { config, generateNew, result, setConfig } from './stores';

import Checks from './components/Checks';
import Strength from './components/Strength';

function App() {
  return (
    <div class='bg-gray-900 text-gray-500 flex justify-center items-center h-screen select-none'>
      <div>
        <h3 class='text-xl mb-4 text-center font-bold'>Password Generator</h3>
        <div class='flex justify-between items-center gap-2 p-4 bg-gray-800/90 text-xl'>
          <input value={result()} class='bg-transparent select-text' type='text' placeholder='P4$5w0rd!' disabled />
          <button
            onClick={() => copy(result())}
            disabled={result().length <= 0}
            class='text-green-400/80 hover:text-green-400 transition ease-in-out disabled:text-green-600/50'
          >
            <i class='fa-solid fa-copy'></i>
          </button>
        </div>
        <div class='bg-gray-800/90 text-gray-400 font-bold mt-4 p-5'>
          <div class='flex justify-between items-center mb-2'>
            Character Length
            <div class='text-green-400 text-2xl'>{config().length}</div>
          </div>

          <input
            class='mb-5 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700'
            type='range'
            value={config().length}
            onInput={({ target }) => setConfig({ ...config(), length: parseInt(target.value) })}
            min='0'
            max='30'
          />
          <Checks />
          <Strength></Strength>
          <button
            onClick={() => generateNew()}
            class='bg-green-400/90 hover:bg-green-500 delay-100 transition-all shadow shadow-green-400 text-gray-800 w-full p-3 mt-4'
          >
            <span class='mr-4'>Generate</span>
            <i class='fa-solid fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
