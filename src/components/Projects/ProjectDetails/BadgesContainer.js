import React, { useState } from 'react';
import { Badge } from "react-bootstrap";

import './BadgesContainer.css';

function BadgesContainer({ badges, badgeStyles, justify }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const shouldApplyStyles = badgeStyles ? true : false;

    const handleMouseEnter = (itemIndex) => {
        setHoveredIndex(itemIndex);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    const badgeHoverStyles = {
        transform: 'translateY(-0.25em)',
        boxShadow: '0 8px 10px -2px #9900F0',
    }

    const mergedStyles = { ...badgeStyles, ...badgeHoverStyles, ...justify };

    return (
        <div style={justify} className="badges-container">
            {badges.map((item, index) => (
                <Badge
                    key={item.id}
                    pill
                    bg="dark"
                    style={shouldApplyStyles && hoveredIndex === index ? mergedStyles : shouldApplyStyles ? badgeStyles : null}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    {item}
                </Badge>
            ))}
        </div>
    )
}

export default BadgesContainer;