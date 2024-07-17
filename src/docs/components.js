module.exports = {
    components: {
        schemas: {
            task: {
                type: 'object',
                    properties: {
                        _id: {
                        type: 'objectId',
                        description: 'task identification number',
                        example: '6201064b0028de7866e2b2c4',
                        },
                        title: {
                        type: 'string',
                        description: "task's title",
                        example: 'Make an excelent readme',
                        },
                        completed: {
                        type: 'boolean',
                        description: 'status of the task',
                        example: false,
                        },
                    },
            },
        },
        taskInput: {
            type: 'object',
            properties: {
            title: {
            type: 'string',
            description: 'Task name',
            example: 'Make an excelent readme',
            },
        },
    }
}
}