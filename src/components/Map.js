import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Autocomplete } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const initialDataCenter = {
    lat: 0,
    lng: 0
};

const Map = ( { selectedAccount }) => {

    const userZipcode = selectedAccount["zipcode"];
    console.log("userZipcode", userZipcode);
    const keyLatLong = process.env.REACT_APP_GEOLOCATION_KEY;
    
    const [center, setCenter] = useState(initialDataCenter);
    
    useEffect(() => {
        axios.get("https://api.ipify.org/?format=json")
        .then((res) => {
            const theIp = res.data.ip;
            const endpointLocation = `https://api-bdc.net/data/ip-geolocation?ip=${theIp}&localityLanguage=en&key=${keyLatLong}`;

            axios.get(endpointLocation)
            .then((response) => {
                let geoData = response.data;
                let location = geoData.location;
                setCenter({lat: location.latitude, lng: location.longitude})
            })
            .catch(error => {
                console.log(error)
            });
        });
    }, [])

    // Load map
    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_API_GOOGLE_MAPS_KEY,
        // googleMapsApiKey: process.env.REACT_APP_API_GOOGLE_MAPS_KEY
        libraries: ['places']
    })

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        console.log("Center!!!", center)
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Autocomplete
    const [autocomplete, setAutocomplete] = useState(null);
    // State to hold the search input value
    const [searchInput, setSearchInput] = useState(''); 

    const onLoadAutocomplete = (autocomplete) => {
        setAutocomplete(autocomplete);
    };

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (place && place.geometry) {
                const location = place.geometry.location;
                setCenter({ lat: location.lat(), lng: location.lng() });
                if (map) {
                    map.panTo(location);
                }
            }
        }
    };

    const onSearch = () => {
        if (autocomplete !== null && searchInput.trim() !== '') {
            // Use Autocomplete to fetch place details based on search input
            autocomplete.getPlacePredictions(
                {
                    input: searchInput,
                    types: ['geocode'], // Adjust this based on your needs
                },
                (predictions) => {
                    if (predictions && predictions.length > 0) {
                        const placeId = predictions[0].place_id;
                        const geocoder = new window.google.maps.Geocoder();
                        geocoder.geocode({ placeId: placeId }, (results, status) => {
                            if (status === 'OK' && results[0]) {
                                const location = results[0].geometry.location;
                                setCenter({ lat: location.lat(), lng: location.lng() });
                                if (map) {
                                    map.panTo(location);
                                }
                            }
                        });
                    }
                }
            );
        }
    };

    return (
    <>
        <div style={{position:'relative'}}>
            {isLoaded ?
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* Search Box */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search for a location"
                        value={searchInput}
                        onChange={onSearchInputChange} // CAPTURE SEARCH INPUT
                    />
                    <button onClick={onSearch}>Search</button>
                </div>
                 {/* Autocomplete */}
                {autocomplete && (
                    <Autocomplete
                        onLoad={onLoadAutocomplete}
                        onPlaceChanged={onPlaceChanged}
                    >
                        <input
                            type="text"
                            placeholder="Enter a location"
                            style={{
                                boxSizing: 'border-box',
                                border: '1px solid transparent',
                                width: '240px',
                                height: '32px',
                                padding: '0 12px',
                                borderRadius: '3px',
                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                                fontSize: '14px',
                                outline: 'none',
                                textOverflow: 'ellipses',
                            }}
                        />
                    </Autocomplete>
                )}
              { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
            : <></>
            }
        </div>
    </>
    )
};

export default Map;