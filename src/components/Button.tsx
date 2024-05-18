import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, disabled = false, children }) => {
  return (
    <Link to={to}>
      {!disabled ? (
        <button disabled={disabled} className="rounded-md bg-[#023047] transition duration-500 ease-in-out hover:bg-[#1CACD8] text-midday hover:font-bold hover:text-midnight px-4 py-2 items-center text-center">{children}</button>
      ) : (
        <button disabled={disabled} className="rounded-md bg-[#8F8F94] text-[#DFDFE4] px-4 py-2 items-center text-center">{children}</button>
      )}
      
    </Link>
  );
};

export default Button;


/* <button disabled={disabled} className="rounded-md bg-[#023047] transition duration-500 ease-in-out hover:bg-[#1CACD8] text-[#FA8400] hover:font-bold px-4 py-2 items-center text-center">{children}</button> */
