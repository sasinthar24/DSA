/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var ans = [];
    var i = 0; j = 0;

    while(rows > 1 && cols > 1)
    {
        for(var k = 1; k < cols;k++)
        {
           ans.push(matrix[i][j])
           j++;
        }
        for(var k = 1; k < rows; k++)
        {
            ans.push(matrix[i][j])
            i++;
        }
        for(var k = 1; k < cols; k++)
        {
            ans.push(matrix[i][j]);
            j--
        }
        for(var k = 1; k < rows; k++)
        {
            ans.push(matrix[i][j])
            i--
        }

        i++;
        j++

        rows-=2;
        cols-=2;
    }

  if(rows == 1)
{
    for(var k = 1; k <= cols; k++)
    {
        ans.push(matrix[i][j]);
        j++;
    }
}
   else if(cols == 1)
{
    for(var k = 1; k <= rows; k++)
    {
        ans.push(matrix[i][j]);
        i++;
    }
}
    return ans;
};