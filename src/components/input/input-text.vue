<template>
  <div class="input_group">
    <div class="input_text-container">
      <input type="text"
             class="input_field"
             placeholder="Find Blog by Date"
             name="name" id='name'
             spellcheck="false"
             :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"/>
      <div class="input_delete cursor-pointer" v-if="modelValue" @click="$emit('deleteValue')">X</div>
      <label for="name" class="input_label">Find Blog by Date</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-text",
  props: ['modelValue'],
  emits: ['update:modelValue', 'deleteValue']
}
</script>