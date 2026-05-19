export const saveCar = (carData) => {

  const existingCars =
    JSON.parse(
      localStorage.getItem("motopepCars")
    ) || [];

  const updatedCars = [
    carData,
    ...existingCars,
  ];

  localStorage.setItem(
    "motopepCars",
    JSON.stringify(updatedCars)
  );

};

export const getCars = () => {

  return (
    JSON.parse(
      localStorage.getItem("motopepCars")
    ) || []
  );

};

export const getCarById = (id) => {

  const cars = getCars();

  return cars.find(
    (car) => car.id.toString() === id
  );

};

export const deleteCar = (id) => {

  const cars = getCars();

  const updatedCars = cars.filter(
    (car) => car.id !== id
  );

  localStorage.setItem(
    "motopepCars",
    JSON.stringify(updatedCars)
  );

};