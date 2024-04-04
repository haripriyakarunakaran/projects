import React from 'react';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                STUDENT DASHBOARD
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        
            <li className='sidebar-list-item'>
                <a href="">
                   SUBJECT
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    SEMESTER
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    GRADE
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar
