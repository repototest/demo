// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba

function f(str) {
  let queue = str.split('')
  let temp = '', current = ''
  let result = []
  g(queue, result, temp, current)
  result.sort()
  return [...new Set(result)]
}

function g(queue, result, temp, current) {
  current +=temp
  if (queue.length === 0) {
    result.push(current)
    return
  }
  for(var i = 0;i<queue.length;i++) {
    var temp = queue.shift()
    g(queue, result, temp, current)
    queue.push(temp)
  }
}

console.log(f('abcd'))