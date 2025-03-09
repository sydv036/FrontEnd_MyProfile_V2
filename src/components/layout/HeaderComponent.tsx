import "styles/layouts/header.scss";
import ColorPickerRender from "components/layout/headers/ColorPicker";
import FontFamily from "components/layout/headers/FontFamily";

const Header = () => {
  return (
    <header>
      <ColorPickerRender />
      <FontFamily />
    </header>
  );
};
export default Header;
