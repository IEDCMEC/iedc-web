import React from 'react'
import './TeamPage.styles.css'
import linkedinIcon from '../../Assets/linkedin-icon.png'

const Card = ({ spacingId, name, designation, imageUrl, linkedin }) => {
    const offSpaced = [2, 5, 8, 11, 13, 14, 16, 17, 19, 20, 21]
    let alignmentClass = "col s12 m6 l4";
    if (spacingId === 20)
        alignmentClass = "col s12 m6 l6"
    else if (spacingId === 21)
        alignmentClass = "col s12 m12 l4"
    else if (spacingId === 9)
        alignmentClass = "col s12 m12 l4"

    return (
        <div className={alignmentClass}>
            <div className={offSpaced.includes(spacingId) ? "team-member-block offspace" : "team-member-block"}>
                <div>
                    <img className="circle-icon" src={imageUrl} alt={name} />
                </div>
                <div className="ln-icon-block">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="ln-icon" src={linkedinIcon} alt="linkedIN" />
                    </a>
                </div>
                <div className="black-text">
                    <h5 className="team-member-name">{name}</h5>
                    <p className="team-member-designation">{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

