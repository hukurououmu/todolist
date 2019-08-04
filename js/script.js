let app = new Vue({
    el: "#tasks-list",
    data: {
        tasks: [{
                id: 0,
                text: "Sleep",
                isDeleted: false
            },
            {
                id: 1,
                text: "Lunch",
                isDeleted: false
            },
            {
                id: 2,
                text: "Walk",
                isDeleted: false
            },
        ],
        newTask: "",
    },
    methods: {
        addTask: function() {
            let new_id = this.tasks[this.tasks.length - 1].id + 1;
            this.tasks.push({
                id: new_id,
                text: this.newTask,
                isDeleted: false
            });
            this.newTask = "";
        },
        deleteTask: function(task_id) {
            this.tasks.forEach(function(task) {
                if (task.id === task_id) {
                    return task.isDeleted = true;
                }
            })
        }
    }
})
