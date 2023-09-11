import { ref, computed, toRef, reactive, watch } from "vue";
import { defineStore } from "pinia";
import { getTasks, getDateFromTask } from "../services/task.js";
import { toast } from "@/services/toastService/toast.js";

export const useTaskStore = defineStore("task", () => {
    const tasks = ref(getTasks());
    // console.log("gettask", getTasks(), tasks);

    //le state du filtre filtre
    let filter = reactive({
        label: "",
        priority: false,
        status: false,
        from: null,
        to: null,
    });
    //le state du filtre filtre
    let arrange = reactive({
        label: false,
        priority: false,
        deadline: false,
        status: false,
    });
    const getTaskById = (id) => {
        let a = tasks.value.filter((e) => e.id == id)[0];
        console.log("getById_meth", a);
        return a;
    };

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
        let newTask = tasks;
        newTask = tasks.value;
        if (filter.priority !== false) {
            newTask = tasks.value.filter((t) => t.priority === filter.priority);
        }
        if (filter.status !== false) {
            newTask = newTask.filter((t) => t.status === filter.status);
        }
        if (filter.from !== null) {
            newTask = newTask.filter((t) => getDateFromTask(t) > filter.from);
        }
        if (filter.to !== null) {
            newTask = newTask.filter((t) => getDateFromTask(t) < filter.to);
        }
        if (filter.label != "") {
            let isIn = (p, q) => {
                return p.toLowerCase().includes(q.toLowerCase());
            };
            newTask = newTask.filter((t) => isIn(t.titre, filter.label));
        }
        return arrangeTask(newTask);
    });
    function arrangeTask(tasks) {
        return tasks;
    }

    function removeTask(id) {
        console.log("remove");
        toast.success("Suppression avec success !", "");
        tasks.value = tasks.value.filter((e) => e.id != id);
    }
    function setTask(newTask) {
        let task = tasks.value.find((e) => e.id == newTask.id);
        let index = tasks.value.indexOf(task);
        console.log("index", index);
        tasks.value[index] = newTask;
        console.log("task store in ", tasks);
    }
    function addTask(newTask) {
        console.log("addTask_meth", newTask);
        tasks.value.push({ ...newTask });
    }

    return {
        tasks,
        filterTask,
        arrange,
        taskPriorities,
        taskStatus,
        filter,
        setTask,
        addTask,
        removeTask,
        getTaskById,
    };
});
