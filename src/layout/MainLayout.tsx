import { ReactNode } from 'react';
import { MainWrapper, Container, Menu } from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainWrapper>
      <Menu>menu</Menu>
      <Container>{children}</Container>
      <div>footer</div>
    </MainWrapper>
  );
};

export default MainLayout;
