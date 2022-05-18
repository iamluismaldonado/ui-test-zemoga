import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { usePercentage } from "../src/helpers.js";
import data from "../src/assets/data.json"

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    people: useStorage('people', data),
  }),
  getters: {
    getAllPeople() {
      return this.people.data
    },
    getPetcentageVotes() {
      const listOfPercentagePositiveVotes = [];
      const listOfPercentageNegativeVotes = [];
      this.getAllPeople.forEach(person => {
        const positiveVotes = person.votes.positive;
        const negativeVotes = person.votes.negative;
        const totalVotes = positiveVotes + negativeVotes;
        listOfPercentagePositiveVotes.push(usePercentage(positiveVotes, totalVotes));
        listOfPercentageNegativeVotes.push(usePercentage(negativeVotes, totalVotes));
      });
      return { 'percentagePositiveVotesList': listOfPercentagePositiveVotes, 'percentageNegativeVotesList': listOfPercentageNegativeVotes }
    }
  },
  actions: {
    addVote(vote) {
      if (vote.thumbs === 'up') {
        this.getAllPeople[vote.id].votes.positive = this.getAllPeople[vote.id].votes.positive + 1;
      } else {
        this.getAllPeople[vote.id].votes.negative = this.getAllPeople[vote.id].votes.negative + 1;
      }

    }
  },
})