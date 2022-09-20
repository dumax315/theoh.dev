import { useState } from "react"


const NavBar = (props) => {
  // let headerInnerPos = 5;
  const [isNavBoxOpen, setIsNavBoxOpen] = useState(false);
  function closeNavMenu() {
    console.log('close');
    setIsNavBoxOpen(false);
  }
  function openNavBar() {
    console.log('open');
    setIsNavBoxOpen(true);
  }
  function toggleDark() {
    props.darkModeState(!props.isDark);
  }

  
  return (
    <header className="h-40 flex items-center justify-evenly max-w-3xl mx-auto">
      <div id="profilePhoto" >
        <img
          sizes="4rem" src="pfp.jpg" decoding="async" data-nimg="future" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-24 w-24"/>
      </div>

      <div id="navigation">
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">


            <li>
              <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/computer-club" >
                computer club
              </a>
            </li>
            <li>
              <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact" >
                contact
              </a>
            </li>

          </ul>
        </nav>
        
      </div>

      <div id="darkModeButton" className="min-w-24 text-center flex items-center">
        <div
          className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100 ${isNavBoxOpen ? "" : "hidden"}`}
          id="headlessui-popover-panel-:Rqb6H1:"
          tabIndex={-1}
          data-headlessui-state="open"
        > 
          
          <div className="flex flex-row-reverse items-center justify-between">
            <button
              aria-label="Close menu"
              className="-m-1 p-1"
              type="button"
              data-headlessui-state="open"
              tabIndex={0}
              onClick={closeNavMenu}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
              >
                <path
                  d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              navigation
            </h2>
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">

              <li>
                <a className="block py-2" data-headlessui-state="open" href="/computer-club">
                  computer club
                </a>
              </li>
              <li>
                <a className="block py-2" data-headlessui-state="open" href="/contact">
                  contact
                </a>
              </li>
              
            </ul>
          </nav>
        </div>



        
        <div className="flex flex-1 justify-end md:justify-center mr-2">
          <div className="pointer-events-auto md:hidden" data-headlessui-state="">
            <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" id="headlessui-popover-button-:Rqb6:" type="button" aria-expanded="false" onClick={openNavBar}>
               Menu
               <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                  <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               </svg>
            </button>
          </div>
        </div>


        
        
        <button type="button" aria-label="Toggle dark mode" className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20" onClick={toggleDark}>
          <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
              fill="none"
            />
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
          >
            <path
              d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        
      </div>
    
    </header>


  )
};

export default NavBar
