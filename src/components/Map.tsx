import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "./../types";
import { useEffect } from "react";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { useTheme } from "./ThemeProvider";

const API_KEY = import.meta.env.VITE_API_KEY;
const MAPTILE_KEY = import.meta.env.VITE_MAPTILE_KEY;

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  mapType: string;
};

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, lon } = coords;
  const { theme } = useTheme();
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MaptileLayer style={theme === "dark" ? "basic-dark" : "basic"} />
      <TileLayer
        opacity={0.7}
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
}) {
  const map = useMap();

  // Pan only when coords change
  useEffect(() => {
    map.panTo([coords.lat, coords.lon]);
  }, [coords.lat, coords.lon, map]);

  // Register click listener once, clean up on unmount
  useEffect(() => {
    const handleClick = (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      const normalizedLng = ((((lng + 180) % 360) + 360) % 360) - 180;
      onMapClick(lat, normalizedLng);
    };

    map.on("click", handleClick);
    return () => {
      map.off("click", handleClick);
    };
  }, [map, onMapClick]);

  return null;
}

function MaptileLayer({ style }: { style: string }) {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style,
      apiKey: MAPTILE_KEY,
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map, style]); // re-runs when theme changes, removes old layer and adds new one

  return null;
}
