import axios from "axios";
import { useState } from "react";
import API from "../../configs/api";
import { useNavigate } from 'react-router-dom';
import { handleLoginService } from "../../services/userServices";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleLogin = async () => {

        const res = await handleLoginService(email, password)

        if (res.result.EC === 0) {
            alert(res.result.message);
            navigate('/')
        }
        else {
            alert(res.result.message);
        }
    }


    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-96 ">
                    <label>Tài khoản</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="outline-none border h-10 p-5 rounded-xl mt-1" type="text" placeholder="Nhap tai khoan" />
                    <label className="pt-5">Mật khẩu</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="outline-none border h-10 p-5 rounded-xl mt-1" type="text" placeholder="Nhập mật khẩu" />
                    <button onClick={handleLogin} className="bg-gray-500 h-14 mt-10 rounded-lg hover:bg-gray-700 hover:text-white">Login</button>
                </div>
            </div>
        </div >
    )
}
export default Login;