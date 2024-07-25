// Generador de números aleatorios con semilla
function seededRandom(seed) {
    const mask = 0xffffffff;
    let m_w = (123456789 + seed) & mask;
    let m_z = (987654321 - seed) & mask;

    return function () {
        m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
        let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
    }
}

// Genera un número entero aleatorio entre 0 y max (excluyendo max).
const getRandomInt = (max, rng) => Math.floor(rng() * max);

// Elimina un carácter aleatorio de la cadena str
const deleteCharacter = (str, rng) => {
    const index = getRandomInt(str.length, rng);
    return str.slice(0, index) + str.slice(index + 1);
};

// Añade un carácter aleatorio de alphabet en una posición aleatoria de la cadena str
const addCharacter = (str, alphabet, rng) => {
    const index = getRandomInt(str.length + 1, rng);
    const randomChar = alphabet[getRandomInt(alphabet.length, rng)];
    return str.slice(0, index) + randomChar + str.slice(index);
};

// Intercambia dos caracteres adyacentes en la cadena str
const swapCharacters = (str, rng) => {
    const index = getRandomInt(str.length - 1, rng);
    return str.slice(0, index) + str[index + 1] + str[index] + str.slice(index + 2);
};

const generateNoise = (length, alphabet, rng) => {
    let noise = '';
    for (let i = 0; i < length; i++) {
        noise += alphabet[getRandomInt(alphabet.length, rng)];
    }
    return noise;
};

export const applyErrors = (originalStr, errorCount, alphabet, seed) => {
    const rng = seededRandom(seed);

    // Si el número de errores es 1000 (o 10 en el slider), transformar todo el texto en "ruido"
    if (errorCount === 1000) {
        return generateNoise(originalStr.length, alphabet, rng);
    }

    let str = originalStr; // Usar la cadena original
    const originalLength = str.length;
    const maxErrorsPerType = Math.ceil(errorCount / 3);

    let deleteErrors = 0;
    let addErrors = 0;
    let swapErrors = 0;

    for (let i = 0; i < errorCount; i++) {
        const errorType = getRandomInt(3, rng);
        if (str.length === 0) {
            str = addCharacter(str, alphabet, rng);
            continue;
        }
        switch (errorType) {
            case 0:
                if (deleteErrors < maxErrorsPerType && str.length > 1) {
                    str = deleteCharacter(str, rng);
                    deleteErrors++;
                }
                break;
            case 1:
                if (addErrors < maxErrorsPerType) {
                    str = addCharacter(str, alphabet, rng);
                    addErrors++;
                }
                break;
            case 2:
                if (swapErrors < maxErrorsPerType && str.length > 1) {
                    str = swapCharacters(str, rng);
                    swapErrors++;
                }
                break;
            default:
                break;
        }
    }

    if (str.length > originalLength * 2) {
        str = str.slice(0, originalLength * 2);
    }

    return str;
};
