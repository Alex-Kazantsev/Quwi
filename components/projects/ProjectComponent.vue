<template>
  <div class="project__item-wrapper">
    <div
      class="project__item"
      @click="$emit('click')"
    >
      <div class="project__item__main-info">
        <img
          v-if="project.logo_url"
          class="project__item__main-info__image"
          :src="project.logo_url"
          alt="project logo"
        >
        <AvatarPlaceholder
          v-else
          class="project__item__main-info__image"
          :width="50"
          :height="50"
        />
        <div class="project__item__main-info__name">
          {{ project.name }}
        </div>
      </div>
      <div class="project__item__additional-info flex-1">
        <div class="project__item__additional-info__status">
          {{ project.is_active ? 'Active' : 'Not Active' }}
        </div>
        <div class="project__item__additional-info__time">
          <div>
            <p>time this week</p>
            <p>{{ project.spent_sec_this_week | formatSeconds }}</p>
          </div>
          <div>
            <p>this month</p>
            <p>{{ project.spent_sec_this_mont | formatSeconds }}</p>
          </div>
          <div>
            <p>total</p>
            <p>{{ project.spent_sec_all_time | formatSeconds }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarPlaceholder from '~/components/common/AvatarPlaceholder';
export default {
  name: 'ProjectComponent',
  components: {AvatarPlaceholder},
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  filters: {
    formatSeconds: (seconds) => {
      if (!seconds) return '00:00:00'
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    },
  }
}
</script>
