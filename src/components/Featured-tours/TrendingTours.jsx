import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/TopTrendingTours'
import { Col } from 'reactstrap'
import toptours from '../../assets/data/TopTrendingTours'
const TrendingTours = () => {
  return (
<>
{
    tourData.map(tour => (
        <Col lg='3'className='mb-4' key={tour.id}>
            <TourCard tour={tour} />
        </Col>
    ))
}
</>
  )
}

export default TrendingTours