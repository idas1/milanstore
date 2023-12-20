<template>
  <div class="success">
    <div class="success-header">
      <p class="success-title uil uil-shield-check">
        <i>
          DONE !!!
          <br/>
          Thank you & Have a nice day !!!
        </i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderSuccess",
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  border: 0.1em solid red;
  border-radius: 1em;
  text-align: center;
  width: 50vw;
  height: 15em;
  align-items: center;
  justify-content: center;
  animation: fade-in 1s forwards 0.5s;
  margin-top: 1.25em;
}

.success-header {
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: white;
}

.uil {
  margin-left: 0.25em;
  color: green;
  align-self: center;
  justify-self: center;
}

.success-title {
  font-size: 3em;
}

</style>
