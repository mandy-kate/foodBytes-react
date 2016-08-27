export const next = (state) => {
    console.log("recieve action creators")
    return {
        type: 'NEXT'
    }
}

export const setState = (state) => {
    return {
        type: 'setstate',
        state: state
    }
}