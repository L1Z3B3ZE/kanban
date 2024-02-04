new Vue({
    el: '#app',
    data: {
        column1: [],
        column2: [],
        column3: [],
        column4: [],
        newTaskTitle: '',
        newTaskDesc: '',
        deadline: '',
        edited: '',
        editedDescription:'',
        editedDeadline: ''
    },
    methods: {
        addTask() {
            const newTask = {
                id: Date.now(),
                title: this.newTaskTitle,
                description: this.newTaskDesc,
                deadline: this.deadline,
                timeout: this.timeout,
                edited: false
            }
            this.column1.push(newTask);
            this.newTaskDesc = '';
            this.newTaskTitle = '';
            this.deadline = '';
            newTask.creationDate = new Date().toLocaleString();
        },

        removeCard(card){
            this.column1.splice(this.column1.indexOf(card), 1);
        },
        editTasks(card) {
            card.edited = true;
        },
        saveEditedTask(card,newDescription,newDeadline){
            card.description=newDescription
            card.deadline=newDeadline
            card.editedDate =new Date().toLocaleString()
            this.editedDeadline=''
            this.editedDescription=''
            card.edited = false
        },
        moveToColumn2(card){
            this.column1.splice(this.column1.indexOf(card), 1);
            this.column2.push(card);
        },
        moveToColumn3(card){
            this.column2.splice(this.column2.indexOf(card), 1);
            this.column3.push(card);
        },
    }
})

