<template>
  <div>
    <div class="row" style="position: sticky;top: 100;">
      <div class="col-lg-9 col-sm-9"></div>
      <div class="col-lg-3 col-sm-3">
        <button id="toggle" class="btn btn-outline-warning" @click="gridView()">
          <img src="https://img.icons8.com/dotty/25/000000/activity-grid-2.png" />
        </button>
        <button id="toggle" class="btn btn-outline-warning" @click="listView()">
          <img src="https://img.icons8.com/dotty/25/000000/ingredients-list.png" />
        </button>
        <button
          id="toggle"
          type="button"
          class="btn btn-outline-warning"
          data-toggle="modal"
          data-target="#modal-add"
          @click="change"
        >
          <img src="https://img.icons8.com/material-sharp/25/000000/add.png" />
        </button>
      </div>
    </div>

    <!-- gridView -->
    <div v-if="display == 'grid'">
      <div class="row">
        <div class="col-lg-4 col-sm-6" v-for="(peep, index) in people" :key="peep.id">
          <div class="card" style="width: 95%">
            <div class="card-body" style="text-align:left;font-weight:600;">
              <!-- <img class="card-img-top" id="img-1" v-bind:src="employee.image" alt="Card image cap" /> -->
              <p id="card-p">Name : {{peep.name}}</p>
              <p id="card-p">UserName : {{peep.username}}</p>
              <p id="card-p">Email : {{peep.email}}</p>
              <p id="card-p">Phone : {{peep.phone}}</p>
              <a
                class="btn btn-outline-info"
                data-placement="top"
                title="Update User"
                data-toggle="modal"
                data-target="#modal-add"
                v-on:click="tempAdd(peep)"
              >
                <img src="https://img.icons8.com/pastel-glyph/14/000000/edit.png" alt />
              </a>
              <a
                class="btn btn-outline-info"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete User"
                v-on:click="del(peep.id,index)"
              >
                <img src="https://img.icons8.com/metro/14/000000/delete-sign.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tableview -->
    <div id="check" v-if="display == 'list'">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <table>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <tr v-for="(peep,index) in people" :key="peep.id">
              <td>{{peep.name}}</td>
              <td>{{peep.username}}</td>
              <td>{{peep.email}}</td>
              <td>{{peep.phone}}</td>
              <td></td>
              <td>
                <button
                  class="btn btn-outline-info"
                  data-placement="top"
                  title="Update User"
                  data-toggle="modal"
                  data-target="#modal-add"
                  v-on:click="tempAdd(peep)"
                >
                  <img src="https://img.icons8.com/pastel-glyph/14/000000/edit.png" />
                </button>
              </td>
              <td></td>
              <td>
                <button
                  class="btn btn-outline-info"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete User"
                  v-on:click="del(peep.id,index)"
                >
                  <img src="https://img.icons8.com/metro/14/000000/delete-sign.png" />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- Add User -->
    <div
      id="modal-add"
      class="modal fade update"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <h1 v-if="toggle == 'add'">Add User</h1>
          <h1 v-if="toggle == 'edit'">Update User</h1>
          <form>
            <label>Name :</label>
            <input type="text" v-model="employee.name" placeholder="Name" />
            <br />
            <label>Username :</label>
            <input type="text" v-model="employee.username" placeholder="UserName" />
            <br />
            <label>Email :</label>
            <input type="text" v-model="employee.email" placeholder="Email" />
            <br />
            <label>Phone no :</label>
            <input type="text" v-model="employee.phone" placeholder="Phone no" />
            <br />
            <button
              v-if="toggle == 'add'"
              type="button"
              class="btn btn-primary"
              v-on:click="postData(employee)"
            >
              <span>Add User</span>
            </button>
            <button
              v-if="toggle == 'edit'"
              type="button"
              class="btn btn-primary"
              v-on:click="update(employee.id)"
            >
              <span>Update User</span>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              v-on:click="resetData()"
            >Close</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {
      toggle: "edit",
      display: "grid",
      employee: {
        name: null,
        userName: null,
        email: null,
        phone: null,
        id: null
      }
    };
  },

  computed: {
    // people() {
    //   // console.log("run"+this.$store.state.employees);
    //   return this.$store.getters.people;
    // },
    ...mapGetters(["people"])
  },

  methods: {
    ...mapActions([
      'productaction'
    ]),
    listView() {
      this.display = "list";
    },
    gridView() {
      this.display = "grid";
    },
    resetData() {
      this.employee = { name: null, username: null, email: null, phone: null };
    },
    tempAdd(peep) {
      console.log(peep);
      this.employee = peep;
      this.toggle = "edit";
      //   console.log(this.employee);
    },
    change() {
      this.toggle = "add";
    },
    // ...mapActons([]),
    loadData() {
      axios
        .get("http://localhost:3000/users")
        .then(response => {
          console.log(response.data);
          // ...mapActons([])
          this.productaction(response.data);
          // this.$store.dispatch("productaction", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    update(id, i) {
      axios
        .put("http://localhost:3000/users/" + id, this.employee)
        .then(response => {
          
        })
        .catch(error => {
          console.log(error);
        });
    },
    async del(id, i) {
      try {
        await axios.delete(" http://localhost:3000/users/" + id);
        this.people.splice(i, 1);
      } catch (e) {
        console.log(e);
      }
    },
    async postData() {
      try {
        await axios.post(" http://localhost:3000/users", this.employee);
        this.people.push(this.employee);
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style>
</style>