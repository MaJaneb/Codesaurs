import React from 'react';
import './filterCard.scss'
const FilterCard = ({product}) => {
    const {id, imageUrl, title, cost, description, level, length} = product;

    return (
        <div className="cards-block__item">
            <img
                src={imageUrl}
                alt="card-image"
                className="cards-block__img"
            />
            <div className="cards-block__card-content">
                <div className="cards-block__card-footer">
                    <header className="cards-block__card-header">{title}</header>
                    <div className="cards-block__card-descr">
                        <div className="cards-block__card-text">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="cards-block__card-details">
                    <button className="cards-block__difficulties">{level}</button>
                    <div className="cards-block__lessons-count">{length}</div>
                    <div className="cards-block__card-price">{cost} $</div>
                    <div className="cards-block__card-btn">
                        <button className="">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;