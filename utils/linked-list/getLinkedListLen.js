const getListLength = l => {
  let i = 0
  let p = l
  while (p) {
    i++
    p = p.next
  }
  return i
}
