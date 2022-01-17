<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add): </label>
      <input type="text" name="new-message" v-model="newMessage">
      <p class="red-text" v-if="feedback"> {{feedback}} </p>
    </form>
  </div>
</template>


<script>

import DataBase from '@/firebase/init'

export default {
  name: 'NewMess.lage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage() {
      // console.log(this.newMessage, this.name, Date.now());
      if(this.newMessage) {
        DataBase.collection('messages').add({
          content: this.newMessage,
          name :this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err);
        })
        this.feedback = null,
        this.newMessage = null
      } else {
        this.feedback = 'You Must Enter a Message In Order To Send One'
      }
    }
  }
}
</script>