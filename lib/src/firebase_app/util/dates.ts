import { Timestamp } from "firebase/firestore";

export function setDateToMidnight(input?: Timestamp): Timestamp | undefined {
    if (!input) return input;
    console.log("input is not null or undefined. value is: " + input);

    if (input.toDate()) {
        const date = input.toDate();
        date.setHours(0, 0, 0, 0);
        return Timestamp.fromDate(date);
    }

    return input;
}
