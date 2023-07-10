import React, { useState } from 'react';
import { Container, Row, Col, Badge } from "react-bootstrap";

import './BadgesContainer.css';

function BadgesContainer({ badges, badgeStyles }) {
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

    const mergedStyles = { ...badgeStyles, ...badgeHoverStyles };

    return (
        <Container className="badges-container">
            <Row className="badges-row">
                {badges.map((item, index) => (
                    <Col className="badges-column" sm={3} md={2} lg={4} xl={3} xxl={3}>
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
                    </Col>

                ))}
            </Row>
        </Container>
    )
}

export default BadgesContainer;