import React from 'react';

const company = ['a','b','c','d'];

export const Company = () => {
    return (
        <div>
            <h5>Company</h5>
            <div>
                {company.map(x => <h6>{`Company ${x}`}</h6>)}
            </div>
        </div>
    )
}