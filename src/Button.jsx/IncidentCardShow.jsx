import React, { useState } from 'react'
import GetStarted from './GetStarted'
import CardDesign from '../Card/CardDesign'
import IncidentCard from '../Card/IncidentCard'

function IncidentCardShow() {
  const [showIncidentCard, setshowIncidentCard] = useState(false)

  return (
    <div>
      <GetStarted onClick={() => setshowIncidentCard(true)} />
      {showIncidentCard ? <IncidentCard /> : <CardDesign />}
    </div>
  )
}

export default IncidentCardShow
