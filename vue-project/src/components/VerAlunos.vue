<template lang="html">
  <div class="ver-alunos">
    <span v-if="alunos.length == 0">Carregando alunos</span>
    <table v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>Matricula</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aluno in alunos">
          <td>{{aluno.id}}</td>
          <td>{{aluno.matricula}}</td>
          <td>{{aluno.nome}}</td>
          <td>{{aluno.email}}</td>
          <td><button v-on:click="removerAluno(aluno)">x</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ver-alunos',
  data () {
    return {
      alunos: [],
      apiUrl: 'http://rest.learncode.academy/api/ufc/alunos'
    }
  },
  created () {
    this.$http.get(this.apiUrl)
      .then(function (response) {
        this.alunos = response.data
      })
  },
  methods: {
    removerAluno: function (aluno) {
      this.$http.delete(this.apiUrl, aluno.id)
        .then(function () {
          this.alunos.splice(this.alunos.indexOf(aluno), 1)
          alert('Aluno removido com sucesso!')
        })
        .catch(function () {
          alert('Aluno nao pode ser removido!')
        })
    }
  }
}
</script>

<style lang="css" scoped>
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

.ver-alunos {
  margin: auto;
  width: 1024px;
  padding: auto;
}
</style>
