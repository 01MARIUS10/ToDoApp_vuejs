import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "@/data/data.json";

export const useContributorStore = defineStore("user", () => {
    function isContributor() {
        return true;
    }
    function getContributor(i) {
        return contributors.filter((u) => u.id == i);
    }
    const contributors = ref(data.contributors);
    function getContributors() {
        return contributors;
    }

    return { contributors, isContributor, getContributor };
});
