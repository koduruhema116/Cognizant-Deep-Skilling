import React from "react";
import User from "./User";
import Guest from "./Guest";

class TicketBooking extends React.Component{
    constructor(){
        super()
        this.state ={
            isLogged:false
        }
    }
    login = ()=>{
        this.setState({
            isLogged:true
        })
    }
    logout = ()=>{
        this.setState({
            isLogged:false
        })
    }
    render(){
        let page
        if(this.state.isLogged)
            page = <User/>
        else
            page = <Guest/>
        return(
            <div>
                <h1>Ticket Booking App</h1>
                {page}
                <br />
                {this.state.isLogged?(
                    <button onClick={this.logout}>
                        Logout
                    </button>
                ):(<button onClick={this.login}>
                    Login
                </button>)}
            </div>
        )
    }
}

export default TicketBooking;