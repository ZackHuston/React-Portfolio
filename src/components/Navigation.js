import { useState } from 'react';
import React from 'react';
import {Header, NAV_ITEMS } from './Header';
import {Footer} from './Footer';


export default function Navigation() {

    const [currentPage, setCurrentPage] = useState('About Me');

    const onNavItemClick = (itemName) => {
        setCurrentPage(itemName);
    }

    const renderCurrentPage = () => {
        for (const navItem of NAV_ITEMS) {
            if (currentPage === navItem.itemName) {
                return navItem.component;
            }
        }

    }

    return (
        <div>
            <Header onNavItemClick={onNavItemClick}/>
            <section>{renderCurrentPage()}</section>
            <Footer />
        </div>
    )
}

