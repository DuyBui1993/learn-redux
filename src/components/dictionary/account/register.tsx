"use client";
import {BsArrowLeftCircle} from "react-icons/bs";
import {SignUpAccount} from "@/components/dictionary/account/sign-up-account";
import {FaGithub} from "react-icons/fa";
import React from "react";
import {signIn} from "next-auth/react";
import {OrbitingCirclesDictionary} from "@/components/dictionary/account/orbiting-circles-dictionary ";

export const Register = () => {
    const [showSignUpForm, setShowSignUpForm] = React.useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center mx-4 md:mx-24 relative">
                <div className="absolute top-12 left-0" onClick={() => {
                    window.history.back();
                }}>
                    <BsArrowLeftCircle fontSize={40}/>
                </div>

                {showSignUpForm ? (
                    <SignUpAccount/>
                ) : (
                    <form className="space-y-4 w-full">
                        <h1 className="text-3xl font-bold text-center mb-8">Đăng ký tài khoản</h1>
                        <div>
                            <button
                                onClick={() => signIn("google")}
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-blue-400 rounded-3xl text-2px font-medium text-blue-600 bg-blue-50"
                                type="button"
                            >
                                <img
                                    className="h-[25px] w-[25px] mr-2"
                                    src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
                                    alt="Google Logo"
                                />
                                Đăng ký qua Google
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => signIn("github")}
                                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 hover:border-blue-400 rounded-3xl text-2px font-medium text-blue-600 bg-blue-50"
                                type="button"
                            >
                                <FaGithub fontSize="25" className="mr-2 text-black"/>
                                Đăng ký qua GitHub
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-px">
                                <span className="px-2 bg-white text-gray-500">Hoặc</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setShowSignUpForm(true);
                            }}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl hover:border-blue-400 text-2px font-medium text-blue-600 bg-blue-50"
                        >
                            Tiếp tục bằng email, số điện thoại
                        </button>
                        <p className="mt-6 text-gray-600 text-center">
                            Tạo tài khoản đồng nghĩa với bạn chấp nhận các:
                            <br/>
                            <a href="/dictionary/terms-of-service" className="underline hover:text-blue-600">Điều
                                khoản dịch vụ</a> và
                            <a href="/dictionary/privacy-policy"
                               className="underline hover:text-blue-600"> Chính sách bảo mật</a> tại ZIM
                        </p>
                        <p className="mt-8 text-center text-gray-600">
                            Bạn đã có tài khoản?{' '}
                            <a href="/dictionary/login" className="font-medium text-blue-600 hover:underline">
                                Đăng nhập
                            </a>
                        </p>
                    </form>
                )}
            </div>

            <div className="col-span-1 md:col-span-3 bg-blue-50">
                <OrbitingCirclesDictionary/>
            </div>
        </div>
    );
};
