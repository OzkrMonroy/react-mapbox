export const getUserLocation = async (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([coords.longitude, coords.latitude])
            },
            (error) => {
                alert('An error occured while getting the user location')
                console.log(error);
                reject()
            }
        )
    })
}