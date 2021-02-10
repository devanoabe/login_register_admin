import React from "react";
import loginImg from "../../CK.png";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">NAMA</label>
                        <input type="text" name="nama" placeholder="nama"/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" placeholder="email"/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="no.hp">NO.HP</label>
                        <input type="text" name="no.hp" placeholder="no.hp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alamat">ALAMAT</label>
                        <input type="text" name="alamat" placeholder="alamat"/>
                    </div>
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
                <button type="button" className="btn">register</button>
            </div>
        </div>
        );
    }
}