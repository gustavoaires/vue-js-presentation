<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Cadastrar Aluno</router-link></li>
      <li><router-link to="/veralunos">Ver Alunos</router-link></li>
    </ul>
    <router-view></router-view>
    <!-- <CadastrarAlunos :passProps="message"></CadastrarAlunos> -->
  </div>
</template>

<script>
import CadastrarAlunos from './components/CadastrarAlunos'
import VerAlunos from './components/VerAlunos'

export default {
  name: 'app',
  data () {
    return {
      message: 'Algum texto!'
    }
  },
  components: {
    CadastrarAlunos,
    VerAlunos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a, button {
  color: #42b983;
}
</style>
