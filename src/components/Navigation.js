import { useState } from 'react';
import {Header, NAV_ITEM_NAMES } from './Header';
import {Footer} from './Footer';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function Navigation() {

    const [currentPage, setCurrentPage] = useState('About Me');

    const onNavItemClick = (itemName) => {
        setCurrentPage(itemName);
    }

    const renderCurrentPage = () => {
        if (currentPage === 'About Me'){
            return <AboutMe />
        } else if (currentPage === 'Portfolio'){
            return <Portfolio />
        } else if (currentPage === 'Contact'){
            return <Contact />
        } else if (currentPage === "Resume"){
            return <Resume />
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

