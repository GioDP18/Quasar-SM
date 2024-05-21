<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h4>Student Profile</h4>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
          <div class="text-caption text-grey">
            Student Number: {{ student_number }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          <button @click="updateStudent">Update</button>
        </q-btn>
        <q-btn flat color="primary">
          <button @click="deleteStudent">Delete</button>
        </q-btn>
      </q-card-actions>
    </q-card>
    <div class="update row">
      <q-input class="col-10" outlined v-model="newName" label="Name" :dense="dense" />
      <q-input class="col-10" outlined v-model="newNUmber" label="Name" :dense="dense" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const id = useRoute().params.id;
const name = ref("");
const student_number = ref("");
const newName = ref("");
const newNUmber = ref("")

onMounted(() => {
  getProfile();
})

const getProfile = async () => {
  try{
    await axios.get(`${import.meta.env.VITE_APP_API_URL}/get-profile/${id}`)
    .then((resposne) => {
      console.log(resposne.data.data[0].name)
      name.value = resposne.data.data[0].name
      student_number.value = resposne.data.data[0].student_number
    })
  }
  catch(error){
    console.log(error);
  }
}

const deleteStudent = async () => {
  try{
    await axios.delete(`${import.meta.env.VITE_APP_API_URL}/delete/${id}`)
    .then((response) => {
      router.push({ name: 'home' })
    })
  }
  catch(error){
    console.log(error);
  }
}

const updateStudent = async () => {
  try{
    await axios.post(`${import.meta.env.VITE_APP_API_URL}/update-profile`, {
      id: id,
      name: newName.value,
      student_number: newNUmber.value,
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
}
</script>

<style scoped>
h4{
  margin-left: 1rem;
}

.my-card{
  width: 90%;
  margin: auto;
}

.update{
  display: flex;
  justify-content: center;
}
</style>
