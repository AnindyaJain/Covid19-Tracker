import  {useEffect} from 'react';
import { useMap } from "react-leaflet";


export default function Zoom ({center, zoom}) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(
        {
          lat: center[0],
          lng: center[1],
        },
        zoom
      );
    }, [center, zoom]);
    return null;
}