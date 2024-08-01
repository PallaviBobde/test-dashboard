import "./menu.css";
import LogoSvg from '../../assets/TestLogo.svg';

function Menu() {
  return (
    <div className="menu">
      <div>
        <img src={LogoSvg} alt="assets" />
      </div>
      <div>
        <img src={LogoSvg} alt="assets" />
      </div>
      <div></div>
    </div>
  );
}

export default Menu;
