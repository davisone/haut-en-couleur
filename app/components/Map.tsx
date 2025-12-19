'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icône personnalisée orange moderne
const createCustomIcon = (isMain = false) => {
  const color = isMain ? '#ec6e4c' : '#f97316';
  const svgIcon = `
    <svg width="40" height="50" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0C11.716 0 5 6.716 5 15c0 10 15 35 15 35s15-25 15-35c0-8.284-6.716-15-15-15z"
        fill="${color}"
        stroke="rgba(0,0,0,0.2)"
        stroke-width="1"
      />
      <circle cx="20" cy="15" r="6" fill="white"/>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50]
  });
};

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
      {/* Style de carte moderne Carto Positron (clair et épuré) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
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
          <Marker
            key={city.name}
            position={city.coords}
            icon={createCustomIcon(city.name === 'Mordelles')}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <p className="font-bold text-gray-800 text-base">{city.name}</p>
                {city.name === 'Mordelles' && (
                  <p className="text-sm text-primary mt-1">📍 Siège social</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))
      ) : (
        <Marker
          position={[48.0667, -1.8333]}
          icon={createCustomIcon(true)}
        >
          <Popup className="custom-popup">
            <div className="p-2">
              <p className="font-bold text-gray-800 text-base">Mordelles</p>
              <p className="text-sm text-primary mt-1">📍 Siège social</p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}