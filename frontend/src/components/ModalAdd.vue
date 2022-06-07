<template>
  <div id="modalAdd">
    <!-- Button trigger modal -->
    <div class="text-center">
      <button
        type="button"
        class="btn btn-add button"
        data-toggle="modal"
        data-target="#modelId"
      >
        Tambah Catatan
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tambah Catatan</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="" method="post">
              <div class="form-group">
                <label for=""></label>
                <input
                  v-model="form"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="postActivity()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalAdd",
  data() {
    return {
      form: "",
    };
  },
  methods: {
    postActivity() {
      axios
        .post("http://localhost:3000/activity/create/", { activity: this.form })
        .then((res) => (window.location.href = "/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.button {
  margin-top: 200px;
  margin-bottom: 50px;
  border-radius: 10px;
}
.btn-add {
  width: 470px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #456ab1;
  color: #ffdd29;
  font-size: 30px;
}
</style>
