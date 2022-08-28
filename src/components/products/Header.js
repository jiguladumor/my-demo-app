import React from 'react';

function Header(props) {
    return (
        <header className=' blog '>
            <div className='row'>
                <div>
                    <a href='#/'>
                        <h1>shoping card </h1>
                    </a>
                </div>
                <div>
                    <a href='#/card'> card</a>
                    <a href='#/sigin'>Sign in </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
