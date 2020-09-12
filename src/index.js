import { Router } from '@core/router/Router'

import "./scss/index.scss";
import { BoardsPage } from './pages/BoardsPage'
import { MorganPage } from './pages/MorganPage';

new Router('#app', {
  dashboard: BoardsPage,
  morgan: MorganPage
})
