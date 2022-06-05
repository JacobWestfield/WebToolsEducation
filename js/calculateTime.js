export default function calculateTime({h, m, s}) {
    if (s === 0 && m !== 0) {
        m -= 1;
        s += 59
    }
    if (m === 0 && h !== 0) {
        h -= 1;
        m += 59
    }
    return {h: h, m: m, s: s}
}

//пришлось придумать таймер без библиотеки луксон