import database from '../Firebase/FirebaseInit';

const saveDetails = (data) => {
    return new Promise(async (resolve, reject) => {

        console.log(data)
        var result = await database.ref('homedetails').push().set(data);
        resolve(result);
        console.log(result)

    })
}

export default saveDetails;