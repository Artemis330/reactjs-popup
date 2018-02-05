import React from 'react'
import Warper from './Warper'
import Popup from '../../../lib/reactjsPopup.es'
//

const SimpleTooltip = () => (
  <Popup
    trigger={open => <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>}
    position="right center"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
)

export default Warper(SimpleTooltip)
