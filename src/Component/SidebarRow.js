import React from 'react'
import '../Styling/SidebarRow.css';
function SidebarRow({selected,title,Icon}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {Icon && <Icon className="sidebarRow-icon" />}
            
            <h2 className="sidebarRow-title">{title}</h2>

        </div>
    )
}

export default SidebarRow
