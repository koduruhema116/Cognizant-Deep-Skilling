import React from "react";

class ListofPlayers extends React.Component{
    render(){
        const players = [
            { name: "Virat", score: 95 },
            { name: "Rohit", score: 85 },
            { name: "Gill", score: 65 },
            { name: "Rahul", score: 72 },
            { name: "Pant", score: 45 },
            { name: "Hardik", score: 88 },
            { name: "Jadeja", score: 55 },
            { name: "Ashwin", score: 76 },
            { name: "Shami", score: 60 },
            { name: "Bumrah", score: 80 },
            { name: "Siraj", score: 50 }
        ];
        const low = players.filter(player=> player.score<70);
        return(
            <div>
                <h2>List of Players</h2>
                {players.map((player,idx)=>(
                    <p key={idx}>
                        {player.name} - {player.score}
                    </p>
                ))}

                <h2>Players with Score Below 70</h2>

                {low.map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))}
            </div>
        )
    }
}

export default ListofPlayers;