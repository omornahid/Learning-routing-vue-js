<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <h2>{{job.title}}</h2>
    <h3>{{job.details}}</h3>
    <hr>

  </div>
</template>

<script>
export default {
    name: "JobS",
    data(){
        return{
            jobs:[
                {title:'web developre',id:1,details:'lorem'},
                {title:'ui/ux',id:2,details:'lorem5'},
                {title:'it',id:3,details:'lorem9'},
            ]
        }
    }

}
</script>

<style scoped>
.job{
    text-align: center;
}
h1{
    color: coral;
}
</style>