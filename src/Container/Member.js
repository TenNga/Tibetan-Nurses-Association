import React from 'react';
import './css/Member.css'

class Member extends React.Component {
    state = {
        name: "",
        email: "",
        popup: false
    }

    handleChange = (e) => {
        switch (e.target.name) {
            case "member-name":
                this.setState({name: e.target.value})
                break;
            case "member-email":
                this.setState({email: e.target.value})
                break;
            default:
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const successMsg = document.querySelector('.submit-success')
        successMsg.style.display = "block"
        const body = document.querySelector('body');
        body.style.overflow = "hidden"
    }

    handleClose = () => {
        const successMsg = document.querySelector('.submit-success')
        successMsg.style.display = "none"
        const body = document.querySelector('body');
        body.style.overflow = "scroll"
        this.setState({name: "", email: ""})
    }
    render(){
        console.log("State: ", this.state)
        return(
            <div className="member-container">
                <h1>Become a Member</h1>
                <h6>Why Donate Us?</h6>
                <h6>TNA is a non-government organization which focus on providing free medical services to the senior citizens and common people. All the members are volunteer and we will be taking caring of others with love and compassion.</h6>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="member-name" placeholder="NAME" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="member-email" placeholder="EMAIL" value={this.state.email} onChange={this.handleChange}/>
                    <input id="submit-btn" type="submit" value="NEXT" />
                </form>
                <div className="submit-success">
                    <div className="success-msg">
                        <h1>Next Step</h1>
                        <h2> Check you email and follow instruction on it.</h2>
                        <button onClick={this.handleClose}>close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;