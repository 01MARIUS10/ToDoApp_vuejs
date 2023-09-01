<script setup>
import {inject} from 'vue'
let modalTask = inject('modalTask')

</script>

<template>
    <ul class="list-group mb-4">
                                <li
                                    v-for="el in modalTask.list"
                                    class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                                >
                                    <div class="d-flex align-items-center">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            aria-label="..."
                                            :checked="el.status"
                                            :disabled="el.isDelete"
                                            @change="el.status=!el.status"
                                        />
                                        <s v-if="el.isDelete"> {{ el.label }}</s>
                                        <span v-else>{{ el.label }}</span> 
                                    </div>
                                    <a
                                        href="#!"
                                        data-mdb-toggle="tooltip"
                                        title="Remove item"
                                    >
                                        <i
                                            class="fas fa-times text-primary"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
</template>