// src/pages/Home.tsx
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

const Home: React.FC = () => {
  return (
    <div id="home">
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="achievements"><Achievements /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Home;
