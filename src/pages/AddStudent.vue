<template>
  <div>
    <h4>Add New Student</h4>
    <q-form class="inputs row" @submit.prevent="addStudent">
      <q-input class="col-10" outlined v-model="name" label="Name" :dense="dense" />
      <q-input class="col-10" outlined v-model="student_number" label="Student Number" :dense="dense" />
      <q-btn type="submit" class="col-10" icon="add" label="Add Student" stack glossy color="blue" />
    </q-form>
  </div>
  <div class="loading" v-if="isLoading">
    <q-spinner-bars
      color="primary"
      size="5em"
    />
    <q-tooltip :offset="[0, 8]">QSpinnerBars</q-tooltip>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const student_number = ref("");
const isLoading = ref(false)

const addStudent = async () => {
  isLoading.value = true;
  try{
    await axios.post(`${import.meta.env.VITE_APP_API_URL}/add-student`, {
      name: name.value,
      student_number: student_number.value,
    })
    .then((response) => {
      if(response.status === 200){
        router.push({ name: 'home' })
      }
    })
  }
  catch(error){
    console.log(error);
  }
  finally{
    isLoading.value = false;
  }
}
</script>

<style scoped>
h4{
  margin-left: 1rem;
}

.inputs{
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.loading{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
}

</style>
