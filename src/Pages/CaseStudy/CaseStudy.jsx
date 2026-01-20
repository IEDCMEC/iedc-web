import React, { useState, useEffect } from "react";
import "./CaseStudy.styles.css";
import Card from "./Card";

const CaseStudy = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/IEDCMEC/data/master/case_study.json")
            .then((response) => response.json())
            .then((data) => setCaseStudies(data));
    }, []);

    return (
        <div>
            <div className="row">
                {caseStudies.map((case_study) => {
                    return (
                        <Card
                            image={
                                "https://raw.githubusercontent.com/IEDCMEC/data/master/" +
                                case_study.url
                            }
                            title={case_study.name}
                            link={case_study.link}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudy;
