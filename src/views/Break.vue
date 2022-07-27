<template>
 <center>
    <h2 class="timesupText"><em>Time's up!</em></h2><br />
    <p class="recommendationText">Please enjoy a 10-minute break. Our recommendations for your break:</p>
    <img src="data:image/png;base64,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" alt="coffee icon" width="50" height="50" class="coffeeImage"><span class="recommend1">Have a drink</span><hr style="width:8%"><br />
    <img src="https://icon-library.com/images/walker-icon/walker-icon-24.jpg" alt="jogger icon" width="50" height="50" class="walkerImage"><span class="recommend2">Take a walk</span><hr style="width:8%"><br /> 
    <img src="data:image/png;base64,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" alt="music icon" width="50" height="50" class="noteImage"><span class="recommend3">Listen to some music</span><br /> 
    <br /><br /><br />
    <button class="breakTimer">
      <button class="breakTime"><b>10:00</b></button>
    </button>
    
 </center>
</template>

<script>
export default {
    name: "Break"

}
</script>

<style>
.breakTimer {
  background-color: #26ff00; 
  border: none;
  padding: 10px 10px;
  text-align: center;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 53px;
  height: 100px;
  width: 275px;

}
.breakTime {
  background-color: #2409be; 
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 35px;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 53px;
  height: 80px;
  width: 230px;
}

.timesupText {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.recommend1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.coffeeImage {
  vertical-align: middle;
}

.recommend2 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
}

.walkerImage {
  vertical-align: middle;
}

.recommend3 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
}

.noteImage {
  vertical-align: middle;
}

.recommendationText {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

