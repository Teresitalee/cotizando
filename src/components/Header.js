import React from 'react';

const Header = props => {
    return(
        <header className="card bg-warning text-center mt-4 w-75 ml-auto mr-auto ">
            <h1 className="text-uppercase mt-3 text-white font-weight-light"> 
               {props.titulo}
            </h1>
           
        </header>
    )

}

export default Header;