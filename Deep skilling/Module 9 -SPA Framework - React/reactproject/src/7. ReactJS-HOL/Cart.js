import React from "react";

class Cart extends React.Component{
    render(){
        return(
            <div>
                {this.props.item.map(t=>{
                    return (
                        <tr>
                            <td>{t.itemname}</td>
                            <td>{t.price}</td>
                        </tr>
                    )
                })}
            </div>
        );
    }
}

export default Cart;