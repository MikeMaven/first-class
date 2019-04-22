
import React from 'react'
import { render } from 'react-dom'

import App from '../react/components/App'
import RedBox from 'redbox-react'
import Index from '../react/components/Index'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<Index />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<Index />, reactElement)
    }
  }
})
