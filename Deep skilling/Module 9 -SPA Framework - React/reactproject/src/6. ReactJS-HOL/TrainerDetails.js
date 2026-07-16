import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails(){
    const {id} = useParams();
    const trainer = trainers.find( t=> t.trainerId === parseInt(id))
    if(!trainer)
        return <h3>Trainer not found</h3>
    return(
        <div>
            <p>ID: {trainer.trainerId}</p>
            <p>
                Name: {trainer.name}
            </p>

            <p>
                Email: {trainer.email}
            </p>

            <p>
                Phone: {trainer.phone}
            </p>

            <p>
                Technology:{" "}
                {trainer.technology}
            </p>

            <p>
                Skills: {trainer.skills}
            </p>
        </div>
    )
}

export default TrainerDetails;