<template>
  <div class="about">
    <h1>{{ $t('about.content') }}</h1>
    <Rate v-model="rateValue"></Rate>
    <DatePicker></DatePicker>
  </div>
</template>

<script>
import {
  Rate,
  DatePicker,
} from 'iview';

export default {
  name: 'about',
  components: {
    Rate,
    DatePicker,
  },
  data() {

    return { rateValue: 5 };

  },
};
</script>

