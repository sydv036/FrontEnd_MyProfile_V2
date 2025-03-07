import "styles/layouts/header.scss";
import ColorPickerRender from "components/layout/headers/ColorPicker";
import FontFamily from "./headers/FontFamily";

const Header = () => {
  return (
    <header>
      <ColorPickerRender />
      <FontFamily />
    </header>
  );
};
export default Header;
