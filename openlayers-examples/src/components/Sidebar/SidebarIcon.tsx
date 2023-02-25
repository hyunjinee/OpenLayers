import { Link } from 'react-router-dom';

interface SidebarIconProps {
  menu?: any;
  isSelected?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = () => {
  return <Link to="/temp"></Link>;
};

export default SidebarIcon;
