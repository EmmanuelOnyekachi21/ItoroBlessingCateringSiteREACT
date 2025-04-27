import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const ButtonEffect = ({title}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.button
            style={{
                position: 'relative',
                backgroundColor: isHovered ? '#f2f2f2' : 'rgb(var(--orange))',
                border: '1px solid #ccc',
                color: '#000',
                padding: '10px 20px',
                transition: 'background-color 0.3s ease',
                overflow: 'hidden', // ensures arrow stays inside even if animated
            }}
            onClick={() => navigate('/menu')}
            whileHover={{ scaleX: 1.05 }}
            className='d-inline-flex btn align-items-center gap-2 mb-3'
            onHoverStart={() => setIsHovered(!isHovered)}
            onHoverEnd={() => setIsHovered(!isHovered)}
        >
            {title}

            <motion.span
                animate={{
                    x: isHovered ? 20 : 0,
                    opacity: isHovered ? 0 : 1
                }}
                transition={{
                    type: 'tween',
                    duration: 0.4
                }}
                className='d-inline-block'
            >
                <ArrowRight />
            </motion.span>

        </motion.button>
    )
}

export default ButtonEffect