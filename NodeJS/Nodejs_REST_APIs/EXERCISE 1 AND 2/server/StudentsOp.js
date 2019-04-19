const students = require('./public/students');

const getAllStudents = () => {
    return students.length === 0 ? (
        JSON.stringify({status: 400, message: "no student data"})
    ) : (
        JSON.stringify({status: 200, message: "success", data: students})
    )
};

const searchStudents = (search) => {
    const result_students = students.filter(element => {
        return (element.name.firstName.toLowerCase().startsWith(search.toLowerCase()) || element.email.startsWith(search));
    });

    return result_students.length === 0 ? (
        JSON.stringify({status: 400, message: "no student found"})
    ) : (
        JSON.stringify({status: 200, message: "success", data: result_students})
    )
};

const filterStudents = (search) => {
    if (search.toUpperCase() === "ALL") {
        return getAllStudents()
    } else {
        const result_students = students.filter(element => {
            return element.branchName.toLowerCase() === search.toLowerCase()
        });

        return result_students.length === 0 ? (
            JSON.stringify({status: 400, message: "no student found"})
        ) : (
            JSON.stringify({status: 200, message: "success", data: result_students})
        )
    }
};

const getBranches = () => {

    if (students.length === 0) {
        return JSON.stringify({
            status: 404,
            message: "no student data"
        })
    } else {
        const result_branches = {};
        students.forEach(element => {
            if (result_branches.hasOwnProperty(element.branchName)) {
                result_branches[element.branchName]++;
            } else {
                result_branches[element.branchName] = 1;
            }
        });
        return JSON.stringify({
            status: 200,
            message: "success",
            data: result_branches
        });
    }


};
module.exports = {
    getAllStudents,
    searchStudents,
    filterStudents,
    getBranches
};