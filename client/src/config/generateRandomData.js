// config.js
import { fakerPL, fakerDE, fakerEN_US } from '@faker-js/faker'
import { applyErrors } from "../utils/errorUtils.js"

const localeMapping = {
    Poland: fakerPL,
    USA: fakerEN_US,
    Germany: fakerDE,
}

export const generateRandomData = (region, seed, errorCount) => {
    const fakerInstance = localeMapping[region] || "fakerEN_US";
    console.log(`Locale set to: ${fakerInstance}`)
    console.log(seed)
    fakerInstance.seed(Number(seed));

    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


    const data = {
        name: fakerInstance.person.fullName(),
        phone: fakerInstance.phone.number(),
        address: fakerInstance.location.streetAddress(),
        identifier: fakerInstance.string.uuid(),
    };
    const fieldsToApplyErrors = ['name', 'phone', 'address'];
    for (const key of fieldsToApplyErrors) {
        data[key] = applyErrors(data[key], errorCount, alphabet, seed);
    }

    return data;

};
