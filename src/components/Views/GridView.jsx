import React from 'react';
import DataRow from '../Views/DataRow';
import CellView from '../Views/CellView';
import CardView from '../Views/CardView';
import Collapsable from '../Views/Collapsable';

const GridView = (props) => {
    console.log(props.data);
    return (
        <React.Fragment>
            <DataRow className="row fields-row">
                        {props.fields.map((field,index)=> {
                            return (
                            <div className={index < 2 ? "col-3" : "col"} key={index}>
                                <CellView tag="h2">{field}</CellView>
                            </div>
                            )
                        })}
            </DataRow>

            {props.data.map((item,index)=> {
                return (
                    
               

                    <Collapsable>
                        <DataRow className={"row data-cells " + (index % 2 === 0 ? "even" : "odd")}>
                            {Object.keys(item.data).map((key,i)=>{
                                return (
                                            <div className={i < 2 ? "col-3" : "col"} key={key}>
                                                <CellView>{item.data[key]}</CellView>
                                                </div>
                                )
                                })}
                        </DataRow>
                        <DataRow>
                            <CellView tag="span">
                                {<CardView synopsis={item.description}></CardView>}
                            </CellView>
                        </DataRow>
                    </Collapsable>
                )
            }
            )}
            </React.Fragment>
    )
}
export default GridView;