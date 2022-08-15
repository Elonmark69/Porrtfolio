import React from 'react';
// import Image from 'next/Image';
import Link from 'next/link';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import Styles from '../styles/Nav.module.css';
import { useRouter } from 'next/router';
import Data from '../pages/api/data.json';

export default function Nav() {
  const { logo, active, container, navigations, socials } = Styles;
  const router = useRouter();
  return (
    <div className={container}>
      <div className={logo}>
        <p>{Data.Nav.Name}</p>
      </div>
      <div className={navigations}>
        {Data.Nav.Tabs.map((e, i) => (
          <li key={i} className={router?.pathname == e.url ? active : ''}>
            <Link href={e.url}>
              <a>{e.name}</a>
            </Link>
          </li>
        ))}
      </div>
      <div className={socials}>
        {Data.Nav.Socials.map((e, i) => {
          const { Logo, link } = e;
          const componentMapping = {
            BsInstagram,
            BsTwitter,
            BsLinkedin,
          };
          const Component = componentMapping[Logo];
          return (
            <li key={i}>
              <Link href={link}>
                <Component />
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
