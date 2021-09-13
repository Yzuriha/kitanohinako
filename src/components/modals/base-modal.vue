<template>
  <teleport to="body">
    <transition name="standard-fade">
    <div v-if="showModal" class="base-modal" @click.self="closeModal">
      <div class="modal-container" @click.self="closeModal">
        <slot name="content"></slot>
      </div>
      <div class="close-button" @click="closeModal">✕</div>
    </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "base-modal",
  emits: ['closeModal'],
  props: {
    showModal: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>