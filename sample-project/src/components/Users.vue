<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <label for="name">Name:</label>
      <input v-model="newUser.name" type="text" name="name" value="">

      <label for="email">Name:</label>
      <input v-model="newUser.email" type="text" name="email" value="">

      <input type="submit" value="Enviar">
    </form>

    <ul>
      <li v-for="user in users">
        <input v-model="user.contacted" class="toggle" type="checkbox">
        <span v-bind:class="{contacted: user.contacted}">
          {{ user.name }}: {{ user.email }}
          <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: {

    },
    data () {
      return {
        newUser: {},
        users: []
      }
    },
    methods: {
      addUser: function (e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
        e.preventDefault()
      },
      // removes just from the internal list
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
    computed: {

    },
    created: function () {
      // retrieving data from the url
      // adding to the list
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          this.users = response.data
        })
    }
  }
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
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

a {
  color: #42b983;
}
</style>
