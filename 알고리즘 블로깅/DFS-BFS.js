// function dfs(graph, v, visited) {
//   // 현재 노드를 방문 처리
//   visited[v] = true;
//   console.log(v);

//   // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
//   for (let node of graph[v]) {
//     if (!visited[node]) {
//       dfs(graph, node, visited)
//     }
//   }
// }
// const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
// const visited = Array(6).fill(false)
// // 이 코드는 "visited"라는 상수 변수를 선언합니다. 
// // "visited"는 길이가 6이고 각 요소가 "false"로 초기화된 배열입니다.

// dfs(graph, 0, visited);
// // 0 1 6 2 3 4 5

// function dfs(graph, start, visited) {
//   const stack = [];
//   stack.push(start);

//   while (stack.length) {
//     let x = stack.pop();
//     if (!visited[x]) {
//       console.log(x);
//       visited[x] = true;

//       for (let node of graph[x]) {
//         if (!visited[node]) {
//           stack.push(node);
//         }
//       }
//     }
//   }
// }
// const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
// const visited = Array(7).fill(false);

// dfs(graph, 0, visited)
// // 0 4 3 2 5 1

function dfs(graph, visited) {
  const stack = [[0, -1]];

  while (stack.length) {
    let [cur, parent] = stack.pop();

    if (visited[cur]) {
      continue;
    }

    stack.push([cur, parent]);
    visited[cur] = true;
    console.log(cur)
    for (const node of graph[cur]) {
      if (!visited[node]) stack.push([node, cur])
    }
  }
}
const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(7).fill(false);

dfs(graph, 0, visited)