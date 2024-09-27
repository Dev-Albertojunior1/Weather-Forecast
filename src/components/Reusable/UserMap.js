import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Text } from '@chakra-ui/react';
import L from 'leaflet';

// Import the default marker icon and shadow
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Define custom icon to fix the missing marker issue
const defaultIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconAnchor: [12, 41],
});

const UserMap = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        // Get user's location via browser geolocation
        navigator.geolocation.getCurrentPosition(
            (location) => {
                setPosition([location.coords.latitude, location.coords.longitude]);
            },
            (error) => {
                console.error('Error getting location: ', error);
            }
        );
    }, []);

    return (
        <Box width="70%" height="400px" margin="2rem auto">
            {position ? (
                <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={defaultIcon}>
                        <Popup>You are here!</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <Text>Locating your position...</Text>
            )}
        </Box>
    );
};

export default UserMap;
