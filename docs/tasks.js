module.exports = {
        paths: {
            '/tasks/getAll': {
                get: {
                    tags: {
                        Tasks: 'Get Tasks',
                        },
                        description: 'Get tasks',
                        operationId: 'getTasks',
                        parameters: [],
                        responses: {
                        200: {
                            description: 'Tasks were obtained',
                            content: {
                                'application/json': {
                                schema: {
                                $ref: '#/components/schemas/task',
                                },
                                },
                            },
                        },
                    },
                },
            },
    },
}
   