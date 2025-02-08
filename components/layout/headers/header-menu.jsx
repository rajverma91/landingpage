import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="#">Home</Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">About Us </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Services </Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">Portfolio</Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                </li>
                <li><Link href="">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;