import { generate, green, presetPalettes, red } from "@ant-design/colors";
import { ColorPickerProps, ColorPicker, theme, Button } from "antd";

type TPresets = Required<ColorPickerProps>["presets"][number];
function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map<TPresets>(([label, colors]) => ({
    label,
    colors,
    key: label,
  }));
}
const ColorPickerRender = () => {
  const { token } = theme.useToken();

  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
  });
  return (
    <>
      <ColorPicker presets={presets}>
        <Button color="default" variant="text" className="btn-color">
          Màu sắc
        </Button>
      </ColorPicker>
    </>
  );
};
export default ColorPickerRender;
