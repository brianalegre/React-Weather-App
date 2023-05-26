// Import
import { Accordion, AccordianItemHeading, AccordianItem, AccordianItemButtom, AccordianItemPanel } from 'react-bootstrap';

// Forecast Component
const Forecast = ({ data }) => {
    return (
        <>
            <label className="title">Daily Label</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <Accordion.Item key={idx}>
                        <Accordion.ItemHeading>
                            <AccordianItemButtom>

                            </AccordianItemButtom>
                            <Accrordion.ItemHeading />
                            <Accordion.ItemPanel></Accordion.ItemPanel>

                    </Accordion.Item>
                ))}


            </Accordion>
        </>
    )
}


// Export Component
export default Forecast