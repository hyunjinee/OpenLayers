import { osmLayer } from '@/shared/layers';
import SIAMap from '@/components/SIAMap';
import ZoomControlGroup from '@/components/ZoomControlGroup';

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
