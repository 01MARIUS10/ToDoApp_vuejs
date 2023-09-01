import data from "@/data/data.json";
console.log(data);
function getArray(arrayI) {
    return arrayI.map((i) => data.contributors.filter((e) => e.id == i)[0]);
}

function getTasks() {
    return data.Taches.map((e) => ({
        ...e,
        contributors: getArray(e.contributors),
    }));
}

function getDateFromTask(task) {
    let reg = new RegExp("(\\d+)/(\\d+)/(\\d+)");
    let a = task.deadline.match(reg);
    let s = `${a[2]}/${a[1]}/${a[3]}`;
    let date = new Date(s);
    return date;
}
function getDateAndTime(task) {
    let reg = new RegExp("(\\d+)/(\\d+)/(\\d+)");
    let a = task.deadline.match(reg);

    let reg2 = new RegExp("(\\d+)h(\\d+)");
    let a2 = task.deadline.match(reg2);
    return {
        date: a[0],
        time: a2[0],
    };
}

export { getTasks, getDateFromTask, getDateAndTime };
