import { Button, Dropdown, Space } from "antd";

const FontFamily = () => {
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
