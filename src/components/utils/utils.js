export const calcTotalPrice = items => items.reduce((acc, cap) => acc += cap.price ,1)
