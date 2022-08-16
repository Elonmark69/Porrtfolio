import Styles from '../../styles/Home.module.css';
// import Globe from './globescript';
import Slider from '../slider';

export default function Home() {
  const { container, main } = Styles;
  return (
    <div className={container}>
      <Slider />
      <div className={main}>
        <h1>Hello</h1>
        {/* <Globe /> */}
      </div>
      <Slider />
    </div>
  );
}

