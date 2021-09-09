<template>
  <div class="observer"/>
</template>

<script>
export default {
  name: 'observer',
  props: ['options', 'timeout'],
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
        setTimeout(() =>{
          this.$emit("intersect");

          console.log("wait")
        }, this.timeout);
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>