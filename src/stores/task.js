import { ref, computed, toRef, reactive, watch } from "vue";
import { defineStore } from "pinia";
import { getTasks } from "../services/task.js";
export const useTaskStore = defineStore("task", () => {
    const tasks = ref(getTasks());

    //le state du filtre filtre
    let filter = reactive({
        label: "",
        priority: false,
        status: false,
        from: null,
        to: null,
    });

    const taskPriorities = [
        { label: "low priority", value: 0 },
        { label: "middle priority", value: 1 },
        { label: "High priority", value: 2 },
    ];
    const taskStatus = [
        { label: "has't begun yet", value: 0 },
        { label: "finished", value: 1 },
    ];
    let filterTask = computed(() => {
        let newTask = [];
        newTask = tasks.value;
        if (filter.priority !== false) {
            newTask = tasks.value.filter((t) => t.priority === filter.priority);
        }
        if (filter.status !== false) {
            newTask = newTask.filter((t) => t.status === filter.status);
        }
        console.log("filter appelle");
        return newTask;
    });
    watch(filter, () => {
        console.log("filter change");
    });

    function removeTask(id) {
        tasks.value = tasks.value.filter((e) => e.id != id);
        console.log("removetask in store");
    }

    return {
        tasks,
        filterTask,
        taskPriorities,
        taskStatus,
        filter,
        removeTask,
    };
});
