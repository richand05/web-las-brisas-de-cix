import React, { useEffect } from 'react';
import data from '../../data/data.json';
import Card from '../Car/Card';
import './CardDetailsNearvy.css';
import CardWithButton from '../CardWithButton/CardWithButton';

const CardDetailsNearvy = () => {
    const nearbyPlaces = data.nearvy;

    // Scroll al inicio de la página cuando se monta el componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row cards-container-details">
                {nearbyPlaces.map(place => (
                    <div key={place.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <Card
                            title={place.title}
                            description={place.description}
                            location={place.location}
                            image={place.image}
                            district={place.district}
                            province={place.province}
                            direction={place.direction}
                            partOfDay={place.partOfDay}
                            carOrWalk={place.carOrWalk}
                            time={place.time}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardDetailsNearvy;
