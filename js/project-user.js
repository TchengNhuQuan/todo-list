function ProjectUser(projectId, userId, isAdmin) {
 this.id = generateProjectUserId(10);
 this.projectId = projectId;
 this.userId = userId;
 this.isAdmin = isAdmin; 

 function generateProjectUserId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
 }

 this.getProjectUserIp = function() {
  return this.id;
 }

 this.addProjectUserToLocalStorage = function() {
  if (this.checkUserExist == true) {
   return null;
  } else {
   let listProjectUser = [];
   listProjectUser.push(this);
   localStorage.setItem('Project User', JSON.stringify(listProjectUser));
  }
 }

 this.checkRole = function() {
  if(this.isAdmin == true) {
   return true;
  }
  return false;
 }

 this.checkUserExist = function() {
  let getLocalStorageData = localStorage.getItem("Project User");
  if (getLocalStorageData == null) {
   listProjectUser = []
  } else {
   listProjectUser = JSON.parse(getLocalStorageData);
  }
  for (var i = 0; i < listProjectUser.length; i++) {
   if (listProjectUser[i].userId == this.userId) {
    return true;
   }
  }
  return false;
 }

 this.deleteProjectUser = function() {
  let getLocalStorageData = localStorage.getItem("Project User");
  if (getLocalStorageData == null) {
   listProjectUser = []
  } else {
   listProjectUser = JSON.parse(getLocalStorageData);
  }
  for (var i = 0; i < listProjectUser.length; i++) {
   if(listProjectUser[i].projectId == this.projectId) {
    listProjectUser.splice([i], 1);
    break;
   }
  }
  localStorage.setItem("Project User", JSON.stringify(listProjectUser));
 }

}
