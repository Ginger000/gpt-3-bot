import React from 'react';
import Bubble from './shared/Bubble';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faStar, faCat, faMountain } from '@fortawesome/free-solid-svg-icons';

function TalkItem({conver}) {
  const { speaker, engine, id, content } = conver
    let curEngine;
    switch (engine) {
        case 'text-davinci-002':
            curEngine = 0;
            break;
        case 'text-curie-001':
            curEngine = 1;
            break;
        case 'text-babbage-001':
            curEngine = 2;
            break;
        case 'text-ada-001':
            curEngine = 3;
            break;

        default:
            curEngine = 'text-curie-001';
            break;
    }
    let icons = [faFish, faStar, faCat, faMountain]
    return (
        <div
            key={id}
            className={`${speaker === 'gpt' ? 'self-start' : 'self-end'} flex items-start`}
        >
            <div className="w-6 ml-4 my-2">
               <FontAwesomeIcon icon={icons[curEngine]}></FontAwesomeIcon>
            </div>

            <Bubble>{content}</Bubble>
        </div>
    );
}

export default TalkItem;
