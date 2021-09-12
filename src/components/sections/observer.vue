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
            this.checkOnce()
          }, this.timeout);
        } else {
          this.$emit("intersect");
          this.checkOnce()
        }
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
  methods: {
    checkOnce() {
      if(this.once) {
        this.observer.disconnect();
      }
    }
  }
};
</script>