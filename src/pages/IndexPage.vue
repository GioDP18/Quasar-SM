<template>
  <div>
    <h4>Home Page</h4>
    <div class="content">
      <RouterLink v-for="student in students" :to="{ name: 'profile', params: { id: student.id } }" :key="student.id">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ student.name }} <br>
              <small>{{ student.student_number }}</small>
            </div>
          </q-img>
        </q-card>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const students = ref([]);

onMounted(() => {
  getStudents();
})

const getStudents = async () => {
  try{
    await axios.get(`${import.meta.env.VITE_APP_API_URL}/get-students`)
    .then((response) => {
      console.log(response)
      students.value = response.data.students
    })
  }
  catch(error){

  }
}
</script>

<style scoped>
h4{
  margin-left: 1rem;
}

.content{
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 5rem;
}

.my-card{
  width: 280px;
}
</style>
