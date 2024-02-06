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
        editedTitle: '',
        editedDescription:'',
        editedDeadline: '',
        reasonForReturn: ''
    },
    methods: {
        addTask() {
            const isTaskExistsIn1 = this.column1.some(card => card.title === this.newTaskTitle);
            const isTaskExistsIn2 = this.column2.some(card => card.title === this.newTaskTitle);
            const isTaskExistsIn3 = this.column3.some(card => card.title === this.newTaskTitle);
            const isTaskExistsIn4 = this.column4.some(card => card.title === this.newTaskTitle);
            if (isTaskExistsIn1 || isTaskExistsIn2 || isTaskExistsIn3 || isTaskExistsIn4) {
                alert('Задача с таким заголовком уже существует!');
                this.newTaskTitle = '';
                return;
            }
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
        saveEditedTask(card,newDescription,newDeadline, newTitle){
            card.title=newTitle
            card.description=newDescription
            card.deadline=newDeadline
            card.editedDate =new Date().toLocaleString()
            this.editedTitle=''
            this.editedDeadline=''
            this.editedDescription=''
            card.edited = false
        },
        moveToColumn2(card){
            this.column1.splice(this.column1.indexOf(card), 1);
            this.column2.push(card);
        },
        moveToColumn3(card){
            const isTaskExists = this.column3.some(existingCard => existingCard.title === card.title);
            if (isTaskExists) {
                alert('В третьем столбце уже есть задача с таким же названием!');
                return;
            }
            this.column2.splice(this.column2.indexOf(card), 1);
            this.column3.push(card);
        },
        moveToColumn4(card){
            const isTaskExists = this.column4.some(existingCard => existingCard.title === card.title);
            if (isTaskExists) {
                alert('В четвертом столбце уже есть задача с таким же названием!');
                return;
            }
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

