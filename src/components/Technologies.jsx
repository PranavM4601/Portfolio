import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from 'framer-motion'


const iconVarients =(duration)=> ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",

        },
    }
})


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{ opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity:1 , x:0}} 
        initial={{ opacity:0, x:-100}}
        transition={{duration:1.5}}
        animate="animate"
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants= {iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl ' />  
        </motion.div>
            <motion.div
            variants= {iconVarients(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCpp className='text-7xl text-blue-500' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div
            variants= {iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-blue-400' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-600' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-400' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl ' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-blue-800' />
            </motion.div>
            <motion.div 
            variants= {iconVarients(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
            
            
        </motion.div>
    </div>
  )
}

export default Technologies