<template>
  <div class="chat container">
    <h2 class="center teal-text"> Ninja Chat </h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text"> {{message.name}} </span>
            <span class="grey-text text-darken-3"> {{message.content}} </span>
            <span class="grey-text time"> {{message.timestamp}} </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>

import NewMessage from "../components/NewMessage.vue";
import DataBase from '@/firebase/init';
import moment from 'moment';

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = DataBase.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      // console.log(snapshot.docChanges())
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      });
    })
  }
}

</script>

<style lang="scss" scoped>

.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  span {
    font-size: 1.4em;
  }
  .time {
    font-size: 0.8em;
    display: block;
  }
  .messages {
    max-height: 300px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #ddd;
    }    
    &::-webkit-scrollbar-thumb {
      background: #aaa;
    }
  }
}

</style>