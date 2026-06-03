'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { BentoCard } from './BentoCard';
import { ArrowRight, Calendar, Clock } from './Icons';
import { BlogPost } from '../data/blogs';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 70, 
      damping: 14 
    } 
  }
};

interface BlogsGridProps {
  posts: BlogPost[];
  light?: boolean;
}

export const BlogsGrid: React.FC<BlogsGridProps> = ({ posts, light = false }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 w-full"
    >
      {posts.map((post, idx) => (
        <motion.div key={idx} variants={itemVariants} className="h-full">
          <Link href={`/blogs/${post.slug}`} className="block group cursor-pointer h-full">
            <BentoCard 
              className={`p-0! group h-[480px] w-full flex flex-col justify-start border transition-all duration-500 ${
                light 
                  ? 'border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300' 
                  : 'border-white/5 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]'
              }`} 
              bgClass={light ? 'bg-white/75 backdrop-blur-xl' : 'bg-[#07070c]/55 backdrop-blur-2xl'} 
              hoverEffect
            >
              {/* Featured Image Section */}
              <div className={`relative h-[200px] w-full overflow-hidden border-b ${
                light ? 'border-slate-100 bg-[#f8fafc]' : 'border-white/5 bg-[#030305]'
              }`}>
                {/* Visual shade overlay */}
                <div className={`absolute inset-0 z-10 ${
                  light 
                    ? 'bg-gradient-to-t from-white/10 via-transparent to-transparent' 
                    : 'bg-gradient-to-t from-[#07070c] via-[#07070c]/10 to-transparent'
                }`} />
                <Image 
                  src={post.image} 
                  alt={`${post.title} — ${post.description}`} 
                  width={500} 
                  height={300} 
                  quality={85}
                  priority={idx < 3}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                
                {/* Category Badge over Image */}
                <span className={`absolute top-4 left-4 z-20 px-3 py-1 border rounded-full font-mono text-[9px] uppercase tracking-widest backdrop-blur-md shadow-lg ${
                  light 
                    ? 'bg-white/95 border-slate-200/60 text-indigo-600' 
                    : 'bg-[#030305]/80 border-white/10 text-[#22d3ee]'
                }`}>
                  {post.category}
                </span>
              </div>

              {/* Text Content Area */}
              <div className="relative z-20 p-6 flex flex-col flex-grow justify-between h-[280px]">
                <div>
                  {/* Meta data row */}
                  <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px] uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className={`text-[19px] leading-[1.3] font-syne font-bold mb-3 tracking-[-0.01em] transition-colors duration-300 line-clamp-2 ${
                    light ? 'text-slate-800 group-hover:text-[#6366f1]' : 'text-white group-hover:text-[#22d3ee]'
                  }`}>
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className={`font-sans font-light text-xs leading-[1.6] line-clamp-3 mb-4 ${
                    light ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {post.description}
                  </p>
                </div>

                {/* Read Link Action */}
                <div className={`pt-4 border-t flex items-center justify-between ${
                  light ? 'border-slate-100' : 'border-white/5'
                }`}>
                  {/* Miniature tags list */}
                  <div className="flex gap-1.5 overflow-hidden max-w-[65%]">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={`text-[8px] font-mono uppercase tracking-wider truncate ${
                        light ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>

                  <span className={`flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    light 
                      ? 'text-indigo-600 group-hover:text-slate-900' 
                      : 'text-[#22d3ee] group-hover:text-white'
                  }`}>
                    Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </BentoCard>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
