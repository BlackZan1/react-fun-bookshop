import React from 'react';

export default ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}