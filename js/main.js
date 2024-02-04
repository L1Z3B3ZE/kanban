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
    }
})

