import style from './Layout.module.css';

// COMPONENT IMPORTS
import Header from '../header/Header.jsx';
import Aside from '../aside/Aside.jsx';
import Main from '../main/Main.jsx';

export default function Layout() {
    
    return(
        <div className={`${style.layoutMain} bg-[#490062] text-[#006f5b]`}>
            <header className={`${style.headerMain} flex justify-center items-center text-5xl flex-col bg-[#812ea0]`}>
                <Header />
            </header>
            <aside className={`${style.asideMain} flex justify-center items-center text-5xl h-full`}>
                <Aside />
            </aside>
            <main className={`${style.contentMain} flex justify-center items-center text-5xl h-full`}>
                <Main />
            </main>
        </div>
    );
}