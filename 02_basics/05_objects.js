// Destructuring {}

const course = {
    coursename: "js in Hindi",
    price: "99",
    courseInstructor: "Sudip"
}
// course.courseInstructor
// Ab agar 10 baar chaiye courseinstructor name to 10 baar (course.courseInstructor) itna bada likhne se acha
// Hum ye neeche wala syntax likh lena chaiye jisse fir sir name likha k waha call hojaayega 
const {courseInstructor} = course
console.log(courseInstructor);

