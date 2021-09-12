<template>
  <teleport to="body">
    <div v-if="showModal" class="base-modal">
      <div class="modal-container">
        <slot name="content"></slot>
      </div>
      <div class="close-button" @click="closeModal">✕</div>
    </div>
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