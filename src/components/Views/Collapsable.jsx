import React, {Component} from 'react';

class Collapsable extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
        this.renderTrigger = this.renderTrigger.bind(this);
        

        if(props.visible){
            this.state = {
                isVisible: true,
                className: "fade-down"
            }
        }
        else{
            this.state = {
                isVisible: false,
                className: "hidden"
            }
        }



    }

    handleClick(){
        let className = !this.state.isVisible ? "slide-down" : "slide-up";
        
        this.setState({
            isVisible: !this.state.isVisible,
            className: className
        })
    }

    renderTrigger(){
        let trigger = React.Children.map(this.props.children,(child, i)=>{
                if(i < 1){
                    return child;
                }
        })
        return trigger;
    }

    renderChildren(){
            let children = React.Children.map(this.props.children,(child,i)=>{
                if(i < 1){
                    return
                }
           
                return child;
            })
            return children;
    }

    render() {

        return(
            <div onClick={this.handleClick}>
                {this.renderTrigger()}

                <div className={this.state.className}>
                    {this.renderChildren()}
                </div>
            </div>
        )
    }












}
export default Collapsable;