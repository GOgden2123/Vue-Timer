<template>

<center>
  <h3 class="intro">What would you like to study today?</h3>
<form>
  <div>
  <input type="text" class = "subject-container" placeholder="Please enter your subject here...">
  </div> 

  <br /> <br />
  <h3 class="subtopics">Would you like to focus on any sub-topics?</h3>
  
    <div>
    <input type="text" class = "topic-1-container" placeholder="Enter sub-topic 1 here..."><br />
    <input type="text" class = "topic-2-container" placeholder="Enter sub-topic 2 here...">
  </div>
</form>

<br /><br />
<p class="time-limit"><b>Time limit: 50 minutes</b></p>
<router-link to="Timer">
  <button class = "start-button" type = "submit"><em><b>Start</b></em>
  </button>
</router-link>
</center>
</template>

<script>
export default {
  name: "HomePage"
}
</script>