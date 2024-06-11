<template>
  <div class="card" ref="cardContainer">
    <div class="card-body">
      <InputText ref="inputText" type="text" id="date-range" v-model="value" @focus="showCard" />
    </div>
    <div class="card-header" v-show="showCalendar">
      <!-- Grupo de botones -->
      <div class="header-content">
        <BotonesGrupo ref="selectbutton" @clickButton="handleButtonClick" />
        <button class="close-button" @click="hideCard"><i class="pi pi-times"></i></button> <!-- Botón para cerrar el calendario -->
      </div>
    </div>
    <div class="card-body" v-show="showCalendar">
      <!-- Calendario -->
      <Calendar 
        ref="calendar"
        v-model="dates" 
        selectionMode="range" 
        :inline="true" 
        style="max-width: 100%;"
        :min-date="minDate"
        @date-select="handleDateChange">
      </Calendar>
    </div>
  </div>
</template>
<script>
import Calendar from 'primevue/calendar';
import BotonesGrupo from './ButtonsGroup.vue';
import InputText from 'primevue/inputtext';

function parseDateString(dateString) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export default {
  components: {
    BotonesGrupo,
    Calendar,
    InputText
  },
  data() {
    return {
      showCalendar: false,
      value: '',
      dates: null,
      minDate: new Date(),
      selectButtonSelected: false
    };
  },
  methods: {
    showCard() {
      this.showCalendar = true;
    },
    hideCard() {
      this.showCalendar = false;
    },
    handleButtonClick(numero) {
      var number = parseInt(numero)-1;
      var today = new Date();
      var inputval = this.$refs.inputText.$el.value;
      const ranges = inputval.split(" - ");
      if (ranges.length >= 1 && ranges[0] != '') {
        today = parseDateString(ranges[0]);
      }

      var endDate = today.addDays(number);
      this.dates = [today,endDate];

      this.highlightedDates = this.getDatesInRange(today, endDate);
      this.updateInputText(today, endDate);
    },
    handleDateChange(event) {
      const children = this.$refs.selectbutton.$el.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        
        // Elimina todas las clases del hijo actual
        child.classList.remove("p-highlight");
      }
      const clickedDate = new Date(event);
      var inputval = this.$refs.inputText.$el.value;
      let selDate = clickedDate.toISOString().slice(0, 10).split("-").reverse().join("/");

      const ranges = inputval.split(" - ");

      if (ranges.length <= 0 || ranges.length >= 2) {
        this.$refs.inputText.$el.value = selDate;
      } else {
        if (ranges[0] != '') {
          var timestmpseldate = parseDateString(ranges[0]).getTime();
          var timestmpclkdate = clickedDate.getTime();
          if (isNaN(timestmpseldate)) {
            this.$refs.inputText.$el.value = selDate;
          } else {
            if (timestmpseldate > timestmpclkdate) {
              this.$refs.inputText.$el.value = selDate;
            } else {
              this.$refs.inputText.$el.value = ranges[0] + ' - ' + selDate;
            }
          }
        } else {
          this.$refs.inputText.$el.value = selDate;
        }
      }
    },
    updateInputText(startDate, endDate) {
      if (startDate && endDate) {
        const formattedStartDate = startDate.toLocaleDateString();
        const formattedEndDate = endDate.toLocaleDateString();
        this.value = `${formattedStartDate} - ${formattedEndDate}`;
      }
    },
    getDatesInRange(startDate, endDate) {
      const dateArray = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
      }

      return dateArray;
    }
    
  }
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  width: fit-content; /* Ajusta el ancho automáticamente al contenido */
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.card-body {
  padding: 20px;
}

.header-content {
  display: flex;  
  justify-content: space-between;
  align-items: center;
}

.close-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  color: red;
  margin-left: auto;
}
.p-button {
    padding: 0;
}

.highlighted-date .p-datepicker-cell {
  background-color: #ffeb3b !important;
  color: #000 !important;
  border-radius: 50%;
}
</style>
