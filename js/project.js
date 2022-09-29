function Project(projectId, projectName) {
    this.projectId = generateProjectId(10);
    this.projectName = getProjectName;
    this.isSuperAdmin = isSuperAdmin;



    this.getProjectId = function () {
        return this.projectId;
    }

    function getProjectName() {
        //get from HTML
        // const inputBox = document.querySelector(".project-description input").value;
    }


    function generateProjectId(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }



    this.addProjecToLocalStorge = function () {
        if (this.isSuperAdmin == false) {
            return false;
        } else {
            if (this.checkProjectExist == true) {
                return null;
            } else {
                let listProject = [];
                listProject.push(this);
                localStorage.setItem('Project', JSON.stringify(listProject));
            }
        }

    }



    this.checkProjectExist = function () {
        let getLocalStorageData = localStorage.getItem("Project");
        if (getLocalStorageData == null) {
            listProject = []
        } else {
            listProject = JSON.parse(getLocalStorageData);
        }
        for (var i = 0; i < listProject.length; i++) {
            if (listProject[i].userId == this.userId) {
                return true;
            }
        }
        return false;
    }

    this.deleteProject = function () {
        if (this.isSuperAdmin == false) {
            return null;
        } else {
            let getLocalStorageData = localStorage.getItem("Project");
            if (getLocalStorageData == null) {
                listProject = []
            } else {
                listProject = JSON.parse(getLocalStorageData);
            }
            for (var i = 0; i < listProject.length; i++) {
                if (listProject[i].projectId == this.projectId) {
                    listProject.splice([i], 1);
                    break;
                }
            }
            localStorage.setItem("Project", JSON.stringify(listProject));
        }
    }

    this.editProjectName = function () {
        if (this.isSuperAdmin == false) {
            return null;
        } else {
            let getLocalStorageData = localStorage.getItem("Project");
            if (getLocalStorageData == null) {
                listProject = []
            } else {
                listProject = JSON.parse(getLocalStorageData);
            }
            for (var i = 0; i < listProject.length; i++) {
                if (listProject[i].projectId == this.projectId) {
                    getProjectName;
                    break;
                }
            }
            localStorage.setItem("Project", JSON.stringify(listProject));
        }
    }

    this.findProject = function () {
        let getLocalStorageData = localStorage.getItem("Project");
            if (getLocalStorageData == null) {
                listProject = []
            } else {
                listProject = JSON.parse(getLocalStorageData);
            }
            for (var i = 0; i < listProject.length; i++) {
                if (listProject[i].projectId == this.projectId) {
                    return true
                } else {
                    return false;
                }
            }
    }

    this.showProject = function () {
        let getLocalStorageData = localStorage.getItem("Project");
        if (this.findProject == false) {
            return null; //or print out the screen "There isn't any project!"
        } else {
            listArray = [];
            listArray = JSON.parse(getLocalStorageData);
            //render
        }
    }

    this.showProjectUser = function () {
        let getLocalStorageData = localStorage.getItem("Project User");
        //render
    }

    this.showTaskList = function () {
        let getLocalStorageData = localStorage.getItem("Task"); //Task sẽ được lưu lên local từ class Task
        //render
    }
}