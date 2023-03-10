import styled from 'styled-components';

import SidebarIcon from './SidebarIcon';
import icon1 from '@/assets/img/tab_icon_1.svg';
import icon2 from '@/assets/img/tab_icon_2.svg';
import icon3 from '@/assets/img/tab_icon_3.svg';
import selectedIcon1 from '@/assets/img/tab_icon_1_selected.svg';
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
  min-width: 6rem;
  box-shadow: 0rem 0.06rem 0.18rem rgba(0, 0, 0, 0.1),
    0rem 0.32rem 0.72rem rgba(0, 0, 0, 0.13);
`;

const IconImage = styled.img`
  width: 1.7rem;
  height: 1.594rem;
  margin-top: calc(2.2rem - 0.8rem);
`;

export default Sidebar;
