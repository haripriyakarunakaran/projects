import React from 'react';

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon' onClick={OpenSidebar}>
        </div>
        <div className='header-left'>
            PROFILE
        </div>
    </header>
  )
}
export default Header