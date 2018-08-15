import React from 'react';

const CellView = ({className,...props}) => {
    const Tag = props.tag ? props.tag : "p";
    return <Tag className={className}>{props.children}</Tag>
}

export default CellView;