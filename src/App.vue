<template>
<router-view />
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  name: "App",
  components: {
    HomePage
  }
}
</script> 

<style>
.intro {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 120%;
}

.subtopics {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 120%;
}

.subject-container {
  border-radius: 25px;
  border: 2px solid rgb(58, 58, 58,0.51);
  padding: 20px; 
  width: 190px;
}

.subject-container:focus {
  width: 240px;
}

.topic-1-container {
  border-radius: 25px;
  border: 2px solid rgba(58, 58, 58, 0.51);
  padding: 20px; 
  margin: 10px;
  width: 190px;
}

.topic-1-container:focus {
  width: 240px;
}

.topic-2-container {
  border-radius: 25px;
  border: 2px solid rgba(58, 58, 58, 0.51);
  padding: 20px; 
  margin: 20px;
  width: 190px;
}

.topic-2-container:focus {
  width: 240px;
}

.time-limit {
  font-size: 120%;
}

.start-button {
  background-color: #0976be; 
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 25px;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 33px;
  width: 200px;
}
</style>
