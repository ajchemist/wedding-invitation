import { Hero, BankName } from "types/app";
import Image from "next/image";

export interface AccountDetail extends Hero {
    realName: string;
    bankName: BankName;
    bankAccount: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCopy: (str: string) => void;
    accountDetails: AccountDetail[];
}

const bankIconMap: Record<BankName, string> = {
    '광주은행': '/gwangjubank.webp',
    '토스뱅크': '/tossbank.webp',
    '농협': '/nhbank.webp',
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onCopy, accountDetails }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-lg font-semibold mb-4">계좌 정보</h2>
                {accountDetails.map((detail, idx) => (
                    <div key={idx} className={`w-full`}>
                        <h3 className={`w-full`}>
                            <span className={'inline-block align-text-bottom relative w-6 h-6 rounded-md overflow-hidden'}>
                                <Image
                                    src={bankIconMap[detail.bankName]}
                                    alt={detail.bankName}
                                    fill={true}
                                    style={{ objectFit: 'contain' }}
                                    sizes={``}
                                />
                            </span>
                            <span className={`ml-1.5`}>{detail.bankName}</span>
                        </h3>
                        <p className={`w-full mt-0.5 space-x-1.5`}>
                            <span className={`font-light`}>{detail.bankAccount}</span>
                            <span className={``}>{detail.realName}</span>
                            <button
                                className={`bg-gray-200 py-1 px-1.5 rounded text-xs inline-block align-bottom min-w-[3.5rem]`}
                                onClick={() => onCopy(`${detail.bankName} ${detail.bankAccount}`.replace(/-/g, ''))}
                            >
                                <span className={`material-symbols mr-1 inline-block align-text-bottom`}>content_copy</span>
                                복사
                            </button>

                        </p>
                    </div>
                ))}
                <button onClick={onClose} className="min-w-max tracking-tighter text-right block mt-4 underline whitespace-nowrap">
                    닫기
                </button>
            </div>
        </div>
    );
};

export default Modal;