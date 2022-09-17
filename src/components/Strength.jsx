import {strength} from '../stores'

function Strength() {
    return <>   
        <div class="flex justify-between bg-gray-900 text-gray-600 mt-3 p-3">
            STRENGTH
            <div class="flex gap-2 text-gray-400">
                <For each={Array(4)}>
                    {(_, index) => <div className={`border-2 border-gray-400 w-2.5 ${strength().score > index() ? 'bg-green-400' : ''}`}></div>}
                </For>
            </div>
        </div>
        <button class="bg-green-400/90 hover:bg-green-500 delay-100 transition-all shadow shadow-green-400 text-gray-800 w-full p-3 mt-4">
            <span class="mr-4">Generate</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </>
}

export default Strength