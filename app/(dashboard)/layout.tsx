import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <p>Dashboard</p>
        </div>
    )
}

export default layout