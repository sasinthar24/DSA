/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let imp = 0;
    let map = new Map();
    for(let i = 0;i < employees.length;i++)
    {
        map.set(employees[i].id,employees[i])
    }
   
    for(let i = 0; i < employees.length;i++)
    {
        const empId = employees[i].id
        const importance= employees[i].importance
        const child = employees[i].subordinates
        if(empId == id)
        {
            imp+=importance;
            if(child.length != 0)
            dfs(child)
        }
    }
    function dfs(child)
    {
         for(const nbr of child)
         {
            childEmp = map.get(nbr)
             const empId = childEmp.id
             const importance= childEmp.importance
             const child = childEmp.subordinates
             imp+=importance;
             if(child.length != 0)
             dfs(child)
        }
    }

    return imp
};