<template>
  <div>
    <nav>
      <q-list bordered>
        <RouterLink class="nav-link" :to="{ name: 'home' }">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="teal" text-color="white" icon="home" />
            </q-item-section>

            <q-item-section>Home</q-item-section>
          </q-item>
        </RouterLink>

        <RouterLink class="nav-link" :to="{ name: 'add' }">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="teal" text-color="white" icon="add" />
            </q-item-section>

            <q-item-section>Add Student</q-item-section>
          </q-item>
        </RouterLink>
      </q-list>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>
.nav-link{
  text-decoration: none;
  color: black
}
</style>
