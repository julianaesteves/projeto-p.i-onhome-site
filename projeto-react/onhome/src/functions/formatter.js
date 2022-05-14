export function formatarCpf(ipt) {
    return formatter(ipt, '###.###.###-##');
}
export function formatarCep(ipt) {
    return formatter(ipt, '#####-###');
}
function formatter(value, mask) {
    const text = value.replace(/\D/g, '');
    const special = value.replace(/\d/g, '');
    if (special[special.length - 1] === value[value.length - 1]) return value.substring(0, value.length - 1);
    const size = text.length;
    if (size > 0) {
        let result = mask;
        for (const character of text) {
            result = result.replace('#', character);
        }
        const hash = result.indexOf('#');
        if (hash === -1) {
            return result;
        }
        return result.substring(0, hash);
    }
}
