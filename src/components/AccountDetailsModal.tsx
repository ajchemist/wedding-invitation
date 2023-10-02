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
                    <div key={idx} className="flex flex-wrap items-center gap-1.5">
                        <div className={'relative w-6 h-6 rounded-md overflow-hidden'}>
                            <Image
                                src={bankIconMap[detail.bankName]}
                                alt={detail.bankName}
                                fill={true}
                                style={{ objectFit: 'contain' }}
                                sizes={``}
                            />
                        </div>
                        <p className={`basis-10/12`}>{detail.bankName}</p>
                        <p className={`font-light shrink-0`}>{detail.bankAccount}</p>
                        <p className={`shrink-0`}>{detail.realName}</p>
                        <button
                            className={`bg-gray-200 p-1 rounded text-xs inline-flex items-center shrink-0`}
                            onClick={() => onCopy(`${detail.bankName} ${detail.bankAccount}`.replace(/-/g, ''))}
                        >
                            <span className={`material-symbols p-0.5`}>content_copy</span>
                            복사
                        </button>
                    </div>
                ))}
                <button onClick={onClose} className="min-w-max tracking-tighter text-right block mt-4 underline">
                    닫기
                </button>
            </div>
        </div>
    );
};

export default Modal;