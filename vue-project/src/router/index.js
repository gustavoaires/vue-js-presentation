import Vue from 'vue'
import Router from 'vue-router'
import CadastrarAlunos from '../components/CadastrarAlunos'
import VerAlunos from '../components/VerAlunos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CadastrarAlunos',
      component: CadastrarAlunos
    },
    {
      path: '/veralunos',
      name: 'VerAlunos',
      component: VerAlunos
    }
  ]
})
