import React from "react";

export const PasswordRecovery=({ email })=>{
    return(
        <div className="text-center">
            <h2 className="mt-8  text-3xl font-bold text-gray-900">
                Khôi phục mật khẩu
            </h2>
            <p className="mt-2 text-gray-600">
                Chúng tôi đã gửi một yêu cầu thay đổi mật khẩu vào Email:<strong>{email}</strong>. Vui lòng kiểm tra mail để tiến hành khôi phục mật khẩu.

            </p>
            <p className="mt-8 text-center text-gray-600">
                <a href="/dictionary/login" className="font-medium text-blue-400 hover:text-blue-600">
                    Quay về trang chủ
                </a>
            </p>
        </div>
    );
}