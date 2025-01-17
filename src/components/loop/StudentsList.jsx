import React from 'react';
import students from '../../data/Students';

const StudentsList = () => {
    const studentsList = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} - {student.grade}
            </li>
        );
    });
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>{studentsList}</ul>
        </div>
    );
};

export default StudentsList;
