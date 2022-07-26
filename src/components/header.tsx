import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="navigation">
                <button className="btn btn-light">Home</button>
            </div>
            <div className="login">
                <button className="btn btn-success" style={{backgroundColor:"#29A745"}}>Login</button>
            </div>
        </nav>
    );
};

export default Header;