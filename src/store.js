import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import data from "../src/assets/data.json"
import { percentage } from "../src/helpers.js";

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    people: useStorage('people', data),
  }),
  getters: {
    getAllPeople() {
      return this.people.data
    },
    peopleEmpty() {
      return this.people.length <= 0
    },
    getPetcentageVotes() {
      const listOfPercentagePositiveVotes = [];
      const listOfPercentageNegativeVotes = [];
      this.getAllPeople.forEach(person => {
        const positiveVotes = person.votes.positive;
        const negativeVotes = person.votes.negative;
        const totalVotes = positiveVotes + negativeVotes;
        listOfPercentagePositiveVotes.push(percentage(positiveVotes, totalVotes));
        listOfPercentageNegativeVotes.push(percentage(negativeVotes, totalVotes));
      });
      return { 'percentagePositiveVotesList': listOfPercentagePositiveVotes, 'percentageNegativeVotesList': listOfPercentageNegativeVotes }
    }
  },
  actions: {
    addPeople(person) {
      this.people.push(person);
    },
    removePeople(index) {
      this.people.splice(index, 1)
    },
    addVote(vote) {
      if (vote.thumbs === 'up') {
        this.getAllPeople[vote.id].votes.positive = this.getAllPeople[vote.id].votes.positive + 1;
      } else {
        this.getAllPeople[vote.id].votes.negative = this.getAllPeople[vote.id].votes.negative + 1;
      }

    }
  },
})