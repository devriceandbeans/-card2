import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './build/serviceWorker'

import App from './build/App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()