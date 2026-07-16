const percentToDec = (dec) =>{
    return (dec.toFixed(2)+"%")
}

const calScore = (total,goal) =>{
    return percentToDec(total/goal)
}

const CalculateScore = ({name,school,total,goal}) =>{
    return(
        <div>
            <h1>Student Details</h1>
            <p>Name: <span>{name}</span></p>
            <p>School: <span>{school}</span></p>
            <p>Total: <span>{total}</span> Marks</p>
            <p>Score: <span>{calScore(total,goal)}</span></p>
        </div>
    );
}

export default CalculateScore;