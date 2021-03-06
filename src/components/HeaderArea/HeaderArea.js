import React from 'react';
import {FaYoutube} from 'react-icons/fa';
import {MdSearch,MdVideoCall,MdViewComfy} from 'react-icons/md';
import {AiTwotoneBell} from 'react-icons/ai';
import './HeaderArea.css';

export default function HeaderArea() {
    return (
        <body>
            <div className='HeaderArea'>
                <div className='Header'>
                    <header className='header'>
                        <button className='button'>
                            &#9776;
                        </button>
                        <FaYoutube color='red' fontSize='3rem'/>
                        <div>YouTube</div>
                    </header>
                    <div className='Search'>
                        <input type='text' placeholder='Search'/>
                        <div className='search'>
                            <MdSearch fontSize='3rem'/>
                        </div>                        
                    </div>
                    <div className='Icon'>
                        <div className='icon'><MdVideoCall fontSize='1.8rem'/></div>
                        <div className='icon'><MdViewComfy fontSize='2.8rem'/></div>
                        <div className='icon'><AiTwotoneBell fontSize='2.8rem'/></div>
                        <div className='icon'><MdVideoCall fontSize='2.8rem'/></div>
                    </div>
                </div>
            </div>
        </body>        
    )
}
