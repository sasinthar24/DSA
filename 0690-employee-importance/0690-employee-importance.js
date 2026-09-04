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
            for(let i = 0; i < employees.length;i++)
            {
                const empId = employees[i].id
                const importance= employees[i].importance
                const child = employees[i].subordinates
                if(empId == nbr)
                {
                  imp+=importance;
                  if(child.length != 0)
                  dfs(child)
                }
            }
        }
    }

    return imp
};