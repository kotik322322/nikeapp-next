import { FaCheck } from "react-icons/fa";

interface Props {
  content: string
}

const ToastSuccess = ({content}: Props) => {
  return (
    <div className="max-w-[360px] w-full bg-black text-white rounded-md shadow-lg flex items-center justify-start gap-x-4 text-sm">
      <FaCheck/>
      <p >{content}</p>
    </div>
  );
};

export default ToastSuccess;
