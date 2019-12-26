<template>
  <div>
    <h2>Tasks</h2>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item">
          <a class="page-link" href="#" @click="fetchTasks(pagination.prev_page_url)">Previous</a>
        </li>
        <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item">
          <a class="page-link" href="#" @click="fetchTasks(pagination.next_page_url)">Next</a>
        </li>
      </ul>
    </nav>
    <div class="card card-body mb-2" v-for="task in tasks" v-bind:key="task.id">
      <h3>{{task.title}}</h3>
      <h3>{{task.description}}</h3>
      <p v-show="task.status == 1">
        <i class="far fa-check-circle completed"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      task: {
        id: "",
        title: "",
        description: "",
        status: ""
      },
      task_id: "",
      pagination: {},
      edit: false
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks(page_url) {
      let vm = this;
      page_url = page_url || "/api/task";
      fetch(page_url)
        .then(res => res.json())
        .then(res => {
          this.tasks = res.data;
          vm.makePagination(res.meta, res.links);
        })
        .catch(err => console.log(err));
    },
    
    makePagination(meta, links) {
      let pagination = {
        current_page: meta.current_page,
        last_page: meta.last_page,
        next_page_url: links.next,
        prev_page_url: links.prev
      };
      this.pagination = pagination;
    }
  }
};
</script>

<style scoped>
.completed {
  color: green;
}
</style>