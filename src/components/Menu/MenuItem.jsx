import { radomRgbaColor } from "../../utils";

const MenuItem = (props) => {
  const { name, Icon } = props;
  return (
    <div className="subMenu">
      <Icon className="icon" style={{ color: radomRgbaColor(1) }} />
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;
