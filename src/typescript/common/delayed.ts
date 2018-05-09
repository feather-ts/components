export const Delayed = (time: number) => (proto: any, method: string) => {
    const old = proto[method]
    Object.defineProperty(proto, method, {
        value: function() {
            const args = arguments
            setTimeout(() => old.apply(this, args), time)
        }
    })
}

export const throttle = (func, limit) => {
    let inThrottle
    return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}
