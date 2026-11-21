
import React from 'react'
import './TeamPage.styles.css'
import linkedinIcon from '../../Assets/linkedin-icon.png'

const Card = ({ name, designation, imageUrl, linkedin }) => {
    return (
        <div className="team-member-column">
            <div className="team-member-block">
                <div>
                    <img
                        className="circle-icon"
                        src={imageUrl}
                        alt={name}
                    />
                </div>

                <div className="ln-icon-block">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="ln-icon"
                            src={linkedinIcon}
                            alt="LinkedIn"
                        />
                    </a>
                </div>

                <div className="black-text">
                    <h5 className="team-member-name">{name}</h5>
                    <p className="team-member-designation">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
