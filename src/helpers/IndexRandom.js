
export function IndexRandom(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

export function LikesRandom() {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
}