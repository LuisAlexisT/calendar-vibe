<template>
  <SelectButton v-model="selectedNumber" :options="numeros" optionLabel="value" aria-labelledby="custom" class="text-center">
    <template #option="{ option }">
      <button class="none" :data-value="option.value" @click="handleButtonChange">{{ option.value }}</button>
    </template>
  </SelectButton>
</template>

<script>
export default {
  data() {
    return {
      selectedNumber: null,
      numeros: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 7 },
        { value: 15 }
      ]
    };
  },
  methods: {
    handleButtonChange(event) {
      event.preventDefault();
      const number = event.target.getAttribute('data-value');
      this.$emit('clickButton', number);
    },
    handleDateChange() {
      // Aquí desactivas el resaltado del botón
      this.selectedNumber = null;
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales según tus necesidades */
.none{
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px 17px;
}
</style>
