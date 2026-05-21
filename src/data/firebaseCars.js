import {

  collection,
  addDoc,
  onSnapshot,
  getDocs,
  updateDoc,
  doc,

} from "firebase/firestore";

import { db } from "../utils/firebase";

/* SAVE PENDING CAR */
export const savePendingCar = async (
  carData
) => {

  try {

    await addDoc(

      collection(db, "pendingCars"),

      {
        ...carData,
        status: "pending",
        createdAt: Date.now(),
      }

    );

    console.log("Car Submitted");

  } catch (error) {

    console.error(error);

  }

};

/* REALTIME APPROVED CARS */
export const subscribeApprovedCars = (
  callback
) => {

  return onSnapshot(

    collection(db, "approvedCars"),

    (snapshot) => {

      const cars =
        snapshot.docs.map((doc) => ({

          id: doc.id,
          ...doc.data(),

        }));

      callback(cars);

    }

  );

};

/* TOTAL APPROVED */
export const getApprovedCount =
  async () => {

    const snapshot =
      await getDocs(
        collection(
          db,
          "approvedCars"
        )
      );

    return snapshot.size;

};

/* TOTAL PENDING */
export const getPendingCount =
  async () => {

    const snapshot =
      await getDocs(
        collection(
          db,
          "pendingCars"
        )
      );

    return snapshot.size;

};
/* MARK AS SOLD */
/* MARK AS SOLD */
/* MARK AS SOLD */
export const markCarAsSold =
  async (carId) => {

    try {

      const carRef = doc(
        db,
        "approvedCars",
        carId
      );

      await updateDoc(

        carRef,

        {
          sold: true,
        }

      );

      console.log(
        "Car marked as sold"
      );

    } catch (error) {

      console.error(
        "MARK SOLD ERROR:",
        error
      );

    }

};