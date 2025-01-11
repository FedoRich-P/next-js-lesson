import {PropsWithChildren} from "react";
import {NextPage} from "next";
import {Header} from "../Header/Header";
import s from './Layout.module.scss'

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <div className={s.container}>
            <Header/>
                {children}
        </div>
    );
};