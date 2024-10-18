"use client";
import {signIn} from "next-auth/react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {PiKeyLight} from "react-icons/pi";
import React from "react";
import {useRouter} from 'next/navigation';
import {OrbitingCirclesDictionary} from "@/components/dictionary/account/orbiting-circles-dictionary ";
import {authSlice} from "@/features/LoginGlobal";
import {useDispatch} from "react-redux";

export const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [identifier, setIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isRobot, setIsRobot] = React.useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!identifier || !password) {
            setError('Tài khoản hoặc mật khẩu không đúng');
            return;
        }
        setError('');

        dispatch(authSlice.actions.login());
        alert(`Bạn đã đăng nhập với tài khoản: ${identifier} thành công!`);

        router.push('/dictionary');
    };

    const handleSignIn = async (provider) => {
        await signIn(provider, {callbackUrl: '/dictionary'});
        dispatch(authSlice.actions.login());
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 mx-auto min-h-screen">
            <div
                className="col-span-1 md:col-span-2 flex flex-col items-center justify-center mx-4 md:mx-24 relative">
                <div className="absolute top-12 left-0" onClick={() => window.history.back()}>
                    <BsArrowLeftCircle fontSize={40}/>
                </div>


                <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-bold text-center mb-8">Đăng nhập</h1>
                    <div className="relative">
                        <label className="block text-sm font-medium">Tài khoản hoặc SĐT</label>
                        <input
                            type="email"
                            id="username"
                            className="mt-1 w-full py-3 pl-10 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-blue-100"
                            placeholder="Nhập..."
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        <span
                            className="absolute left-4 top-1/2 transform text-lg text-gray-600"><AiOutlineUser/></span>
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full border py-3 pl-10 text-2px rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-blue-100"
                            placeholder="Nhập..."
                        />
                        <span
                            className="absolute left-4 top-10 transform text-lg text-gray-600"><PiKeyLight/></span>
                    </div>

                    <div className="text-right">
                        <a href="/dictionary/forgot-password"
                           className="text-sm text-blue-600 hover:underline">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div>
                        <div
                            className="flex items-center justify-start h-20 w-80 border border-gray-300 bg-gray-50 rounded-sm px-3">
                            <input type="checkbox" id="recaptcha" className="mr-2"
                                   onChange={() => setIsRobot(!isRobot)}/>
                            <label className="text-sm text-gray-600">I&#39;m not a robot</label>
                        </div>
                    </div>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 border rounded-3xl text-sm font-medium ${isRobot ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}
                        disabled={!isRobot}
                    >
                        Đăng nhập
                    </button>

                    <div className="mt-6 w-full">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-px">
                                <span className="px-2 bg-white text-gray-500">Hoặc</span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSignIn("google");
                                    }}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl hover:border-blue-400 text-2px font-medium text-blue-600 bg-blue-50"
                                >
                                    <img
                                        className="h-[25px] w-[25px] mr-2"
                                        src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
                                        alt="Google Logo"
                                    />
                                    Google
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSignIn("github");
                                    }}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-blue-400 rounded-3xl text-2px font-medium text-blue-600 bg-blue-50"
                                >
                                    <FaGithub fontSize="25" className="mr-2 text-black"/>
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Bạn chưa có tài khoản?{' '}
                        <a href="/dictionary/register"
                           className="font-medium text-blue-600 hover:underline">
                            Đăng ký
                        </a>
                    </p>
                </form>
            </div>

            <div className="col-span-1 md:col-span-3 bg-blue-50">
                <OrbitingCirclesDictionary/>
            </div>

        </div>
    );
};
