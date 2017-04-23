<template lang="html">
  <div class="cadastrar">
      <form v-on:submit="cadastrarAluno">
        <label for="nome">Nome</label>
        <input type="text" name="nome" v-model="novoAluno.nome">
        <label for="matricula">Matricula</label>
        <input type="text" name="matricula" v-model="novoAluno.matricula">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="novoAluno.email">
        <input type="submit" value="Cadastrar">
      </form>
  </div>
</template>

<script>
export default {
  name: 'cadastrar',
  data () {
    return {
      novoAluno: {
        nome: '',
        matricula: '',
        email: ''
      },
      apiUrl: 'http://rest.learncode.academy/api/ufc/alunos'
    }
  },
  methods: {
    cadastrarAluno: function (e) {
      this.$http.post(this.apiUrl, this.novoAluno)
        .then(function (response) {
          this.novoAluno.nome = ''
          this.novoAluno.matricula = ''
          this.novoAluno.email = ''
          alert('Aluno cadastrado com sucesso!')
        })
      e.preventDefault()
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
