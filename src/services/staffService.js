const getRandomElements = (data, numberOfElements) => {
    if(numberOfElements > data.length) return null;
    const elemnets = [];
    for (let i = 0; i < numberOfElements; i++) {
        let index = getRandomIndex(data.length);
        elemnets.push(data[index]);
        data.splice(index, 1);
    }
    return elemnets;
}

const getRandomIndex = length => Math.floor(Math.random() * length);

export const loadStaffData = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/fintekapps/react-site/master/data/staff.json")
        const data = await response.json()
        const staff = getRandomElements(data, 6);
        return staff;

    } catch (error) {
        console.log(error)
        return null;
    }

}
