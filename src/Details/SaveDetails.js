import database from '../Firebase/FirebaseInit';

const saveDetails = (data) => {
    return new Promise(async (resolve, reject) => {

        console.log(data)
        let today = new Date();
        var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        let changeData = {
            name: data.inputName,
            roomName: data.inputRoomName,
            createdDate: fecha,
            occupation: data.inputOccupation,
            nativePlace: data.inputNativePlace,
            roomCode: data.inputRoomCode
        }
        var result = await database.ref('homedetails').push().set(changeData);
        resolve(result);
        console.log(result)

    })
}

const editDetails = (id, data) => {
    return new Promise(async (resolve, reject) => {

        let today = new Date();
        var fecha = `${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`;
        let changeData = {
            name: data.inputName,
            roomName: data.inputRoomName,
            createdDate: fecha,
            occupation: data.inputOccupation,
            nativePlace: data.inputNativePlace,
            roomCode: data.inputRoomCode
        }
        var result = await database.ref('homedetails/' + id).update(changeData);
        resolve(result);
        console.log(result)

    })
}

export { saveDetails, editDetails };