import { MapContext } from '@/components/SIAMap/MapContext';
import ScaleLine from 'ol/control/ScaleLine';
import { Units as U } from 'ol/proj/Units';
import { useContext, useEffect, useId, useState } from 'react';
import styled from 'styled-components';

export default function Units() {
  const [units, setUnits] = useState('metric');
  const map = useContext(MapContext);
  const unitId = useId();

  useEffect(() => {
    if (!map) {
      return;
    }

    // console.log(units);
    const controls = map.getControls().getArray();

    if (controls.length > 0) {
      controls.forEach((c) => {
        map.removeControl(c);
      });
    }
    // // // .find((c) => c instanceof ScaleLine);
    // if (isControlExists) {
    //   map.removeControl(
    //     map
    //       .getControls()
    //       .getArray()
    //       .find((c) => c instanceof ScaleLine),
    //   );
    // }

    if (units === 'scaleline') {
      map.addControl(new ScaleLine({ units: units as any }));
    } else {
    }
  }, [units, map]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnits(e.target.value);
  };

  return (
    <Wrapper>
      <label htmlFor={unitId}>Units: </label>
      <select id={unitId} value={units} onChange={handleChange}>
        <option value="degrees">degrees</option>
        <option value="imperial">imperial inch</option>
        <option value="us">us inch</option>
        <option value="nautical">nautical mile</option>
        <option value="metric">metric</option>
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  align-items: center;

  bottom: 3rem;
  left: 2rem;

  font-size: 1.6rem;

  select {
    margin-left: 0.5rem;
    outline: none;
  }
`;
