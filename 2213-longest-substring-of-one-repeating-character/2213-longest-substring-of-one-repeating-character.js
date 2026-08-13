/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
  let n = s.length;

    let tree = Array.from(
        { length: 4 * n },
        () => ({
            leftChar: '',
            rightChar: '',
            prefix: 0,
            suffix: 0,
            best: 0,
            len: 0
        })
    );

    function merge(left, right) {

        if(left.len == 0)
            return right;

        if(right.len == 0)
            return left;

        let node = {
            leftChar: left.leftChar,
            rightChar: right.rightChar,
            prefix: left.prefix,
            suffix: right.suffix,
            best: Math.max(left.best, right.best),
            len: left.len + right.len
        };

        if(left.rightChar == right.leftChar)
        {
            node.best = Math.max(
                node.best,
                left.suffix + right.prefix
            );

            if(left.prefix == left.len)
                node.prefix = left.len + right.prefix;

            if(right.suffix == right.len)
                node.suffix = right.len + left.suffix;
        }

        return node;
    }

    function build(index, left, right) {

        if(left == right)
        {
            tree[index] = {
                leftChar: s[left],
                rightChar: s[left],
                prefix: 1,
                suffix: 1,
                best: 1,
                len: 1
            };

            return;
        }

        let mid = Math.floor((left + right) / 2);

        build(index * 2, left, mid);
        build(index * 2 + 1, mid + 1, right);

        tree[index] = merge(
            tree[index * 2],
            tree[index * 2 + 1]
        );
    }

    function update(index, left, right, pos, char) {

        if(left == right)
        {
            tree[index] = {
                leftChar: char,
                rightChar: char,
                prefix: 1,
                suffix: 1,
                best: 1,
                len: 1
            };

            return;
        }

        let mid = Math.floor((left + right) / 2);

        if(pos <= mid)
            update(index * 2, left, mid, pos, char);
        else
            update(index * 2 + 1, mid + 1, right, pos, char);

        tree[index] = merge(
            tree[index * 2],
            tree[index * 2 + 1]
        );
    }

    build(1, 0, n - 1);

    let ans = [];

    for(let i = 0; i < queryIndices.length; i++)
    {
        update(
            1,
            0,
            n - 1,
            queryIndices[i],
            queryCharacters[i]
        );

        ans.push(tree[1].best);
    }

    return ans;
};