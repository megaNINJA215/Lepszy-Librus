import AsyncStorage from '@react-native-async-storage/async-storage';

(global as any).grades = [
    { scale: 6, name: "Biologia", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 100, name: "Chemia", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Fizyka", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Geografia", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Historia", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Informatyka", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Angielski", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Niemiecki", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "Polski", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 100, name: "Matematyka", gradesData: { grades: [], average: null, predicted: null } },
    { scale: 6, name: "P.P.", gradesData: { grades: [], average: null, predicted: null } }
]
const storeData = async () => {
    try {
        await AsyncStorage.setItem('average', String((global as any).average));
        await AsyncStorage.setItem('predicted', String((global as any).predicted));
        for (let i = 0; i < 11; i++) {
            await AsyncStorage.setItem((global as any).grades[i].name, JSON.stringify((global as any).grades[i].gradesData));
        }
    } catch (e) {
        console.log(e);
    }
};

export const getData = async (setData: any) => {
    const subjects = ['Biologia', 'Chemia', 'Fizyka', 'Geografia', 'Historia', 'Informatyka', 'Angielski', 'Niemiecki', 'Polski', 'Matematyka', 'P.P.'];
    try {
        (global as any).average = Number(await AsyncStorage.getItem('average')) || 0;
        (global as any).predicted = Number(await AsyncStorage.getItem('predicted')) || 0;
        for (let i = 0; i < 11; i++) {
            const jsonValue = await AsyncStorage.getItem(subjects[i]);

            if (jsonValue !== null) {
                (global as any).grades[i].gradesData = JSON.parse(jsonValue);
            }
        }
        setData(true);
    } catch (e) {
        console.log(e);
    }
};




export function updateGrades(subject: String) {
    const subjectIndex = (global as any).grades.findIndex((item: GradeList) => item.name == subject);
    let sum = 0;
    let average = 0;
    let predicted = 0;

    if ((global as any).grades[subjectIndex].gradesData.grades.length == 0) {
        (global as any).grades[subjectIndex].gradesData.average = null;
        (global as any).grades[subjectIndex].gradesData.predicted = null;
    } else {
        (global as any).grades[subjectIndex].gradesData.grades.forEach((grade: Grade) => {
            sum += grade.value;
        });
        average = sum / (global as any).grades[subjectIndex].gradesData.grades.length;
        switch ((global as any).grades[subjectIndex].scale) {
            case 6:
                if (average >= 5.5)
                    predicted = 6;
                else if (average >= 4.75)
                    predicted = 5;
                else if (average >= 3.75)
                    predicted = 4;
                else if (average >= 2.75)
                    predicted = 3;
                else if (average >= 1.75)
                    predicted = 2;
                else
                    predicted = 1;
                break;
            case 100:
                if (average >= 95)
                    predicted = 6;
                else if (average >= 85)
                    predicted = 5;
                else if (average >= 70)
                    predicted = 4;
                else if (average >= 55)
                    predicted = 3;
                else if (average >= 40)
                    predicted = 2;
                else
                    predicted = 1;
                break;
        }
        (global as any).grades[subjectIndex].gradesData.predicted = predicted;
        (global as any).grades[subjectIndex].gradesData.average = Math.round(average * 100) / 100;
    }

    sum = 0;
    let nullNumber = 0;
    average = 0;
    predicted = 0;

    (global as any).grades.forEach((subject: GradeList) => {
        if (subject.gradesData.predicted == null) {
            nullNumber++;
        } else {
            sum += subject.gradesData.predicted;
        }
    });
    average = nullNumber == 11 ? 0 : sum / (11 - nullNumber);

    if (average >= 5.5)
        predicted = 6;
    else if (average >= 4.75)
        predicted = 5;
    else if (average >= 3.75)
        predicted = 4;
    else if (average >= 2.75)
        predicted = 3;
    else if (average >= 1.75)
        predicted = 2;
    else
        predicted = 1;

    (global as any).average = Math.round(average * 100) / 100;
    (global as any).predicted = predicted;
    storeData();
}