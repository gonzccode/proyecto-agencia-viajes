export const customFetch = (trips) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(trips)
        }, 2000)
    })
};