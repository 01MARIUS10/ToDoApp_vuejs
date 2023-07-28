import { ref, computed, toRef } from "vue";
import { defineStore } from "pinia";
import { getTasks } from "../services/task.js";
export const useTaskStore = defineStore("task", () => {
    const tasks = ref(getTasks());
    const taskPriorities = [
        { label: "low priority", value: 0 },
        { label: "middle priority", value: 1 },
        { label: "High priority", value: 2 },
    ];
    const taskStatus = [
        { label: "has't begun yet", value: 0 },
        { label: "finished", value: 1 },
    ];
    function removeTask(id) {
        tasks.value = tasks.value.filter((e) => e.id != id);
        console.log("removetask in store");
    }

    return { tasks, taskPriorities, taskStatus, removeTask };
});
