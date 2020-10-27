<template>
      <form>
          <p>Authorization</p>
          <div class="textbox">
              <div>
                  <label for="name">First name</label>
                  <input v-model="formData.firstName" id="name" type="text"/>
              </div>
              <div>
                  <label for="last">Last name</label>
                  <input v-model="formData.secondName" id="last" type="text"/>
              </div>
          </div>
          <div>
              <label for="pass">Password</label>
              <input v-model="formData.pass" id="pass" type="password"/>
          </div>
          <button type="button" @click="authUser">Sign in</button>
      </form>
</template>

<script>

export default {
  name: 'FormAuth',
  created() {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => this.dbData = data);
  },
  data() {
      return {
          formData: {
              firstName: '',
              secondName: '',
              pass: ''
          },
          dbData: [],
          conditionAuth: false
      }
  },
  methods: {
      authUser() {
          for (var key in this.formData) {
            if(this.formData[key] === ''){
             alert('Enter all data');
             return false;
            }
          }
          this.checkUser();
          if(this.conditionAuth) {
            this.conditionAuth = false;
            this.$router.push({name: 'first'})
          }
      },
      checkUser(){
            if(this.dbData.length !== 0) {
             this.dbData.forEach((elem) => {
             if(elem.name === this.formData.firstName && elem.lastname === this.formData.secondName && elem.pass === this.formData.pass){
              this.conditionAuth = true;
             }
            });
         }
        }
  }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height:70%;
    width: 30%;
    padding: 20px;
}
form div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80px;
    width: 100%;
}
p {
    font-size: 23px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 800;
}
.checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    width: 100%;
}
.textbox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.textbox div {
    display: flex;
    flex-direction: column;
    width: 46%;
}
input {
    height: 30px;
    border-radius: 3px;
    border-color: #000;
}
label {
    font-size: 17px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 700;
}
button {
    height: 30px;
    width: 37%;
    background-color: #fff;
    border-color: #000;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
