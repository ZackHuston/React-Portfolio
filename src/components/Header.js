const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
    },
    navItem: {
        marginLeft: '2rem' 
    }
}


export  function Header({onNavItemClick}) {
    return(
        <div> 
            <h1>Zack</h1> 
            <nav>
                <ul style = {styles.navBar}>
                    {
                        NAV_ITEM_NAMES.map(item =>{
                            return(
                                <li 
                                    key={item.itemName} 
                                    onClick={() => onNavItemClick(item.itemName)}
                                    style ={styles.navItem}>
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


export const NAV_ITEM_NAMES = [
    {
        itemName: 'About Me'
    },
    {
        itemName: 'Portfolio'
    },
    {
        itemName: 'Contact'
    },
    {
        itemName: 'Resume'
    }
]