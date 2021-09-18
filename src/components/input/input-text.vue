<template>
  <div class="input_group">
    <input type="text"
           class="input_field"
           placeholder="Find Blog by Date"
           name="name" id='name'
           spellcheck="false"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"/>
    <label for="name" class="input_label">Find Blog by Date</label>
  </div>
</template>

<script>
export default {
  name: "input-text",
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>