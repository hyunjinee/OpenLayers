import styled from 'styled-components';

import SidebarIcon from './SidebarIcon';
import icon1 from '../../assets/img/tab_icon_1.svg';
import icon2 from '../../assets/img/tab_icon_2.svg';
import icon3 from '../../assets/img/tab_icon_3.svg';
import selectedIcon1 from '../../assets/img/tab_icon_1_selected.svg';
import selectedIcon2 from '@/assets/img/tab_icon_2_selected.svg';
import selectedIcon3 from '@/assets/img/tab_icon_3_selected.svg';
export interface Menu {
  name: string;
  icon: string;
  selectedIcon: string;
}

const APP_MENU: Menu[] = [
  {
    name: 'locations',
    icon: icon1,
    selectedIcon: selectedIcon1,
  },
  {
    name: 'measurement',
    icon: icon2,
    selectedIcon: selectedIcon2,
  },
  {
    name: 'layer',
    icon: icon3,
    selectedIcon: selectedIcon3,
  },
];

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      {APP_MENU.map((menu) => (
        <SidebarIcon key={menu.name} menu={menu} isSelected={false} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-width: 60px;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const IconImage = styled.img`
  width: 17px;
  height: 15.94px;
  margin-top: calc(22px - 8px);
`;

export default Sidebar;
