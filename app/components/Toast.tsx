/** @format */

// import {
//   CloseCircle,
//   CloseSquare,
//   TickCircle,
//   TickSquare,
// } from "iconsax-react";

import {
  toast,
  type ToastOptions,
  Slide,
  type TypeOptions,
} from "react-toastify";

interface ToastProps {
  message: string;
  type: TypeOptions;
}

// eslint-disable-next-line no-shadow
export enum ToastType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
  default = "default",
}

const ToastUI: React.FC<ToastProps> = ({ message, type }: ToastProps) => {
  const color: any = {
    [ToastType.success]: "text-secondary",
    [ToastType.error]: "text-red-400",
  };

  const headlineText = {
    [ToastType.info]: "",
    [ToastType.success]: "Success",
    [ToastType.warning]: "Warning",
    [ToastType.error]: "Error",
    [ToastType.default]: "",
  };

  return (
    <div
      className={`bg-white flex w-full items-center rounded-[10px] px-4 py-2 text-primary shadow-sm md:w-[400px] border ${
        type === "success" ? "border-secondary" : "border-red-400"
      }`}
    >
      <div className="flex items-center gap-[10px] pr-[15px]">
        {/* {stateIcon[type]} */}

        <div>
          <h6 className={`font-bold text-sm ${color[type]}`}>
            {headlineText[type]}
          </h6>
          <p className="text-sm text-grey-500 mt-1">{message}</p>
        </div>
      </div>

      <button aria-label="close-toaster" className="ml-auto">
        <img src="/close.svg" className="w-4" alt="" />
      </button>
    </div>
  );
};

const toastOptions: ToastOptions = {
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  transition: Slide,
  rtl: false,
  closeButton: false,
};

// custom toast component to show alerts of operations to users
const customToast = (message: string, type: TypeOptions) => {
  toast(<ToastUI message={message} type={type} />, toastOptions);
};

export default customToast;
