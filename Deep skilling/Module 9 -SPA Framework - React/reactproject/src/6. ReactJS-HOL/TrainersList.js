import trainers from "./TrainersMock";
import { Link } from "react-router-dom";

function TrainersList(){
    return(
        <div>
            <h3>Trainers List</h3>
            <ul>
                {trainers.map(t=>{
                    return(
                    <li key={t.trainerId}>
                        <Link to={`/trainers/${t.trainerId}`}>
                            {t.name}
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TrainersList;