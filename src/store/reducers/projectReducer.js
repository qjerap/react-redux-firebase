const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'bllabla blah'},
        {id: '2', title: 'Collecct all  thhe stars', content: 'bllabla blah'},
        {id: '3', title: 'egghunt wiith o', content: 'bllabla blah'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;