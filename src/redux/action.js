export const addUsers = (data) => ({
    type: "ADD_USER",
    payload: data,
});

export const deleteUsers = (id) => ({
    type: "DELETE_USER",
    payload: id,
});

export const editeUser = (id) => ({
    type: "EDITE_USER",
    payload: id,
});

export const saveUser = (id) => ({
    type: "SAVE_USER",
    payload: id
});