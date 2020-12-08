import React from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  let location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default LocationDisplay;
