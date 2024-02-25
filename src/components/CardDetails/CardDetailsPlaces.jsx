import React, { useEffect } from 'react';
import data from '../../data/data.json';
import './CardDetailsNearvy.css';
import CardWithButton from '../CardWithButton/CardWithButton';
import Card from '../Car/Card';

const CardDetailsPlaces = () => {
    const places = data.places;

    // Scroll al inicio de la página cuando se monta el componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row cards-container-details">
                {places.map(place => (
                    <div key={place.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        {place.typeCard === 1 ? (
                            <CardWithButton
                                id={place.id}
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
                        ) : (
                            <Card
                                id={place.id}
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
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardDetailsPlaces;
