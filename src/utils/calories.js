export const calculateDailyRate = userData => {
    const { age, height, weight, gender } = userData;

    return gender === 'male'
        ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
        : 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
};
