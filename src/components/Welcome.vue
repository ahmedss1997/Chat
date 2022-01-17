<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your Name: </label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text"> {{feedback}} </p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      // console.log(this.name);
      if(this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = "You Must Write The Name"
      }
    }
  }
};

</script>

<style lang="scss" scoped>

.welcome {
  max-width: 400px;
  margin-top: 100px;
  h2 {
    font-size: 3em;
  }
  button {
    margin: 30px auto;
  }
}

</style>
