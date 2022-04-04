const possibleGrades = [-3, 0, 2, 4, 7, 10, 12, 'A+', 'A', 'B', 'C', 'D', 'F'];

class Grade {
    constructor(grade, gradeSystem) {
        if (possibleGrades.includes(grade)) {
            this.grade = grade;
        } else {
            throw 'Invalid grade value!';
        }

        if (gradeSystem == 'DK' || gradeSystem == 'USA') {
            this.gradeSystem = gradeSystem;
        } else {
            throw 'Invalid grade system input!';
        }
    }

    convert() {
        let convertedGrade;
        switch (this.gradeSystem) {
            case 'DK':
                if (this.grade == 12) {
                    convertedGrade = 'A+';
                } else if (this.grade == 10) {
                    convertedGrade = 'A';
                } if (this.grade == 7) {
                    convertedGrade = 'B';
                } else if (this.grade == 4) {
                    convertedGrade = 'C';
                } else if (this.grade == 2) {
                    convertedGrade = 'D';
                } else if (this.grade == 0 || this.grade == -3) {
                    convertedGrade = 'F';
                }
                break;

            case 'USA':
                if (this.grade == 'A+') {
                    convertedGrade = 12;
                } else if (this.grade == 'A') {
                    convertedGrade = 10;
                } if (this.grade == 'B') {
                    convertedGrade = 7;
                } else if (this.grade == 'C') {
                    convertedGrade = 4;
                } else if (this.grade == 'D') {
                    convertedGrade = 2;
                } else if (this.grade == 'F') {
                    convertedGrade = [0, -3];
                }
                break;
        }
        return `${this.grade} in ${this.gradeSystem} is equal to ${convertedGrade}`;
    }
}


module.exports = Grade;