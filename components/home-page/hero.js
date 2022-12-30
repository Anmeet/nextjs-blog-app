import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/amit.jpeg'
          alt='An image showing Amit'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Amit</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React, Next and Remix.
      </p>
    </section>
  )
}

export default Hero
