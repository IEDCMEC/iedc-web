import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import "../../css/leaderboard.css";

const membersToIgnore = [
    "5e6f24eabbc33a4577ea263a",
    "627148d6438a494887a0e0d8",
    "61b4ac8c2c9e0c7f5d7ed2fc",
    "5ed759123b6ec761f20b6f0e", // Adi
];

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
            .then((members) => {
                members.map((member) => {
                    memberNames2[member.id] = {
                        id: member.id,
                        fullName: member.fullName,
                        userName: member.username,
                    };
                });

                setMemberNames(memberNames2);
            })
            .catch((err) => console.error(err));
    };

    //function to map each member_id to leaderboard points
    const getPoints = () => {
        getMemberNames();

        const url =
            "https://api.trello.com/1/lists/" +
            listId +
            "/cards?members=true&member_fields=avatarHash&key=" +
            key +
            "&token=" +
            token;
        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })

            .then((cards) => {
                cards.map((card) => {
                    card.members.map(({ id, avatarHash }) => {
                        memberNames2[id].avatarHash = avatarHash;

                        members2[id] ? (members2[id] = members2[id] + 5) : (members2[id] = 5);
                        card.labels.map(({ color, name }) => {
                            memberNames2[id].color = color;
                            memberNames2[id].label = name;

                            if (memberNames2[id].label[0] == "+") {
                                members2[id] += parseInt(memberNames2[id].label.slice(1)) - 5;
                            }
                        });
                    });
                });

                sortedMembers = Object.entries(members2).sort((a, b) => b[1] - a[1]);
                const filteredMembers = sortedMembers.filter(([memberId]) => {
                    return !membersToIgnore.includes(memberId);
                });

                setMembers(filteredMembers);
                setMemberNames(memberNames2);
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
                        <div className="leaderboard-heading">
                            <FaTrophy className="trophy" size="2rem" />
                            Leaderboard
                        </div>
                        <span>Tech Team</span>
                    </h2>
                    <ol>
                        {Object.entries(members)?.length ? (
                            Object.entries(members).map(([key, value], index) => {
                                return (
                                    <a
                                        className="white-text"
                                        key={index}
                                        target={"_blank"}
                                        href={
                                            "https://trello.com/b/yHzSIoBK/tech-team?filter=member:" +
                                            memberNames[value[0]]?.userName
                                        }
                                    >
                                        <li className="leaderboard-list">
                                            <span className="rank">{index + 1}</span>

                                            <img
                                                className="leaderboard-avatar"
                                                alt=" "
                                                src={`https://trello-members.s3.amazonaws.com/${
                                                    memberNames[value[0]]?.id
                                                }/${memberNames[value[0]]?.avatarHash}/50.png`}
                                            />
                                            <span className="name">
                                                {(memberNames[value[0]]?.fullName).toLowerCase()}
                                            </span>
                                            <span className="score">{value[1]}</span>
                                        </li>
                                    </a>
                                );
                            })
                        ) : (
                            <div className="center-align" style={{ margin: 50 }}>
                                <div className="preloader-wrapper active">
                                    <div className="spinner-layer spinner-blue-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="gap-patch">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ol>
                </div>
            </div>
        </>
    );
}
