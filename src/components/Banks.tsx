"use client";

import { useState } from "react";
import { noto_serif_kr, yuji_boku } from "@/components/fonts";
import AccountDetailsModal, { AccountDetail } from "@/components/AccountDetailsModal";
import Toast from "@/components/Toast";

export const Banks: React.FC<{ banks: AccountDetail[] }> = ({ banks }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [accountDetails, setAccountDetails] = useState<AccountDetail[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleOpen = (details: AccountDetail[]) => {
        setAccountDetails(details);
        setIsOpen(true);
    };

    const handleCopy = (str: string) => {
        navigator.clipboard.writeText(str);
        setToastMessage(`복사 성공: ${str}`);
        setTimeout(() => setToastMessage(null), 2000);  // 2초 후에 Toast 메시지 숨기기
    };

    return (
        <>
            <h1 className={`${noto_serif_kr.className} text-2xl mt-2 m-auto text-center`}>마음 전하실 곳</h1>
            <h2 className={`${noto_serif_kr.className} text-base mt-2 m-auto text-center`}>(계좌번호)</h2>
            <div className={`${noto_serif_kr.className} py-8 grid grid-cols-3 gap-4 max-w-screen-sm m-auto`}>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[0]])}>신랑(부)</button>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[1]])}>신랑(모)</button>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[2]])}>신랑</button>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[3]])}>신부(부)</button>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[4]])}>신부(모)</button>
                <button className={`show-account-detail`} onClick={() => handleOpen([banks[5]])}>신부</button>
            </div>
            <AccountDetailsModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onCopy={handleCopy}
                accountDetails={accountDetails}
            />
            <Toast message={toastMessage || ''} isVisible={!!toastMessage} />
        </>
    )
}

export default Banks;