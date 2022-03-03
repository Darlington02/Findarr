import React from 'react'
import {Search} from './Search'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm-justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white py-1 pb-3 px-2">
                        Findarr <FontAwesomeIcon icon={faSearch} />
                    </p>
                </Link>

                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-gray-900 dark:text-white py-1 px-6 mb-3 text-2xl">
                    {darkTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                </button>
            </div>

            <Search />
        </div>
    )
}
