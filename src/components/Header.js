import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='menu'>
                    <div id='main-img'>
                        <img alt='#' src='main-logo.png' />
                    </div>
                </div>
            </Link>
        </div>
    )
}