import { styles } from '@/configs/constant'

const CoursePart = () => {
  return (
    <div  className="py-5">
      <h1
      style={{fontSize:"40px",fontWeight:"bold"}}
      className={`${styles.title}`}
      >
      Expand Your Career{" "} 
      <span
      style={{fontSize:"40px",fontWeight:"bold"}}
      className={`text-gradient ${styles.title}`}
      >
       Opportunity
      </span>
      <br />
      Opportunity With Our Courses
      </h1>
    </div>
  )
}

export default CoursePart
