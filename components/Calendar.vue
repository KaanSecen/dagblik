<template>
  <div class="daily-calendar">
    <!-- Calendar Header -->
    <div class="calendar-header">
      <button @click="prevDay">
        <Icon name="material-symbols:arrow-left" color="black" size="2.5rem" />
      </button>
      <h1 class="date">{{ formattedDate }}</h1>
      <button @click="nextDay">
        <Icon name="material-symbols:arrow-right" color="black" size="2.5rem" />
      </button>
    </div>

    <!-- Event List -->
    <div class="event-list">
      <div v-for="event in sortedEvents" :key="event.id" class="event" :class="event.theme">
        <div class="event-details">
          <div class="event-time">{{ event.time }}</div>
          <div class="event-title">{{ event.title }}</div>
        </div>
        <button @click="removeEvent(event)" class="remove-button">Remove</button>
      </div>
    </div>

    <!-- Add Event Form -->
    <div class="add-event-form">
      <h2 class="form-title">Add Event</h2>
      <div class="input-container">
        <input v-model="newEvent.title" class="input" placeholder="Event Title" />
        <input type="time" v-model="newEvent.time" class="input" />
        <select v-model="newEvent.theme" class="theme-select input">
          <option value="blue">Blue Theme</option>
          <option value="red">Red Theme</option>
          <option value="yellow">Yellow Theme</option>
          <option value="green">Green Theme</option>
          <option value="purple">Purple Theme</option>
        </select>
      </div>
      <button @click="addEvent" class="add-button">Save Event</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      newEvent: {
        title: '',
        time: '',
        theme: 'blue',
      },
      events: [],
    };
  },
  computed: {
    formattedDate() {
      return this.currentDate.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    sortedEvents() {
      return this.filteredEvents.sort((a, b) => a.time.localeCompare(b.time));
    },
    filteredEvents() {
      const currentDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate()
      );

      return this.events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === currentDate.getFullYear() &&
            eventDate.getMonth() === currentDate.getMonth() &&
            eventDate.getDate() === currentDate.getDate()
        );
      });
    },
  },
  methods: {
    prevDay() {
      const prevDate = new Date(this.currentDate);
      prevDate.setDate(prevDate.getDate() - 1);
      this.currentDate = prevDate;
    },
    nextDay() {
      const nextDate = new Date(this.currentDate);
      nextDate.setDate(nextDate.getDate() + 1);
      this.currentDate = nextDate;
    },
    addEvent() {
      if (this.newEvent.title && this.newEvent.time) {
        this.events.push({
          id: this.events.length + 1,
          title: this.newEvent.title,
          time: this.newEvent.time,
          theme: this.newEvent.theme,
          date: new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth(),
              this.currentDate.getDate()
          ),
        });
        this.newEvent.title = '';
        this.newEvent.time = '';
      }
    },
    removeEvent(event) {
      const eventIndex = this.events.findIndex((e) => e.id === event.id);
      if (eventIndex !== -1) {
        this.events.splice(eventIndex, 1);
      }
    },
  },
};
</script>

<style scoped>
.daily-calendar {
  font-family: Arial, sans-serif;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  max-width: 400px;
  margin: 2rem auto;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.calendar-header button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
}

.date {
  font-weight: 600;
  color: #333;
  font-size: 1.2rem;
}

.event-list {
  display: flex;
  flex-direction: column;
}

.event {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 3px solid transparent;
  min-height: 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event.blue {
  border-color: #3490dc;
}

.event.red {
  border-color: #e3342f;
}

.event.yellow {
  border-color: #f6993f;
}

.event.green {
  border-color: #38c172;
}

.event.purple {
  border-color: #9561e2;
}

.event .event-details {
  display: flex;
  flex-direction: column;
}

.event-time {
  font-weight: 600;
  color: #3490dc;
  margin-right: 1rem;
  font-size: 1rem;
}

.event-title {
  font-weight: 600;
  font-size: 1rem;
}

.theme-select {
  border: 2px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.add-event-form {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.form-title {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input {
  border: 2px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  margin-bottom: 1rem;
}

.theme-select {
  border: 2px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.add-button {
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
}

.add-button:hover {
  background-color: #1c4f77;
}

.remove-button {
  background-color: #e3342f;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
}

.remove-button:hover {
  background-color: #b92925;
}
</style>
