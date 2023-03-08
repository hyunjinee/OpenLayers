import { useContext } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import SIAMap from '@/components/SIAMap';
import ZoomControlGroup from '@/components/ZoomControlGroup';
import { osmLayer } from '@/shared/layers';

const olViewSetting = {
  zoom: 5,
  center: [0, 0],
  projection: 'EPSG:4326',
};

export default function Zoom() {
  return (
    <SIAMap initial={olViewSetting} layers={[osmLayer]}>
      <ZoomControlGroup />
    </SIAMap>
  );
}
