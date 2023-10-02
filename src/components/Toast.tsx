interface ToastProps {
    message: string;
    isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed z-20 min-w-max bottom-10 left-1/2 transform -translate-x-1/2 mb-8 bg-black text-white p-3 rounded-lg shadow-lg text-sm">
            {message}
        </div>
    );
};

export default Toast;