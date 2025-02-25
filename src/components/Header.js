import { Link } from "react-router-dom";

export default function () {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='menu'>
                    <div id='main-img'>
                        <img src='main-logo.png' />
                    </div>
                </div>
            </Link>
        </div>
    )
}