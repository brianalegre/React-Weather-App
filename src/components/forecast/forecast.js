// Import
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Forecast Component
const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays)

    return (
        <>
            <label className="title">Daily Label</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <Accordion.Item key={idx}>
                        <Accordion.ItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item"></div>
                                <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                <label className="day">{forecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>


                            </AccordionItemButton>
                        </Accordion.ItemHeading>
                        <Accordion.ItemPanel></Accordion.ItemPanel>

                    </Accordion.Item>
                ))}


            </Accordion>
        </>
    )
}


// Export Component
export default Forecast