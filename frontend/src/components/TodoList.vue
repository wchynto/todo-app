<template>
  <div class="flex-container" v-for="activity in activities">
    <div class="list">
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            name=""
            id=""
            value="checkedValue"
          />
          {{ activity.activity }}
        </label>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-danger"
        @click="deleteButton(activity)"
      >
        <i class="fa fa-trash fa-3x" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      activities: {},
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/activity/")
      .then((result) => {
        this.activities = result.data.activities;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteButton(activity) {
      axios
        .post("http://localhost:3000/activity/delete/" + activity._id)
        .then((res) => {
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
.flex-container > div {
  margin: 10px;
}
.btn-danger {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
input[type="checkbox"] {
  transform: scale(2);
}
.form-check-label {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  font-size: 30px;
  color: #ffdd29;
}
.list {
  box-sizing: border-box;

  width: 400px;
  height: 70px;

  background: #456ab1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
