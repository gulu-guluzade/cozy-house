import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}
const Container = ({ children }: IContainerProps) => {
  return <div className='container mx-auto px-2.5'>{children}</div>;
};

export default Container;
