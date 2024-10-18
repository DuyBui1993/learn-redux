'use client'
import React from "react";
import {useRouter} from 'next/navigation';


export const SignUpAccount: React.FC = () => {
    const [fullName, setFullName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isRobot, setIsRobot] = React.useState(false);
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        if (!fullName) newErrors.fullName = 'Họ tên là bắt buộc.';
        if (!username) newErrors.username = 'Tên đăng nhập là bắt buộc.';
        if (!phone) {
            newErrors.phone = 'Số điện thoại là bắt buộc.';
        } else if (!/^\d+$/.test(phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ.';
        }
        if (!email) {
            newErrors.email = 'Email là bắt buộc.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email không hợp lệ.';
        }
        if (!password) {
            newErrors.password = 'Mật khẩu là bắt buộc.';
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
        }
        if (!confirmPassword) newErrors.confirmPassword = 'Xác nhận mật khẩu là bắt buộc.';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Mật khẩu và xác nhận mật khẩu không khớp.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        alert("Bạn đã đăng ký tài khoản thành công!");
        router.push('/dictionary/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-8">Đăng ký tài khoản</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium">Họ tên</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                            />
                            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Tên đăng nhập</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Số điện thoại</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`mt-1 p-2 border rounded-lg w-full focus:outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:border-gray-400 focus:ring-1 focus:ring-blue-500`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="recaptcha"
                            checked={isRobot}
                            onChange={(e) => setIsRobot(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="recaptcha" className="text-sm text-gray-600">I'm not a robot</label>
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 border rounded-lg text-sm font-medium ${isRobot ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                        disabled={!isRobot}
                    >
                        Đăng ký
                    </button>
                </form>

                <p className="mt-6 text-gray-600 text-center">
                    Tạo tài khoản đồng nghĩa với bạn chấp nhận các:
                    <br/>
                    <a href="/dictionary/terms-of-service" className="underline hover:text-blue-600">Điều khoản dịch
                        vụ</a> và
                    <a href="/dictionary/privacy-policy" className="underline hover:text-blue-600"> Chính sách bảo
                        mật</a> tại ZIM
                </p>
                <p className="mt-8 text-center text-gray-600">
                    Bạn đã có tài khoản?{' '}
                    <a href="/dictionary/login" className="font-medium text-blue-600 hover:underline">Đăng nhập</a>
                </p>
            </div>
        </div>
    );
};