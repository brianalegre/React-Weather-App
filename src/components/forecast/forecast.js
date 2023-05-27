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

    const dayInAWeek = newDate().getDay();
    WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily Label</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <Accordion.Item key={idx}>
                        <Accordion.ItemHeading>
                            <AccordianItemButton>
                                <div className="daily-item"></div>
                                <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                <label htmlFor="" className="day"></label>
                            </AccordianItemButton>
                        </Accrordion.ItemHeading>
                        <Accordion.ItemPanel></Accordion.ItemPanel>

                    </Accordion.Item>
                ))}


            </Accordion>
        </>
    )
}


// Export Component
export default Forecast