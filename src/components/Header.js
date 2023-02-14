import React from 'react';
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'

import  './styles/Header.css'

const styles = {
    navItem: {
        marginLeft: '2rem'
    }
}


export function Header({ onNavItemClick }) {
    return (
        <div className='headerContainer'>
            <h1 className='name'>Kincaid</h1>
            <nav className='nav-items'>
                <ul style={styles.navBar}>
                    {
                        NAV_ITEMS.map(item => {
                            return (
                                <li
                                    key={item.itemName}
                                    onClick={() => onNavItemClick(item.itemName)}>
                                    {item.itemName}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}


export const NAV_ITEMS = [
    {
        itemName: 'About Me',
        component: <AboutMe />
    },
    {
        itemName: 'Portfolio',
        component: <Portfolio />
    },
    {
        itemName: 'Contact',
        component: <Contact />
    },
    {
        itemName: 'Resume',
        component: <Resume />
    }
]