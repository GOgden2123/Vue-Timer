<template>
 <center>
  <h2 class="breakupText"><em>Break's up!</em></h2><br />
  <p class="sessionsText">We hope you enjoyed your break. Feel free to restart your current study session, or start  a brand new study session.</p><br />
  <router-link to="Timer"><button class="restartSession"><b>Restart</b></button><br /></router-link>
  <router-link to="/"><button class="newSession"><b>New Session</b></button></router-link>
 </center>
</template>

<script>
export default {
    name: "Sessions"

}
</script>

<style>
.restartSession {
  background-color: #eb0062; 
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 53px;
  height: 100px;
  width: 275px;
}

.newSession {
  background-color:#0976be;
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 53px;
  height: 100px;
  width: 275px;

}

.breakupText {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sessionsText {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>