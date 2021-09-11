<template>
  <div class="observer"/>
</template>

<script>
export default {
  name: 'observer',
  props: ['options', 'timeout', 'once'],
  emits: ['intersect'],
  data () {
    return {
      observer: null,
      // options: {
      //   rootMargin: "500px",
      // }
    }
  },
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        if(this.timeout > 0){
          setTimeout(() =>{
            this.$emit("intersect");

            console.log("Wait", this.timeout)
          }, this.timeout);
        } else {
          this.$emit("intersect");
        }
      }
    }, options);

    this.observer.observe(this.$el);
    if(this.once) {
      console.log("once")
      this.observer.disconnect();
    }
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>