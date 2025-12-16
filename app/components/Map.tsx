'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes Leaflet avec Next.js
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Coordonnées de Rennes
const RENNES_COORDS: [number, number] = [48.1113, -1.6800];

// Villes dans la zone d'intervention avec leurs coordonnées approximatives
const cities = [
  { name: 'Rennes', coords: [48.1113, -1.6800] as [number, number] },
  { name: 'Mordelles', coords: [48.0667, -1.8333] as [number, number] },
  { name: 'Chavagne', coords: [48.0469, -1.8172] as [number, number] },
  { name: 'Bréal-sous-Montfort', coords: [48.0500, -1.8667] as [number, number] },
  { name: 'Le Rheu', coords: [48.1108, -1.7978] as [number, number] },
  { name: 'Bruz', coords: [47.9967, -1.7500] as [number, number] },
  { name: 'Cintré', coords: [48.0889, -1.8767] as [number, number] },
  { name: "L'Hermitage", coords: [48.1500, -1.8333] as [number, number] }
];

interface MapProps {
  showAllCities?: boolean;
}

export default function Map({ showAllCities = true }: MapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Fix pour l'icône par défaut de Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl">
        <p className="text-gray-600">Chargement de la carte...</p>
      </div>
    );
  }

  return (
    <MapContainer
      key={`map-${showAllCities}`}
      center={RENNES_COORDS}
      zoom={10}
      scrollWheelZoom={false}
      className="h-full w-full rounded-2xl"
      style={{ height: '100%', width: '100%', zIndex: 1 }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Cercle de 35 km autour de Mordelles */}
      <Circle
        center={[48.0667, -1.8333]}
        radius={35000} // 35 km en mètres
        pathOptions={{
          color: '#ec6e4c',
          fillColor: '#ec6e4c',
          fillOpacity: 0.1,
          weight: 2
        }}
      />

      {/* Marqueurs pour les villes */}
      {showAllCities ? (
        cities.map((city) => (
          <Marker key={city.name} position={city.coords}>
            <Popup>
              <strong>{city.name}</strong>
            </Popup>
          </Marker>
        ))
      ) : (
        <Marker position={[48.0667, -1.8333]}>
          <Popup>
            <strong>Mordelles</strong>
            <br />
            Siège social
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}