<template>
  <div class="test">
    <h2>{{ msg }}</h2>
    <span v-html="title"></span>
    <input type="text" v-model="title">

    <p>{{ user.firstName }}</p>
    <span v-if="showLastName" v-text="user.lastName"></span>
    <p v-else>No last name</p>

    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>

    <button v-on:click="greet(title)" type="button" name="button">Show Alert Title</button>
    <br />
    <br />

    <label for="typeEvent">Type Event</label>
    <input v-on:keyup="pressKey" v-on:keyup.enter="enterHit" type="text" name="typeEvent" value="">
    <br />
    <br />

    <label for="inputFirstName">First Name</label>
    <input v-model="user.firstName" type="text" name="inputFirstName" value="">
    <label for="inputLastName">First Name</label>
    <input v-model="user.lastName" type="text" name="inputLastName" value="">
    <h3>{{ fullName }}</h3>

    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Receives text from a parent component'
      }
    },
    data () {
      return {
        title: '<h2>hello world</h2>',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showLastName: false,
        items: [
          {name: 'Item one'},
          {name: 'Item two'},
          {name: 'Item three'}
        ]
      }
    },
    methods: {
      greet: function (message) {
        alert(message)
      },
      pressKey: function (e) {
        console.log(e.target.value)
      },
      enterHit: function () {
        console.log('enter pressed')
      }
    },
    computed: {
      // when you have a more complex logic that you won't need to run every time
      // this function runs only when its dependencies are changed
      fullName: function () {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style scoped>
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
