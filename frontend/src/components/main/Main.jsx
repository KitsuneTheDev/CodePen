import style from './Main.module.css';
import { useAuth } from '../../contexts/authContext.jsx';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

export default function Main() {

    const context = useAuth()

    useEffect(() => {
        console.log(context);
    }, []);

    return(
        <Outlet />
    );
}