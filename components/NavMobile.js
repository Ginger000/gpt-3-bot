import React, {useState} from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavMobile() {
    return (
        <div className="w-full fixed top-0 left-0   flex justify-between md:hidden ">
            <h1 className="text-left ">Talk with your AI friend</h1>
            <div
                //onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden "
            >
                <FontAwesomeIcon
                    // icon={open ? faXmark : faBars}
                ></FontAwesomeIcon>
            </div>
        </div>
    );
}

export default NavMobile;
