declare global {
    var grades: GradeList[];
}

global.animate = false;
global.gotData = false;
global.grades = [
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
];
global.average = 0;
global.predicted = 0;

type Grade = {
    value: number,
    date: string,
    description: string
}
type GradesData = {
    grades: Grade[],
    average: number | null,
    predicted: number | null,
}
type GradeList = {
    scale: number,
    name: string,
    gradesData: GradesData
}
type ModalData = {
    gradeData: Grade,
    subject: String,
    color: any
}

