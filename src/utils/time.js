export const timeLeft = (deadline) => {
    const now = new Date()

    const diff = (deadline.getTime() - now.getTime()) / 1000

    const m = Math.floor(diff / 60)
    const h = Math.floor(diff / 3600)
    const d = Math.floor(diff / 86400)
    const w = Math.floor(diff / (86400 * 7))

    const ret = {
        text: '',
        color: 'green'
    }

    if (w != 0)
        ret.text = `${w} week`
    else if (d != 0)
        ret.text = `${d} day`
    else if (h != 0) {
        ret.text = `${h} hour`
        if(h < 2)
            ret.color = `orange`
        if(h < 1)
            ret.color = 'red'
    } else if (m != 0) {
        ret.text = `${m} minute`
        ret.color = `red`
    } else {
        ret.text = 'few sec'
        ret.color = 'red'
    }

    return ret
}

export const getRoundDate = () => {
    const date = new Date()
    return new Date(Math.ceil(date.getTime() / 3600000) * 3600000)
}