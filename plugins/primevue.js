// plugins/primevue.js
// import { defineNuxtPlugin } from '#app';
// import PrimeVue from 'primevue/config';
// import Calendar from 'primevue/calendar';
// import InputText from 'primevue/inputtext';
// import SelectButton from 'primevue/selectbutton';
// import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(PrimeVue);
//   nuxtApp.vueApp.component('Calendar', Calendar);
//   nuxtApp.vueApp.component('InputText', InputText);
//   nuxtApp.vueApp.component('SelectButton', SelectButton);
// });

import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';
import SelectButton from 'primevue/selectbutton';
import InputText from 'primevue/inputtext';

// Importa los estilos de PrimeVue y PrimeIcons
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component('Calendar', Calendar);
  nuxtApp.vueApp.component('SelectButton', SelectButton);
  nuxtApp.vueApp.component('InputText', InputText);
});