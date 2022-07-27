<template>
<p class="studyingCurrently">Currently Studying: </p>
<div class="timer-object">
<svg
        width="400"
        height="400"
        fill="none"
        id="circle2"
        >
        <path
          stroke= "#ff7b00"
          stroke-width="5"
          stroke-linecap="round"
          d="M 55, 50
          a 105,105 15 1,1 -50,50 "
          
        />
  <svg
        width="400"
        height="400"
        fill="none"
        id="circle"
      >
      <path
          stroke= "#0976be"
          stroke-width="5"
          stroke-linecap="round"
          d="M 55, 50
          a 105,105 15 1,1 -50,50 "
          id="circlePath"
        />
        <foreignObject class="timer-text" width="35cm" height="35cm">
          <p>Time Remaining:</p>
          <p class="time"><b>{{ displayMinutes }}:{{ displaySeconds }}</b></p>
        </foreignObject>
     
      
  </svg>
</svg>
<button class="start-timer" @click="start">Start</button>
<button class="stop-timer" @click="stop">Stop</button>
</div>
<button class="skip-button"><b>Upcoming: <br></b></button>
</template>

<script>
import ProgressBar from "progressbar.js";
export default {
  name: "Timer",
  data() {
    return {
      timerInstance: null,
      CirclePath: null,
      interval: null,
      totalSeconds: 0.5 * 60
    }
  },

  computed: {
  displayMinutes() {
    const minutes = Math.floor(this.totalSeconds / 60)
    return this.formatTime(minutes)

  },
  displaySeconds() {
    const seconds = this.totalSeconds % 60
    return this.formatTime(seconds)

  }

  },

  methods: {
    formatTime(time) {
       if (time < 10){
      return '0' + time
    } 
    return time.toString()

    },
    start() {
     this.stop()
     this.timerInstance = setInterval(() => {
        this.totalSeconds -= 1
      }, 1000)
      this.CirclePath.animate(0);

    },
    stop(){
      clearInterval(this.timerInstance)

    },
    onFinish() {
      clearInterval(this.interval)
    },
    pageChange(time){
      if (time == "00:00") {
        $router.push({ name: "Break"});
      }
    }
  },

  mounted: function() {
    this.CirclePath = new ProgressBar.Path('#circlePath',{
      easing: 'linear',
      duration: 600000
    }
    );
    this.CirclePath.set(1);
    
  },
}
</script>

<style>
.studyingCurrently {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.timer-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 110%;
  padding: 50px;
}

.start-timer {
  background: red;
  color: white;
  border: none;
  border-radius: 25%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 5%
}
.skip-button {
  background-color: #ff7b00; 
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 10px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;
  margin: 24px 2px;
  cursor: pointer;
  border-radius: 43px;
  height: 100px;
  width: 275px;
}
</style>