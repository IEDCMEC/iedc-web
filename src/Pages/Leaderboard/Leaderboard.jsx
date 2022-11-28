import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import "../../css/leaderboard.css";

export default function Leaderboard() {
    //environment keys to be stored in .env
    const token = process.env.REACT_APP_TOKEN;
    const key = process.env.REACT_APP_KEY;
    const listId = process.env.REACT_APP_LIST_ID;
    const boardId = process.env.REACT_APP_BOARD_ID;
    //state to store map linking memberId to memberName and points
    const [members, setMembers] = useState({});
    const [memberNames, setMemberNames] = useState({});

    //temporary variables to set states
    let members2 = {};
    let memberNames2 = {};
    let sortedMembers;

    //function to make mapping from member_id to member_name
    const getMemberNames = () => {
        const url =
            "https://api.trello.com/1/boards/" +
            boardId +
            "/members?key=" +
            key +
            "&token=" +
            token;
        fetch(url, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((text) => {
                text.map((member) => {
                    memberNames2[member.id] = member.fullName;
                });

                setMemberNames(memberNames2);
            })
            .catch((err) => console.error(err));
    };

    //function to map each member_id to leaderboard points
    const getPoints = () => {
        getMemberNames();

        const url =
            "https://api.trello.com/1/lists/" + listId + "/cards?key=" + key + "&token=" + token;
        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((text) => {
                text.map((item) => {
                    item.idMembers.map((id) => {
                        members2[id] ? (members2[id] = members2[id] + 5) : (members2[id] = 5);
                    });
                });

                sortedMembers = Object.entries(members2).sort((a, b) => b[1] - a[1]);

                setMembers(sortedMembers);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getPoints();
    }, []);

    return (
        <>
            <div className="leaderboard-container">
                <div className="leaderboard">
                    <h2>
                        <FaTrophy className="trophy" size="2rem" />
                        Leaderboard
                    </h2>
                    <ol>
                        {Object.entries(members).map(([key, value], index) => {
                            return (
                                <li>
                                    <span className="rank">{index + 1}</span>
                                    <span className="name">{memberNames[value[0]]}</span>
                                    <span className="score">{value[1]}</span>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
