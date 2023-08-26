import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Sidebar = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? '#251D58' : '',
                fontWeight: match ? '600' : '400',
                backgroundColor: match ? '#F6F6F6' : '',
                borderLeft: match ? '3px solid #251D58' : '',
                borderRadius: '0px',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Sidebar;