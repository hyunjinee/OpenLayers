import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu } from '.';

interface SidebarIconProps {
  menu: Menu;
  isSelected: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ menu, isSelected }) => {
  return (
    <Link to="/temp">
      <IconWrapper isSelected={isSelected}>
        {isSelected ? (
          <IconImage src={menu.selectedIcon} />
        ) : (
          <IconImage src={menu.icon} />
        )}
      </IconWrapper>
    </Link>
  );
};

const IconWrapper = styled.div<{ isSelected: boolean }>`
  width: 44px;
  heigh: 44px;

  margin-left: 8px;
  margin-right: 8px;

  background-color: ${({ isSelected }) => isSelected && '#1F4782'};

  cursor: pointer;
`;
const IconImage = styled.img`
  width: 17px;
  height: 15.94px;
  margin-top: 16px;
`;

export default SidebarIcon;
