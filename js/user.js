function User(userId, userName, email, projectId, taskId) {
  this.id = generateUserId(10);
  this.userId = userId;
  this.userName = userName;
  this.email = email;
  this.projectId = projectId;
  this.taskId = taskId;

  function generateUserId(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  this.createUser = function (userId, userName, email) {};
  this.editUser = function (userId) {};
  this.deleteUser = function (userId) {};

  this.checkUserExists = function () {
    let getLocalStorageData = localStorage.getItem("User");
    if (getLocalStorageData == null) {
      listUser = [];
    } else {
      listUser = JSON.parse(getLocalStorageData);
    }
    for (var i = 0; i < listUser.length; i++) {
      if (listUser[i].userId == this.userId) {
        return true;
      }
    }
    return false;
  };
  

  this.checkProjectExist = function () {
    let getLocalStorageData = localStorage.getItem("Project");
    if (getLocalStorageData == null) {
      listProject = [];
    } else {
      listProject = JSON.parse(getLocalStorageData);
    }
    for (var i = 0; i < listProject.length; i++) {
      if (listProject[i].userId == this.userId) {
        return true;
      }
    }
    return false;
  };

  this.showProjectList = function () {
    if (checkProjectExist === true) {
      let newLiTag = "";
      listArray.forEach((element) => {
        newLiTag += `<li>${element}</li>`;
      });
      todoList.innerHTML = newLiTag;
    }
    console.log("Show project list not exist!");
  };
  this.setUserToProject = function (userId, projectId) {};
  this.setUserToTask = function (userId, projectId, taskId) {};
}
