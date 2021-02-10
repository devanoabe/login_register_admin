import React from "react";
import loginImg from "../../CK.png";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">login</button>
            </div>
        </div>
        );
    }
}