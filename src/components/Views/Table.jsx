import React, { Component } from 'react';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = ({
            data: this.props.data,
            expanded: []
        })

        this.handleClick = this.handleClick.bind(this);
        this.isExpanded = this.isExpanded.bind(this);
    }

    handleClick(e){

        let rowNum = e.currentTarget.getAttribute("data-row");
        let expandedRows = [...this.state.expanded];
        let rowFound = expandedRows.findIndex((index)=>{
            return rowNum === index;
        })
        if(!this.isExpanded(rowNum)){
            //Add the row into the expanded list so on re-render the content will display.
            expandedRows.push(rowNum);
        }
        else{
            expandedRows.splice(rowFound,1);
        }
        this.setState({
            expanded: [...expandedRows]
        })
    }

    isExpanded(row){
        let isOpen = this.state.expanded.find((index)=>{
            return index == row
        })
        return isOpen > -1;
    }

    render(){
       return  (
            <RenderTable 
                data={this.state.data} 
                onClick={this.handleClick} 
                children={this.props.children}  
                collapsable={this.props.collapsable}
                isExpanded={this.isExpanded}
                className={this.props.className}/>
       )
    }

}
export default Table;

const ColumnHeader = (props) => {
    return <th className={props.className}>{props.children}</th>
}
export {ColumnHeader};

const ExpandableContent = (props) => {
    return(
        <tr onClick={props.onClick} >
            <td colSpan={props.colSpan}>
                <span className={props.className}>
                    {props.collapsable}
                </span>
            </td>
        </tr>
    )
}

const RenderTable = (props)=>{
    return  (
        <table className={props.className}>
            <tbody>
                <tr>{props.children}</tr>
                {props.data.map((data,index)=>{

                    return (
                        
                        <React.Fragment>
                        <tr data-row={index+1} onClick={props.onClick}>
                            {props.children.map((child,index) =>{
                                return(
                                    <td>
                                        {data[child.props["colkey"]]}
                                    </td>
                                )
                            })}
                        </tr>
                        
                        {props.isExpanded(index+1) ? <ExpandableContent hidden onClick={this.handleClick} colSpan={props.children.length} collapsable={props.collapsable(data)}                     
                         /> : null}
                        </React.Fragment>
                    )
                })}
            </tbody>
        </table>
       )
}
