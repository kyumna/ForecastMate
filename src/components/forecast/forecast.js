import React from 'react'
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function forecast({ data }) {
    const birthday = new Date();
    const dayInWeek = birthday.getDay();

    const forecastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

    return (
        <>
        <Accordion allowZeroExpanded className='first'>
        <div className='text'>Daily</div>
        <div className='btn'>
        
        {data.list.splice(0, 7).map((item, idx) => {
            return (
                
                <AccordionItem key={idx}>
                
                <AccordionItemHeading>
                <AccordionItemButton className='hey'>
                <label className='day'>{forecastDay[idx]}</label>
                <div className='daily-item'>
                <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                
                <label className="min-max">{Math.round(item.main.temp)}°C</label>
                </div>
                </AccordionItemButton>
                </AccordionItemHeading>
                { /*<AccordionItemPanel>
                
                <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
                                    </div>
                                </div>
                           </AccordionItemPanel>*/}
                        </AccordionItem>
                    )
                })}

                </div>
            </Accordion>
        </>
    )
}

export default forecast