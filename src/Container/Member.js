import React from 'react';
import './css/Member.css'

class Member extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form")
    }
    render(){
        return(
            <div className="member-container">
                <h1>Become a Member</h1>
                <h6>Why Donate Us?</h6>
                <h6>TNA is a non-government organization which focus on providing free medical services to the senior citizens and common people. All the members are volunteer and we will be taking caring of others with love and compassion.</h6>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="member-name" placeholder="NAME" />
                    <input type="text" name="member-email" placeholder="EMAIL" />
                    <input id="submit-btn" type="submit" value="NEXT" />
                </form>
            </div>
        )
    }
}

export default Member;