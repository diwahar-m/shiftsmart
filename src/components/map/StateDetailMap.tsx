import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, GeoJSON,  } from 'react-leaflet';
import usaMapData from '../../constants/us-states.json'; 
import AppBox from '../mui/AppBox';
import AppText from '../mui/AppText';
import useModal from '../../constants/hooks/useHooks';
import AppModal from '../mui/AppModal';
import StateDetailCard from '../card/StateDetailCard';

const StateDetailsMap: React.FC = () => {
  const { stateId } = useParams<{ stateId: string }>(); 

  const { open, handleClose, handleOpen } = useModal();

  useEffect(()=> {
    handleOpen()
  },[stateId])

  
  const stateData = usaMapData.features.find(
    (state) => state.properties.name === stateId
  );
  console.log(stateData?.properties?.name)

  if (!stateData) {
    return <div>State not found!</div>; 
  }

  return (
    <AppBox sx={{ height: '600px', width: '1200px' , position:'relative' }}>
        <AppText text={"Map"}/>
      <MapContainer
        center={[37.8, -96]} // Default center if no state data available
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Filter the state data to render only the clicked state's geometry */}
        <GeoJSON
        //@ts-expect-error "USA State type"
          data={stateData}
          onEachFeature={(feature, layer) => {
            const stateName = feature.properties.name;
            layer.bindPopup(`<strong>${stateName}</strong>`); // Show state's name in a popup
          }}
        />
      </MapContainer>
      <AppModal sx={{position:'absolute', bottom: '5px', right: '5px'}} open={open} handleClose={handleClose}>
        <StateDetailCard stateName={stateData?.properties?.name}/>
      </AppModal>
    </AppBox>
  );
};

export default StateDetailsMap;
