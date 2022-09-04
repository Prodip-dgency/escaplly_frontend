import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePage'
import CompanyListPageView from '../views/CompanyListPage'
import CompanyDetailsPageView from '../views/CompanyDetailsPage'
import GameListPageView from '../views/GameListPage'
import GameDetailsPageView from '../views/GameDetailsPage'
import ContactPageView from '../views/ContactPage'
import AboutPageView from '../views/AboutPage'
import TermsandConditionsPageView from '@/views/policy_pages/TermsandConditionsPage'
import PrivacyPolicyPageView from '@/views/policy_pages/PrivacyPolicyPage'
import DisclaimerPageView from '@/views/policy_pages/DisclaimerPage'
import CookiePolicyPageView from '@/views/policy_pages/CookiePolicyPage'
import EscapeRoomPlayersView from '../views/EscaperoomPlayers'
import EscapeRoomOwnersView from '@/views/EscaperoomOwners'
import WhatIsEscapeRoomView from '@/views/WhatisEscapeRoom'


const routes = [
  { path: '/', name: 'home', component: HomePageView },
  { path: '/companies', name: 'company_list', component: CompanyListPageView },
  { path: '/company/:id', name: 'company_details', component: CompanyDetailsPageView },
  { path: '/escaperooms', name: 'game_list', component: GameListPageView },
  { path: '/escaperoom/:id', name: 'game_details', component: GameDetailsPageView },

  { path: '/contact', name: 'contact', component: ContactPageView },
  { path: '/about', name: 'about', component: AboutPageView },
  { path: '/escape-room-for-players', name: 'escape_room_players', component: EscapeRoomPlayersView },
  { path: '/escape-room-for-owners', name: 'escape_room_owners', component: EscapeRoomOwnersView },
  { path: '/what-is-an-escape-room', name: 'what-is-escaperoom' },




  { path: '/terms-and-conditions', name: 'termsandconditions', component: TermsandConditionsPageView},
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicyPageView },
  { path: '/cookie-policy', name: 'cookie-policy', component: CookiePolicyPageView },
  { path: '/disclaimer', name: 'disclaimer', component:DisclaimerPageView },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
