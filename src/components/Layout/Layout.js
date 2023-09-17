import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav } from './StyledLayout';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
