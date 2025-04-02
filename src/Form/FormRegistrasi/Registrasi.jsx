import React from "react";
import Validator from "validatorjs";

const containerStyle = {
    border: "2px solid gray",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    textAlign: "left",
    width: "50%",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
};

const labelStyle = {
    fontWeight: "bold"
};

const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box"
};

const radioContainerStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center"
};

const buttonStyle = {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
};

// Komponen untuk menampilkan input dengan label
const Input = ({ label, type, name, value, style, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <br />
            <input
                type={type}
                name={name}
                value={value}
                style={style}
                onChange={e => onChange(e.target.value)}
            />
            <br />
        </div>
    );
};


//error style
const errorContainerStyle = {
    backgroundColor: "#ffe6e6",
    color: "#d9534f",
    borderLeft: "5px solid #d9534f",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px"
};

const errorListStyle = {
    listStyleType: "none",
    paddingLeft: "10px",
    margin: 0
};

const errorItemStyle = {
    fontWeight: "bold",
    marginBottom: "5px"
};

// Komponen untuk menampilkan error validasi
const ShowErrors = ({ errors }) => {
    return (
        <div style={errorContainerStyle}>
            <ul style={errorListStyle}>
                {errors.map((error, index) => (
                    <li key={index} style={errorItemStyle}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export default class Registrasi extends React.Component {
    state = {
        nama: "",
        email: "",
        birth: "",
        telp: "",
        gender: "",
        errors: []
    };

    // Fungsi handleSubmit untuk validasi dan pengiriman data
    handleSubmit = event => {
        event.preventDefault();
        const { nama, email, telp, birth, gender } = this.state;

        let data = { nama, email, telp, birth, gender };

        let rules = {
            nama: "required|string",
            email: "required|email",
            birth: "required|date",
            telp: "required|digits_between:10,13",
            gender: "required"
        };

        let validation = new Validator(data, rules);

        // validation.passes(); // true
        //   this.setState({
        //     errors: [
        //         ...validation.errors.get('nama'),
        //         ...validation.errors.get('email'),
        //         ...validation.errors.get('birth'),
        //         ...validation.errors.get('telp'),
        //         ...validation.errors.get('gender')
        //     ]
        //   })
        if (validation.fails()) {
            this.setState({
                errors: Object.values(validation.errors.all()).flat()
            });
        } else {
            alert("Pendaftaran Berhasil!");
            alert(`
                nama: ${this.state.nama}
                email: ${this.state.email}
                birth: ${this.state.birth}
                telp: ${this.state.telp}
                gender: ${this.state.gender}
                `);
                this.setState({
                nama: "",
                email: "",
                birth: "",
                telp: "",
                gender: "",
                errors: []
            });
        }
        
    };

    render() {
        return (
            <div style={containerStyle}>
                {this.state.errors && <ShowErrors errors={this.state.errors} />}

                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <h2 style={{ textAlign: "center", color: "#333" }}>Form Pendaftaran</h2>

                    <label htmlFor="nama" style={labelStyle}>Nama:</label>
                    <Input
                        type="text"
                        id="nama"
                        name="nama"
                        style={inputStyle}
                        value={this.state.nama}
                        onChange={value => this.setState({ nama: value })}
                    />

                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        value={this.state.email}
                        onChange={value => this.setState({ email: value })}
                    />

                    <label htmlFor="telp" style={labelStyle}>Nomor Telepon:</label>
                    <Input
                        type="number"
                        name="telp"
                        style={inputStyle}
                        value={this.state.telp}
                        onChange={value => this.setState({ telp: value })}
                    />

                    <label style={labelStyle}>Tanggal Lahir:</label>
                    <Input
                        type="date"
                        name="birth"
                        style={inputStyle}
                        value={this.state.birth}
                        onChange={value => this.setState({ birth: value })}
                    />

                    <label htmlFor="gender" style={labelStyle}>Jenis Kelamin:</label>
                    <div style={radioContainerStyle}>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Laki-Laki"
                                checked={this.state.gender === "Laki-Laki"}
                                onChange={e => this.setState({ gender: e.target.value })}
                            />
                            Laki-Laki
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Perempuan"
                                checked={this.state.gender === "Perempuan"}
                                onChange={e => this.setState({ gender: e.target.value })}
                            />
                            Perempuan
                        </label>
                    </div>

                    <button type="submit" style={buttonStyle}>Daftar</button>
                </form>
            </div>
        );
    }
}
