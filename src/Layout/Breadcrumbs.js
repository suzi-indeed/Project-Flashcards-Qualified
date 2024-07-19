
import React from 'react';

function DisplayBreadcrumbs({children}) {
    return <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">
                <i class="oi oi-home"></i> Home
            </a></li>
            <li class="breadcrumb-item active" aria-current="page">
                {children}
            </li>
        </ol>
    </nav>
}

export default DisplayBreadcrumbs;