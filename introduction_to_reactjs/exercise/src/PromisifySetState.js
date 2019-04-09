export default (called, data, ...args) => (
    new Promise(resolve => {
        called.setState({
            ...data
        }, () => resolve(args));
    })
)