import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <section className="flex flex-col w-full md:w-[800px] justify-between items-center p-4 m-8 rounded-md shadow-lg bg-[#DFDFE4]"> {children} </section>
  );
}

export default Card;
