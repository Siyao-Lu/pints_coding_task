import React from 'react';
import { Card } from 'react-bootstrap';
import { StockTypes } from './data';
import './widget.css'
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // up and down arrow icons

interface StockProps {
    info: StockTypes;
};

/*
Three sections: column 1 - logo, column 2 - symbol and name, column 3 - price and changes
Card title auto aligns with card subtitle
*/
const StatisticsWidget = ({ info }: StockProps) => {
    let img_url = "https://storage.googleapis.com/iex/api/logos/" + info.symbol + ".png";
    const direction = (parseInt(info.change) < 0) ? 'down' : 'up'; // dynamically change color and arrow direction
    return (
        <Card className="card">
            <img src={img_url} alt="stock logo" className="card-logo" />
            <div className="card-info">
                <Card.Title className="card-symbol">{info.symbol}</Card.Title>
                <Card.Subtitle className="card-name">{info.name}</Card.Subtitle>
            </div>
            <div className="card-data">
                <Card.Title className="card-price">{info.price}</Card.Title>
                <div className={`card-changes ${direction}`}>
                    <Card.Subtitle className="card-arrow">{direction === 'down' ? <FaArrowDown /> : <FaArrowUp />}</Card.Subtitle>
                    <Card.Subtitle className="card-change"> {info.change} </Card.Subtitle>
                    <Card.Subtitle> {info.percent_change}</Card.Subtitle>
                </div>
            </div>
        </Card>
    );
};

export default StatisticsWidget;
