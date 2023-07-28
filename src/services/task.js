import data from "@/data/data.json";

function getArray(arrayI) {
    return arrayI.map((i) => data.contributors.filter((e) => e.id == i)[0]);
}

function getTasks() {
    return data.Taches.map((e) => ({
        ...e,
        contributors: getArray(e.contributors),
    }));
}

export { getTasks };
