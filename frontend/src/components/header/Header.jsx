import style from './Header.module.css';

export default function Header() {
    return(
        <div className={style.headerContainer}>
            <div className={style.headerLeft}>
                <div className={style.leftLogo}></div>
                <div className={style.leftTitle}>
                    <h1>Pecopn</h1>
                </div>
            </div>
            <div className={style.headerRight}>
            </div>
        </div>
    );
}