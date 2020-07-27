<template>
  <v-card class="ma-4 ml-0" min-width="240" elevation="4">
    <v-card-title class="subtitle-2">
      <router-link :to="courseLink(course.id)">{{ course.name }}</router-link>
    </v-card-title>

    <v-divider/>

    <v-list>
      <v-list-item
          v-for="group in groups"
          :key="group.id"
          :to="groupLink(group.id)"
      >
        <v-list-item-content>
          {{ group.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["course"],
  data() {
    return {
      groups: []
    };
  },
  methods: {
    groupLink: function (id) {
      return `${this.courseLink(this.course.id)}/groups/${id}`;
    },
    courseLink: function (id) {
      return `/courses/${id}`;
    }
  },
  async mounted() {
    this.groups = {
      1: [
        {
          id: 6,
          name: "All students"
        },
        {
          id: 7,
          name: "G1"
        },
        {
          id: 8,
          name: "Grupa 2"
        },
        {
          id: 9,
          name: "Sastav 3"
        },
        {
          id: 10,
          name: "Skup 4"
        },
        {
          id: 11,
          name: "Kategorija 5"
        },
        {
          id: 12,
          name: "Sedam"
        },
        {
          id: 13,
          name: "Sad sedam"
        },
        {
          id: 14,
          name: "Devet"
        },
        {
          id: 15,
          name: "Deset"
        }
      ],
      2: [
        {
          id: 16,
          name: "All students"
        },
        {
          id: 17,
          name: "G1"
        },
        {
          id: 18,
          name: "Grupa 2"
        },
        {
          id: 19,
          name: "Sastav 3"
        },
        {
          id: 20,
          name: "Skup 4"
        },
        {
          id: 21,
          name: "Kategorija 5"
        },
        {
          id: 22,
          name: "Sedam"
        },
        {
          id: 23,
          name: "Sad sedam"
        },
        {
          id: 24,
          name: "Devet"
        },
        {
          id: 25,
          name: "Deset"
        }
      ],
      3: [
        {
          id: 26,
          name: "All students"
        },
        {
          id: 27,
          name: "G1"
        },
        {
          id: 28,
          name: "Grupa 2"
        },
        {
          id: 29,
          name: "Sastav 3"
        },
        {
          id: 30,
          name: "Skup 4"
        },
        {
          id: 31,
          name: "Kategorija 5"
        },
        {
          id: 32,
          name: "Sedam"
        },
        {
          id: 33,
          name: "Sad sedam"
        },
        {
          id: 34,
          name: "Devet"
        },
        {
          id: 35,
          name: "Deset"
        }
      ],
      4: [
        {
          id: 36,
          name: "All students"
        },
        {
          id: 37,
          name: "TK9"
        },
        {
          id: 38,
          name: "RI1"
        },
        {
          id: 39,
          name: "TK10"
        },
        {
          id: 40,
          name: "TK11"
        },
        {
          id: 41,
          name: "TK12"
        }
      ],
      5: [
        {
          id: 42,
          name: "All students"
        },
        {
          id: 43,
          name: "EE22"
        },
        {
          id: 44,
          name: "RI66"
        },
        {
          id: 45,
          name: "ATE-5"
        }
      ]
    }[this.course.id];
  }
};
</script>
