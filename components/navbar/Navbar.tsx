'use client'

import Link from "next/link";

export default function Navbar(){

    function switchs(){
        const menu : HTMLBodyElement | null= document.querySelector('.menu');
        console.log(menu);
        menu?.classList.toggle('actives');
    }


    return(

        <nav className="navbar">
            <Link href="/" className="logo">
                Store
            </Link>

            <div className="menu">

                <div className="icon_menu" onClick={()=>switchs()}>

                   
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg> */}
                </div>
                <ul>
                    <li>catagories</li>
                    <li>product page</li>
                    <li>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="tabler-icon tabler-icon-shopping-cart"><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
                    </li>
                </ul>

            </div>
        </nav>
    )
}