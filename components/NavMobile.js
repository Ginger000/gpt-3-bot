import React, { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OptionBox from './OptionBox';

function NavMobile() {
    const [open, setOpen] = useState(false);
    return (
        <div className=" text-white w-full fixed top-0    md:hidden  z-9999 ">
            <div className="flex justify-between">
                <h1 className="text-left text-2xl pt-4 px-6">
                    Talk with your AI friend
                </h1>
                <div
                    onClick={() => setOpen(!open)}
                    className="w-6 text-white font-light text-xl absolute right-8 top-4 cursor-pointer md:hidden "
                >
                    <FontAwesomeIcon
                        icon={open ? faXmark : faBars}
                    ></FontAwesomeIcon>
                </div>
            </div>
            <div className={ `absolute w-full transition-all duration-500 ${open ? 'top-16 ' : 'top-[-490px]'}` } > <OptionBox /> </div>
            
        </div>
    );
}

export default NavMobile;
