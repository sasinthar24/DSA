/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function(parent, s) {
  const n = parent.length;

    // STEP 1: Build original tree
    const children = Array.from(
        { length: n },
        () => []
    );

    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    // STEP 2: Find new parent using original ancestors
    const newParent = Array(n).fill(-1);

    // Stores nearest ancestor for each character
    const lastSeen = Array(26).fill(-1);

    // DFS stack: [node, isExit, previousAncestor]
    const stack = [[0, false, -1]];

    while (stack.length > 0) {
        const [node, isExit, previous] = stack.pop();

        const charIndex = s.charCodeAt(node) - 97;

        if (isExit) {
            // Restore previous ancestor when leaving this node
            lastSeen[charIndex] = previous;
            continue;
        }

        // Find closest matching ancestor BEFORE updating
        const ancestor = lastSeen[charIndex];

        newParent[node] =
            ancestor !== -1 ? ancestor : parent[node];

        // Save current ancestor
        lastSeen[charIndex] = node;

        // Exit event
        stack.push([node, true, ancestor]);

        // Visit original children
        for (let i = children[node].length - 1; i >= 0; i--) {
            stack.push([children[node][i], false, -1]);
        }
    }

    // STEP 3: Build final tree
    const finalChildren = Array.from(
        { length: n },
        () => []
    );

    for (let i = 1; i < n; i++) {
        finalChildren[newParent[i]].push(i);
    }

    // STEP 4: Traverse final tree
    const order = [];
    const dfsStack = [0];

    while (dfsStack.length > 0) {
        const node = dfsStack.pop();

        order.push(node);

        for (const child of finalChildren[node]) {
            dfsStack.push(child);
        }
    }

    // STEP 5: Calculate subtree sizes (postorder)
    const answer = Array(n).fill(1);

    for (let i = order.length - 1; i >= 0; i--) {
        const node = order[i];

        if (newParent[node] !== -1) {
            answer[newParent[node]] += answer[node];
        }
    }

    return answer;  
};