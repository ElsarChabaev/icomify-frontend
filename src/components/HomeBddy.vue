<template>
  <div class="body-container">
    <div class="image-container1" :style="getImageStyles1"></div>
    <div class="image-container2" :style="getImageStyles2"></div>
    <div class="button-container" :style="getButtonStyles">
      <router-link to="/about" class="button-link">
        <button class="button">MEHR ERFAHREN</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageSize1: {
        width: '160px',
        height: '160px',
        top: '-40px',
        left: '-5px'
      },
      imageSize2: {
        width: '700px',
        height: '200px',
        top: '-33px',
        left: '-5px'
      },
      buttonPosition: {
        top: '50px',
        left: '0px'
      }
    }
  },
  computed: {
    getImageStyles1 () {
      return {
        width: this.imageSize1.width,
        height: this.imageSize1.height,
        top: this.imageSize1.top,
        left: this.imageSize1.left
      }
    },
    getImageStyles2 () {
      return {
        width: this.imageSize2.width,
        height: this.imageSize2.height,
        top: this.imageSize2.top,
        left: this.imageSize2.left
      }
    },
    getButtonStyles () {
      return {
        top: this.buttonPosition.top,
        left: this.buttonPosition.left,
        fontWeight: 'bold',
        fontSize: '22px'
      }
    }
  }
}
</script>

<style scoped>
.image-container1:hover {
  transform: scale(1.2);
}
.image-container2:hover {
  transform: scale(1.1);
}
.body-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-container1 {
  position: absolute;
  background-image: url("../assets/buch.logo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.image-container2 {
  position: absolute;
  background-image: url("../assets/Schrift.Start.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.button-container {
  position: relative;
}

.image-container1 {
  position: relative;
}

.image-container2 {
  position: relative;
}

.button-link {
  text-decoration: none;
}

.button {
  background-color: #4252be;
  color: #ffffff;
  border: none;
  border-radius: 8px; /* Radiuswert anpassen */
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(0.95);
  color: #ffffff;
  background-color: #6e78b6;
}

.button:active {
  transform: scale(0.9);
}
</style>
