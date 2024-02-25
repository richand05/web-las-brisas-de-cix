import React from 'react';
import { GeoAltFill, MoonFill, SunFill, CarFrontFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './CardWithButton.css';

const CardWithButton = ({ id, title, description, location, image, district, province, direction, partOfDay, carOrWalk, time }) => {
    // Función para acortar la descripción si es necesario
    const shortenDescription = (desc, maxLength) => {
        if (desc.length <= maxLength) {
            return desc;
        } else {
            return desc.substring(0, maxLength) + '...';
        }
    };

    let partOfDayText;
    if (partOfDay === 1) {
        partOfDayText = 'Día';
    } else if (partOfDay === 2) {
        partOfDayText = 'Noche';
    } else if (partOfDay === 3) {
        partOfDayText = 'Día y Noche';
    } else {
        partOfDayText = '';
    }

    return (
        <div className="card">
            <img src={image} className="card-img-top" style={{ height: "300px" }} />
            <div className="card-body" style={{ marginTop: "1rem" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                    {partOfDay === 1 ?
                        <SunFill className='icon-attention' style={{ color: " #FFA500", marginRight: "3px" }} /> : partOfDay === 2 ?
                            <MoonFill className='icon-attention' style={{ color: " #FFA500", marginRight: "3px" }} /> : partOfDay === 3 ?
                            <span style={{ display: "flex", alignItems: "center" }}><SunFill className='icon-attention' style={{ color: " #FFA500", marginRight: "2px" }} />  <MoonFill className='icon-attention' style={{ color: " #FFA500", paddingLeft: "2px", borderLeft: "1px solid black", marginRight: "3px" }} /></span> :
                            null
                    }{' '}
                    {partOfDayText}
                </span>
                <h5 className="card-title" style={{ marginTop: "0.5rem" }}>{title}</h5>
                <p className="card-text" >{shortenDescription(description, 120)}</p>
                <div className='footer-card-without-btn'>
                    <a href={location} className="col-8">
                        <GeoAltFill className='icon-place' /> {district}
                    </a>
                    <div className="col-4 carOrWalk-card" style={{ display: "flex", justifyContent: "flex-end" }}>
                        {carOrWalk === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-walking" viewBox="0 0 16 16">
                            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                            <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                        </svg> : <CarFrontFill />}{time}
                    </div>
                </div>
            </div>
            <Link to={`/atractivos-turisticos/${id}`} className="card-footer mt-2" style={{ backgroundColor: "#FFA500", textAlign: "center" }}>
                <div className="btn btn-primary"  style={{ backgroundColor: "#FFA500", border: "none" }}>
                    Ver detalles
                </div>
            </Link>
        </div>
    );
}

export default CardWithButton;
