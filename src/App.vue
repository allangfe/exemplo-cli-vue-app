<template>
  <div id="app">
    <HelloWorld msg="Teste"/>
    <ButtonCounter />
    <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:mensagem="post.mensagem"/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from './components/BlogPost.vue'

export default {
  data(){
    return{
      posts: [
        { id: 1, mensagem: 'Minha jornada com Vue' },
        { id: 2, mensagem: 'Postagens Vue' },
        { id: 3, mensagem: 'Porque Vue é tão divertido' }
      ]
    }
  },
  name: 'app',
  components: {
    HelloWorld,
    ButtonCounter,
    BlogPost
  }
}
             
</script>
