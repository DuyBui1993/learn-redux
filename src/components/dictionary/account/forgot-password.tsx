'use client';
import React from "react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {TfiEmail} from "react-icons/tfi";
import {MdOutlineError} from "react-icons/md";
import {PasswordRecovery} from "@/components/dictionary/account/password-recovery";
import {OrbitingCirclesDictionary} from "@/components/dictionary/account/orbiting-circles-dictionary ";

export const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const [showPasswordRecoveryForm, setShowPasswordRecoveryForm] = React.useState(false);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Tài khoản hông tồn tại.');
            return;
        }
        setError('');
        setShowPasswordRecoveryForm(true);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 mx-auto min-h-screen">
            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center mx-4 md:mx-24 relative">
                <div className="absolute top-12 left-0" onClick={() => window.history.back()}>
                    <BsArrowLeftCircle fontSize={40}/>
                </div>

                {showPasswordRecoveryForm ? (
                    <PasswordRecovery email={email}/>
                ) : (
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Khôi phục mật khẩu
                        </h2>
                        <p className="mt-2 text-center text-gray-600">
                            Nhập email hoặc số điện thoại đăng ký tài khoản ZIM của bạn.
                        </p>
                        <p className="text-center text-gray-600">
                            ZIM sẽ gửi bạn hướng dẫn để đặt lại mật khẩu.
                        </p>

                        <div className="w-full mt-8">
                            <Tabs defaultValue="email" className="space-y-4">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="email">Email</TabsTrigger>
                                    <TabsTrigger value="phone">Số điện thoại</TabsTrigger>
                                </TabsList>
                                <TabsContent value="email">
                                    <form onSubmit={handleEmailSubmit} className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Nhập email..."
                                            className="w-full py-3 pl-10 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-blue-100"

                                        />
                                        <span className="absolute left-4 top-4 transform text-lg text-gray-300">
                                            <TfiEmail fontSize={15}/>
                                        </span>
                                        <button
                                            type="submit"
                                            className="w-full mt-4 py-3 px-4 border rounded-3xl text-sm text-white font-bold bg-blue-500 hover:bg-blue-600"
                                        >
                                            Khôi phục mật khẩu
                                        </button>
                                    </form>
                                </TabsContent>
                                <TabsContent value="phone">
                                    <p className="text-center">Chức năng này đang trong giai đoạn phát triển.</p>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {error && (
                            <div className="mt-4 p-3 bg-red-500 border text-white rounded relative" role="alert">
                                <div className="flex flex-col">
                                    <span className="absolute left-3 top-3 text-white">
                                        <MdOutlineError fontSize={20}/>
                                    </span>
                                    <div className="ml-6 flex flex-col">
                                        <p className="font-bold">Lỗi!</p>
                                        <span className="block sm:inline">{error}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="col-span-1 md:col-span-3 bg-blue-50 ">
                <OrbitingCirclesDictionary/>
            </div>
        </div>
    );
}