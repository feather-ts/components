export const Delayed = (time: number) => (proto: any, method: string) => {
    const old = proto[method]
    Object.defineProperty(proto, method, {
        value: function() {
            const args = arguments
            setTimeout(() => old.apply(this, args), time)
        }
    })
}
