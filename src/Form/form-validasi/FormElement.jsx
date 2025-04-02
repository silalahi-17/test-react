import React from "react";

export default class FormElement extends React.Component {

    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            nama: ${this.state.nama}
            jurusan: ${this.state.jurusan}
            gender: ${this.state.gender}
            alamat: ${this.state.alamat}
            member: ${this.state.member ? 'YES' : 'NO'}
            `);
            this.setState({
                nama: '',
                jurusan: '',
                gender: '',
                alamat: '',
                member: false
            })
    }

    render() {
        return(
            <div style={{width: '80%', margin: '75px auto', border: '1px solid gray', padding: '15px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Nama: <input type="text" name="" id="" onChange={e => this.setState({nama: e.target.value})} defaultValue={this.props.nama} />
                    </label>
                    <br />
                    <label>
                        Jurusan: <select name="jurusan" id="" onChange={e => this.setState({jurusan: e.target.value})} >
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Teknik Industri">Teknik Industri</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin: 
                        <input type="radio" name="gender" id="" value="Laki-Laki" onChange={e => this.setState({gender: e.target.value})}/>Laki-Laki
                        <input type="radio" name="gender" id="" value="Laki-Laki" onChange={e => this.setState({gender: e.target.value})}/>Perempuan
                    </label>
                    <br />
                    <label htmlFor="">
                        Alamat: <textarea name="alamat" id="" cols="30" rows="10" onChange={e => this.setState({alamat: e.target.value})} defaultValue={this.props.alamat}></textarea>
                    </label>
                    <br />
                    <label htmlFor="">
                        Member: <input type="checkbox" value={true} name="member" id="" onChange={e => this.setState({member: e.target.checked})}/>
                    </label>
                    <br />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
