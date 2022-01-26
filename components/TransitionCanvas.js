import React from 'react'
import { motion } from 'framer-motion'

export const transition = { duration: 0.9, ease: [0.6, 0.01, -0.05, 0.9] }

export default function TransitionCanvas() {

    return (
        <motion.div
            className="w-screen h-screen fixed z-40 inset-0 bg-black-primary"
            initial={{ x: '100%' }}
            animate={{ x: ['0%', '-100%'] }}
            exit={{ x: '0%' }}
            transition={transition}
        />
    )
}
