import React from "react";


export default class Conditional extends React.Component {

    state = {
        isLoading: true
    }

    render() {

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);

        // const isLogin = true;

        //menggunakan if--else
        
        // let messege = '';
        // if(isLogin) {
        //     messege = 'Anda Sudah Login'
        // }else {
        //     messege = 'Anda Belum Login, Silahkan Login Terlebih Dahulu'
        // }

        //menggunakan conditional rendering
        return(
            <div>
                {this.state.isLoading
                ? <h1>Loading...</h1> 
                : <h1>Selamat Datang di Kelas MERN</h1>
                }
            </div>
        )
    }
}