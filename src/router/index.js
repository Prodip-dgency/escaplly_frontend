import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage'
import CompanyListPageView from '../views/CompanyListPage'
import CompanyDetailsPageView from '../views/CompanyDetailsPage'
import GameListPageView from '../views/GameListPage'
import GameDetailsPageView from '../views/GameDetailsPage'
import ContactPageView from '../views/ContactPage'

const routes = [
  { path: '/', name: 'home', component: HomePageView },
  { path: '/companies', name: 'company_list', component: CompanyListPageView },
  { path: '/company/:id', name: 'company_details', component: CompanyDetailsPageView },
  { path: '/games', name: 'game_list', component: GameListPageView },
  { path: '/game/:id', name: 'game_details', component: GameDetailsPageView },
  { path: '/contact', name: 'contact', component: ContactPageView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
