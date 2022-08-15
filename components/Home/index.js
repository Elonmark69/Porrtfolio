import Styles from '../../styles/Home.module.css';
import Globe from './globescript';

export default function Home() {
  const { container, main } = Styles;
  return (
    <div className={container}>
      <Semicircle />
      <div className={main}>
        <h1>Hello</h1>
        <Globe />
      </div>
      <Semicircle />
    </div>
  );
}
function Semicircle(props) {
  const { nav } = Styles;
  return (
    <div className={nav} {...props}>
      <h1>hi</h1>
    </div>
  );
}
