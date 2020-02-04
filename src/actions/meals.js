export const getMeals = () => ({
  type: 'MEALS_GET_MEALS',
});

export const setMeals = meals => ({
  type: 'MEALS_SET_MEALS',
  payload: meals,
});

export const addMeal = meal => ({
  type: 'MEALS_ADD_MEAL',
  payload: meal,
});
