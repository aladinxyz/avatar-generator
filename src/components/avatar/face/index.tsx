import * as React from 'react'

import Eyebrow, { Type as EyebrowType } from './eyebrow'
import Eyes, { Type as EyeType } from './eyes'
import { default as DefaultMouth } from './mouth/Default'
import { default as DefaultNose } from './nose/Default'

export default class Face extends React.Component {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <DefaultMouth />
        <DefaultNose />
        <Eyes type={EyeType.Default} />
        <Eyebrow type={EyebrowType.Default} />
      </g>
    )
  }
}
