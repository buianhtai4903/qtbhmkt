import axios from "axios";
import { useState } from "react";
import API from "../../configs/api";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const res = await axios.post(`${API}/user/register`, {
            full_name: full_name,
            email: email,
            password: password
        });
        console.log(res.data.result);

        if (res.data.result.EC === 0) {
            alert(res.data.result.message);
            navigate('/login');
        }
        else {
            alert(res.data.result.message);
        }


    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-96 ">
                    <div className="h-14 rounded-lg  flex items-center justify-center">
                        Register
                    </div>
                    <hr></hr>
                    <label>Họ tên</label>
                    <input required value={full_name} onChange={(e) => { setFullName(e.target.value) }} className="outline-none border h-10 p-5 rounded-xl mt-1" type="text" placeholder="Bùi Anh X" />
                    <label className="pt-5">Tài khoản</label>
                    <input required value={email} onChange={(e) => { setEmail(e.target.value) }} className="outline-none border h-10 p-5 rounded-xl mt-1" type="text" placeholder="Nhập mail" />
                    <label className="pt-5">Mật khẩu</label>
                    <input required value={password} onChange={(e) => { setPassword(e.target.value) }} className="outline-none border h-10 p-5 rounded-xl mt-1" type="password" placeholder="Nhập mật khẩu" />
                    <button onClick={handleRegister} className="bg-gray-500 h-14 mt-10 rounded-lg hover:bg-gray-700 hover:text-white">Đăng kí</button>
                </div>
            </div>
        </div >
    )
}
export default Register;