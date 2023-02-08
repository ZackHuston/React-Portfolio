import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'


const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none'
    },
    navItem: {
        marginLeft: '2rem'
    }
}


export function Header({ onNavItemClick }) {
    return (
        <div>
            <h1>Zack</h1>
            <nav>
                <ul style={styles.navBar}>
                    {
                        NAV_ITEMS.map(item => {
                            return (
                                <li
                                    key={item.itemName}
                                    onClick={() => onNavItemClick(item.itemName)}
                                    style={styles.navItem}>
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