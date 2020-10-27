<template>
      <form>
          <p>Registration</p>
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
              <label for="email">Email</label>
              <input v-model="formData.mail" id="email" type="email"/>
          </div>
          <div>
              <label for="company">Company Name</label>
              <input v-model="formData.company" id="company" type="text"/>
          </div>
          <div class="checkbox">
              <input type="checkbox" id="agreed" v-model="formData.agree" />
              <label for="agreed">I agree to receive communications from Samba.</label>
          </div>
          <div>
              <label for="pass">Password</label>
              <input v-model="formData.pass" id="pass" type="password"/>
          </div>
          <button type="button" @click="regUser">Sign up</button>
      </form>
</template>

<script>

export default {
  name: 'Form',
  created() {
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {this.dbData = data});
  },
  data() {
      return {
          formData: {
              firstName: '',
              secondName: '',
              mail: '',
              company: '',
              agree: Boolean,
              pass: ''
          },
          dbData:[],
          conditionUser: true
      }
  },
  methods: {
      regUser() {
          for (var key in this.formData) {
              if(key !== 'agree') {
                  if(this.formData[key] === ''){
                      alert('Enter all data');
                      return false;
                  }
              } else {
                  if(this.formData[key] === false){
                      alert('Enter all data');
                      return false;
                  }
              }
          }
          this.checkUsers();
          if(this.conditionUser){
              this.postRequest();
              this.$router.push({name: 'auth'})
              alert('User registered');
          }else{
              this.conditionUser = true;
              alert('Such user is in');
          }
      },
      checkUsers() {
          if(this.dbData !== []){
             this.dbData.forEach((user) => {
                 if(user.name === this.formData.firstName && user.pass===this.formData.pass) {
                     this.conditionUser = false;
                 }
             })
          }
      },
      postRequest() {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: this.formData.firstName,
                lastname: this.formData.secondName,
                email: this.formData.mail,
                company: this.formData.company,
                pass: this.formData.pass
            })
        };
      fetch("http://localhost:3000/users", requestOptions);
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
    width: 33%;
    background-color: #fff;
    border-color: #000;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
