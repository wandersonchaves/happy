import { Link } from "react-router-dom";
import mapMarkerImg from "../../images/map-marker.svg";
import { FiPlus } from "react-icons/fi";

import "./styles.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Teresina</strong>
          <span>Piauí</span>
        </footer>
      </aside>

      <MapContainer
        center={[-5.1025922, -42.736929]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
