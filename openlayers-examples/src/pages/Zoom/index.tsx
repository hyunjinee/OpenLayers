import { useContext } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import { MapContext } from '@/components/SIAMap/MapContext';
import SIAMap from '@/components/SIAMap';
import ZoomControlGroup from '@/components/ZoomControlGroup';

const olViewSetting = {
  zoom: 5,
  center: [0, 0],
};

export default function Zoom() {
  return (
    <SIAMap initial={olViewSetting}>
      <ZoomControlGroup />
    </SIAMap>
  );
}
