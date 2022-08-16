import React from 'react';
import Nav from './Nav';
import Transition from '../components/Transition';

export default function Layout({ children }) {
  return (
    <>
      <Transition>
        <div className="app">{children}</div>
      </Transition>

      <Nav />
    </>
  );
}
