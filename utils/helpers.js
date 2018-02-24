export const isBottom = el => el.scrollHeight - el.scrollTop === el.clientHeight

export const wait = ms => new Promise(r => setTimeout(r, ms))
