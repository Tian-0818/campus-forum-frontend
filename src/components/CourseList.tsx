// frontend/src/components/CourseList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Course {
  courseId: string;
  name: string;
  teacher: string;
}

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get('/api/courses').then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      {courses.map(course => (
        <div key={course.courseId}>
          <h3>{course.name}</h3>
          <p>教师：{course.teacher}</p>
          <button onClick={() => window.location.href=`/course/${course.courseId}`}>
            查看评价
          </button>
        </div>
      ))}
    </div>
  );
};