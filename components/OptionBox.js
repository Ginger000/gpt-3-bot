import React, { useState, useContext } from 'react';
import ChatContext from '../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFish,
    faStar,
    faCat,
    faMountain,
} from '@fortawesome/free-solid-svg-icons';

function OptionBox() {
    const { engine, setEngine } = useContext(ChatContext);
    const handleChange = (e) => {
        setEngine(e.target.value);
    };

    let engines = [
        { name: 'text-davinci-002', id: 'radio1' },
        { name: 'text-curie-001', id: 'radio2' },
        { name: 'text-babbage-001', id: 'radio3' },
        { name: 'text-ada-001', id: 'radio4' },
    ];

    let icons = [faFish, faStar, faCat, faMountain];

    return (
        <div className="bg-gray-500/50 md:bg-zinc-50/50 p-6 z-9999">
            <form className="text-white">
                <h5 className="text-xl font-semibold mb-4">Engine Options</h5>
                {engines.map((eng) => (
                    <div key={eng.id} className="my-2">
                        <input
                            className="hidden"
                            type="radio"
                            id={eng.id}
                            value={eng.name}
                            checked={engine === eng.name}
                            onChange={handleChange}
                        />
                        <label
                            className={
                                `${engine === eng.name
                                    ? ' text-md drop-shadow-md font-medium hover:cursor-pointer '
                                    : 'text-md'}
                                flex
                                ` 
                                    
                            }
                            htmlFor={eng.id}
                        >
                            <div className="w-4 mr-2 my-2">
                                <FontAwesomeIcon
                                    icon={icons[eng.id[eng.id.length-1]-1]}
                                ></FontAwesomeIcon>
                            </div>
                            {eng.name}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default OptionBox;
