import { Button, Dropdown, Space } from "antd";

const FontFamily = () => {
  const fontFamilies: string[] = [
    "Arial, sans-serif",
    "Verdana, sans-serif",
    "Helvetica, sans-serif",
    "Tahoma, sans-serif",
    "Trebuchet MS, sans-serif",
    "Times New Roman, serif",
    "Georgia, serif",
    "Garamond, serif",
    "Courier New, monospace",
    "Lucida Console, monospace",
    "Roboto, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif",
    "Montserrat, sans-serif",
    "Oswald, sans-serif",
    "Poppins, sans-serif",
    "Raleway, sans-serif",
    "Ubuntu, sans-serif",
    "Merriweather, serif",
    "Playfair Display, serif",
    "Nunito, sans-serif",
    "Quicksand, sans-serif",
    "Fira Sans, sans-serif",
    "Muli, sans-serif",
    "PT Sans, sans-serif",
    "Source Sans Pro, sans-serif",
    "Alegreya, serif",
    "Bitter, serif",
    "Crimson Text, serif",
    "Spectral, serif",
    "Inconsolata, monospace",
    "Space Mono, monospace",
    "Pacifico, cursive",
    "Lobster, cursive",
    "Dancing Script, cursive",
    "Great Vibes, cursive",
    "Satisfy, cursive",
    "Sacramento, cursive",
    "Cookie, cursive",
    "Amatic SC, cursive",
    "Shadows Into Light, cursive",
    "Indie Flower, cursive",
  ];
  return (
    <Dropdown dropdownRender={() => <div>hello</div>} trigger={["click"]}>
      <Button
        color="default"
        variant="text"
        className="btn-color"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Font chữ</Space>
      </Button>
    </Dropdown>
  );
};

export default FontFamily;
