import { login } from "../api/userAPI";

export const handleLoginService = async (email, password) => {
    try {
        const res = await login(email, password);
        return res.data;
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        return {
            EC: -1,
            message: 'Không thể login',
        };
    }
};
