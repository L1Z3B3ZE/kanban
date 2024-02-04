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
        editedDeadline: '',
        reasonForReturn: ''
    },
    methods: {
        addTask() {
            const newTask = {
                id: Date.now(),
                title: this.newTaskTitle,
                description: this.newTaskDesc,
                deadline: this.deadline,
                timeout: this.timeout,
                edited: false,
                reasonForReturn: this.reasonForReturn,
            }
            this.column1.push(newTask);
            this.newTaskDesc = '';
            this.newTaskTitle = '';
            this.deadline = '';
            newTask.creationDate = new Date().toLocaleString();
        },

        removeTask(card){
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
        moveToColumn4(card){
            this.column3.splice(this.column3.indexOf(card), 1);
            this.column4.push(card);
            let dateNow= new Date().getTime();
            let dateCompleted=new Date(card.deadline).getTime()
            if (dateCompleted >=dateNow){
                card.timeout = 'Выполнено в срок'
            }else {
                card.timeout = 'Просрочено'
            }
        },
        returnToColumn2(card){
            this.column3.splice(this.column3.indexOf(card), 1);
            this.column2.push(card);
            card.push(this.reasonForReturn)
        }

    }
})

