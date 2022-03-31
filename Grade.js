class Grade {
    convert(gradeToConvert, gradeSystem) {
        let convertedGrade;
        switch (gradeSystem) {
            case 'DK':
                if (gradeToConvert == 12) {
                    convertedGrade = 'A+';
                } else if (gradeToConvert == 10) {
                    convertedGrade = 'A';
                } if (gradeToConvert == 7) {
                    convertedGrade = 'B';
                } else if (gradeToConvert == 4) {
                    convertedGrade = 'C';
                } else if (gradeToConvert == 2) {
                    convertedGrade = 'D';
                } else if (gradeToConvert == 0 || gradeToConvert == -3) {
                    convertedGrade = 'F';
                }
                break;

            case 'USA':
                if (gradeToConvert == 'A+') {
                    convertedGrade = 12;
                } else if (gradeToConvert == 'A') {
                    convertedGrade = 10;
                } if (gradeToConvert == 'B') {
                    convertedGrade = 7;
                } else if (gradeToConvert == 'C') {
                    convertedGrade = 4;
                } else if (gradeToConvert == 'D') {
                    convertedGrade = 2;
                } else if (gradeToConvert == 'F') {
                    convertedGrade = [0, -3];
                }
                break;
        }
        return `${gradeToConvert} in ${gradeSystem} is equal to ${convertedGrade}`;
    }
}


module.exports = Grade;