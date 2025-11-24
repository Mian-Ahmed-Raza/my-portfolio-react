import React from 'react'
import styles from './Testimonials.module.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Testimonials = () => {

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart GmbH",
      text: "Carry delivered an exceptional e-commerce platform that exceeded our expectations. The site handles 10,000+ daily users flawlessly. Professional, skilled, and great communication!",
      rating: 5
    },
    {
      name: "Michael Schmidt",
      role: "Product Manager, DigitalFlow",
      text: "Outstanding full-stack developer! Built our SaaS platform from scratch with React and Node.js. Delivered on time, handled complex requirements with ease. Highly recommend!",
      rating: 5
    },
    {
      name: "Anonymous Client",
      role: "Startup Founder",
      text: "Carry transformed our idea into a fully functional MVP in just 6 weeks. The code quality is excellent, well-documented, and the app performs beautifully. Will definitely work together again!",
      rating: 5
    }
  ]

  return (
    <div id='testimonials' className={styles.testimonials}>

        <div className={styles.testimonialsTitle}>

            <h1>Client Testimonials</h1>

            <img src={theme_pattern} alt="theme pattern" width={130} height={130} loading="lazy" />

        </div>

        <div className={styles.testimonialsContainer}>

            {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                    <div className={styles.rating}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                    </div>
                    <p className={styles.testimonialText}>"{testimonial.text}"</p>
                    <div className={styles.clientInfo}>
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                    </div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Testimonials
