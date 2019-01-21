let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname: first, lastname: last, social: { facebook: fb }, age = 25} = user;
console.log(first, last, fb, age);

function post(url, {data: { firstname, lastname }, cache}) {
    console.log(firstname, lastname, cache);
}

let result = post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

let { firstname, lastname, social: { twitter } } = getUserInfo();

console.log(firstname, lastname, twitter);