const obj = { count : 42 };

const objCopy = Object.assign({}, obj);

++objCopy.count

console.log(objCopy.count);

console.log(obj.count);

const obj1 = { name: { first: 'Siddhesh', last: 'Joshi' } };
const copy = JSON.parse(JSON.stringify(obj1));
copy.name.first = 'Sid';
console.log(obj1.name.first);


const obj2 = { name: { first: 'Siddhesh', last: 'Joshi' } };
const copy1 = Object.assign({}, obj2);
copy1.name.first = 'Sid';
console.log(obj2.name.first);

let myDetails = {
    firstName: 'Siddhesh',
    lastName: 'Joshi',
    'address': {
        city: 'Akola',
        details:{
            Block: 'C',
            PlotNo: 23,
            Road: 'Ring Road',
            pinCode: 444001
        }
    }
}


const nestedObject = (givenObject)  => {
    let copyObject = Array.isArray(givenObject) ? [] : {};

    if(givenObject === null || typeof(givenObject) !== 'object') {
        return givenObject;
    }

    for(let key in givenObject) {
        let value = givenObject[key];
        copyObject[key] = nestedObject(value);
    }
    return copyObject;
}

let nameClone =  nestedObject(myDetails);
nameClone.address.city = "Pune"
nameClone.address.details.PlotNo = 32;

console.log(nameClone);

const nameCloneParse = JSON.parse(JSON.stringify(myDetails))
nameCloneParse.address.details.pinCode = 444004;
nameCloneParse.address.details.Road = 'Gorakshan Road';
nameCloneParse.firstName = 'Sid'

console.log(nameCloneParse)