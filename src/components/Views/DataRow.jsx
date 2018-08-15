import React from 'react';

const DataRow = ({className ,...props}) => {
    return (
 
    <div className={className}>
                {React.Children.map(props.children,(child)=> {
                    return <React.Fragment>{child}</React.Fragment>
                })}
    </div>
    )
}
export default DataRow;