import React from "react";
import * as Validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label>{label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
            errors.map((error, index) => <li key={index}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {

    state = {
        email: "",
        password: "",
        errors: []
    }

    handleSubmit = event => {

        event.preventDefault();
        const  {email, password} = this.state;

        let data = { email, password };
          
          let rules = {
              email: 'required|email',
              password: 'min:8|required'
          };
          
          let validation = new Validator(data, rules);


        
          
          validation.passes(); // true
          this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
          })

        // let  messege = [];
        // if (email.length === 0) {
        //     messege = [...messege, 'Email tidak boleh kosong'];
        // }

        // if (password.length === 0) {
        //     messege = [...messege, 'Password tidak boleh kosong'];
        // }

        // const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // if(!re.test(String(email).toLowerCase())) {
        //     messege = [...messege, "Email tidak valid"];
        // }

        // if(password.length < 8) {
        //     messege = [...messege, 'Password harus lebih dari 8 karakter'];
        // }

        // if(messege.length > 0) {
        //     this.setState({errors: messege}, () => console.log(this.state.errors));
        // }else {
        //     alert(`
        //             email: ${this.state.email}
        //             password: ${this.state.password}
        //         `);
        //         this.setState({errors: []});
        // }

    }

    render() {
        const style = {
            width: "400px",
            margin: "100px auto 0",
            border: "1px solid black",
            padding: "20px"
        }

        return(
            <div style={style} >
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="email" label="Email" onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}