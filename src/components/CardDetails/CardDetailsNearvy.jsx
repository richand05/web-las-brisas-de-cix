import React from 'react';
import data from '../../data/data.json';
import Card from '../Car/Card';
import './CardDetailsNearvy.css';
import CardWithButton from '../CardWithButton/CardWithButton';

const CardDetailsNearvy = () => {
    const nearbyPlaces = data.nearvy;

    return (
        <div className="container mt-5 mb-5">
            <div className="row cards-container-details">
                {nearbyPlaces.map(place => (
                    <div key={place.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
