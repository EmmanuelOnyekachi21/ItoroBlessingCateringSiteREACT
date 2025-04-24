import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import styles from './Testimonial.module.css';

const MAX_LENGTH = 170;

const TestimonialCard = ({ testimony }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(prev => !prev);

    const displayText = expanded ? testimony.testimonial :
        (testimony.testimonial.length > MAX_LENGTH
            ? testimony.testimonial.slice(0, MAX_LENGTH) + "..."
            : testimony.testimonial);

    return (
        <div className="mx-auto" style={{ width: '70%' }}>
            <div className="p-1 border bg-white shadow-sm rounded h-100 d-flex flex-column justify-content-between">
                <Quote size={36} style={{ color: 'rgb(var(--orange))', opacity: 0.5 }} />
                <p className={`mb-0 mt-2 text-muted fst-italic ${styles.textHeight}`}>
                    {displayText}
                    {testimony.testimonial.length > MAX_LENGTH && (
                        <span
                            onClick={toggleExpand}
                            className="ms-1"
                            style={{ cursor: 'pointer', fontWeight: 'bold', color: 'rgb(var(--orange))' }}
                        >
                            {expanded ? 'Show less' : 'Read more'}
                        </span>
                    )}
                </p>
                <div className="d-flex gap-2">
                    <div className={`${styles.imageDiv}`}>
                        <img
                            src={testimony.avatar}
                            className={`w-100 h-100 rounded-circle ${styles.image}`}
                            alt={testimony.name}
                        />
                    </div>
                    <div className="gap-0">
                        <h5 className="mb-0">{testimony.name}</h5>
                        <p className="text-muted small">{testimony.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
