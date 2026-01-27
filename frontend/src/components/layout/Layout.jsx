import style from './Layout.module.css';

// COMPONENT IMPORTS
import Header from '../header/Header.jsx';
import Aside from '../aside/Aside.jsx';
import Main from '../main/Main.jsx';

export default function Layout() {
    
    return(
        <div className={`${style.layoutContainer}`}>
            <header className={`${style.layoutHeader} flex justify-center items-center text-5xl flex-col`}>
                <Header />
            </header>
            <aside className={`${style.layoutAside} flex justify-center items-center text-5xl h-full`}>
                <Aside />
            </aside>
            <main className={`${style.layoutMain} flex justify-center items-center text-5xl h-full`}>
                <Main />
            </main>
        </div>
    );
}