const Popup = () => {
  return (
    <div className="mx-auto min-w-[22rem] max-w-[450px]">
      <div className="h-full bg-gray-50">
        <div className="rounded-b-xl bg-indigo-600 p-5 pb-44 text-white">
          <div className="mb-4 flex items-center justify-between">
            <button title="tHe nOtHinG bUttON" className="rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>
              </svg>
            </button>
            <h1 className="ext-center text-3xl font-semibold">Greenhorn</h1>
            <button onClick={() => { navigator.share({ url: 'https://github.com/tsarprince' }) }} className="rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            </button>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-slate-200">
              <div className="text-xl font-bold tracking-wider">Wordle for newbies</div>
            </div>
            <div className="text-slate-200">built with ❤️ by @tsarprince</div>
          </div>
        </div>

        <div className="-mt-40 p-5">
          <div className="rounded-xl bg-white p-4 font-medium text-slate-500 shadow-sm">
            <div className="mb-3 text-sm">Funds raised</div>
            <div className="mb-3">
              {/* <!-- <input type="range" className="w-full bg-red-500" value="50" /> --> */}
              <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">Smol</div>
              <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">Cosmic</div>
              <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">Boundless</div>
            </div>
            <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 py-4 px-5 font-medium tracking-wide text-white text-opacity-90 shadow-slate-100 hover:shadow-lg">
              <a href="https://www.paypal.com/paypalme/tsarprince/5" target="_blank" className="mr-2">DONATE</a>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </button>
          </div>
        </div>

        <section className="p-5">
          <div className="space-y-2">
            <div className="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
              <img className="aspect-square w-16 rounded-lg bg-center object-cover" src="https://iconscout.com/iconscout_logo-1024x1024.png" alt="" />
              <div>
                <h4 className="font-semibold text-gray-600">Did you know?</h4>
                <p className="text-sm text-slate-400">If you can't handle the English language, maybe you should go back to preschool, or you can secretly use this tool to play <a className="text-blue-500 underline" target="_blank" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>. (This won't help you in anything tho.)</p>
              </div>
              <div>
                <button title="Why would you do that? Huh" type="button" className="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100">&times;</button>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky bottom-0 w-full rounded-t-xl bg-white px-5 py-2 shadow-sm shadow-gray-300">
          <nav className="flex justify-around text-gray-900 space-x-3 py-4">
            <a target="_blank" title="boring" href="https://twitter.com/tsarprince">
              <svg className="w-6 h-6" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </a>
            <a target="_blank" title="boring" href="https://github.com/tsarprince">
              <svg className="w-6 h-6" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </a>
            <a target="_blank" title="boring" href="https://www.linkedin.com/in/tsarprince/">
              <svg className="w-6 h-6" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
            </a>
            <a target="_blank" title="Love is like money, it's always better when you share it!" href="https://www.paypal.com/paypalme/tsarprince/5">
              <svg className="w-6 h-6" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" /></svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Popup