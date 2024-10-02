import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import "../../css/leaderboard.css";
import { supabase } from "../../lib/supabaseClient";

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
    const [leaderboard, setLeaderboard] = useState();

    // Function to populate leaderboard data
    const fetchLeaderboardData = async () => {
        try {
            const members = await fetchMembers();
            const issues = await fetchIssues();

            let l = [];

            for (let member of members) {
                let points = 0;
                issues
                    .filter((issue) => issue.issue_assignee === member.username)
                    .forEach((issue) => {
                        points += issue.issue_points;
                    });
                l.push({
                    username: member.username,
                    name: member.name ? member.name : member.username,
                    points: points,
                    avatar: member.avatar_url,
                });
            }
            l.sort((a, b) => b.points - a.points);

            setLeaderboard(l);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchMembers = async () => {
        try {
            const { data, error } = await supabase.from("Users").select();

            if (error) {
                throw error;
            }

            return data;
        } catch (err) {
            console.error(err);
        }
    };

    const fetchIssues = async () => {
        try {
            const { data, error } = await supabase.from("Issues").select();

            if (error) {
                throw error;
            }

            return data;
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchLeaderboardData();
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
                        {leaderboard ? (
                            leaderboard.map((member, index) => {
                                return (
                                    <a
                                        className="white-text"
                                        key={index}
                                        target={"_blank"}
                                        href={`https://github.com/${member.username}`}
                                    >
                                        <li className="leaderboard-list">
                                            <span className="rank">{index + 1}</span>

                                            <img
                                                className="leaderboard-avatar"
                                                src={member.avatar}
                                            />
                                            <span className="name">{member.name}</span>
                                            <span className="score">{member.points}</span>
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
