import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapMarker from '../images/map-marker.svg'

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy"/>
          <h2>Escolha um orfanado no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>
      <Map center={[-22.9139068,-43.2315809]} zoom={15} style={{ width:'100%', height:'100%' }}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to ="/" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
