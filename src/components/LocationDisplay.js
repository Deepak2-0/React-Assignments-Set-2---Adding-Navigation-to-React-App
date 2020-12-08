import React from "react";
import { useLocation } from "react-router-dom";

function LocationDisplay() {
  let location = useLocation();
  // console.log(location);
  // console.log(location.pathname);

  return <div data-testid="location-display">{location.pathname}</div>;
}

export default LocationDisplay;
