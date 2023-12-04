"use client";


interface Props {
  className?: string;
  onClick?: React.ReactEventHandler;
  children: React.ReactNode
}

const Button = ({buttonProps}: {buttonProps: Props}) => {
  return <button className={buttonProps.className} onClick={buttonProps.onClick} >
    {buttonProps.children}
 </button>;
};

export default Button;
