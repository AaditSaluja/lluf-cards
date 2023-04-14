import Image from 'next/image'
import { Oswald } from 'next/font/google'
import styles from './page.module.css'



const inter = Oswald({ subsets: ['latin'] })

export function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export default function Cards() {
  return (

  <main className={styles.main}>
      <link rel="stylesheet" type="text/css" href="/components/MyCard.module.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    <div className="container">
      <div className="top">
        <div className="avatar_container">
          <Image
                src="/avatar.png"
                alt="Vercel Logo"
                width={800}
                height={800}
                className="avatar"
                priority
              />
        </div>
        <div className="title_container">
          
          <p className="firstName">Victoria</p>

          <p className="lastName">Wijerathnayapa</p>
        </div>
        {/* <div className="separator"></div> */}
      </div>
      <div className="bottom">
          <div className="bio bottom-section">
          
          {/* <div className='bottom-header bottom-text'>
            <i className="material-icons header-icon" >stream</i>
            <span className='bottom-header-text'>BIO</span>
          </div> */}
          <div className='bottom-desc-bio bottom-text'>I am a sophomore at the college studying AFVS. Design enthusiast who is learning to animate.</div>
        </div>
        {/* <div className="separator"></div> */}

          <div className="contact bottom-section">
            {/* <p className='bottom-header bottom-text'>CONTACT</p> */}
            <div className='bottom-text'>
              <a className='_' href='slackaccount@slack.com'>
              <div className="slack contact-box">
                <i className="material-icons my-icon" >fullscreen_exit</i>
                {/* <span className='slack'></span> */}
                @victoriawij
              </div>
              </a>
              <a className='_' href='mailto:johnjogndoe@gmail.com'>
              <div className="mail contact-box">
                <i className="material-icons my-icon" >mail</i>
                vwijerathnayapa@college.harvard.edu
              </div>
              </a>

            </div>
          </div>
          
          <div className="tools bottom-section">
            <div className='bottom-header bottom-text'>
              <i className="material-icons header-icon" >stream</i>
              <span className='bottom-header-text'>Projects</span>
            </div>
            <div className='bottom-desc bottom-text'>
              <ul className='bio-list proj-list'>
                <a className='proj-link' href='proj_website'><li className='list-elem proj-list-elem'>Project Name</li></a>
                <a className='proj-link' href='proj_website'><li className='list-elem proj-list-elem'>Supernova</li></a>
                <a className='proj-link' href='proj_website'><li className='list-elem proj-list-elem'>Desk Model</li></a>
                <a className='proj-link' href='proj_website'><li className='list-elem proj-list-elem'>Portraits</li></a>
                <a className='proj-link' href='proj_website'><li className='list-elem proj-list-elem'>Buttons</li></a>
              </ul>
            </div>
          </div>
          <div className="projects bottom-section">
            <div className='bottom-header bottom-text'>
              <i className="material-icons header-icon" >stream</i>
              <span className='bottom-header-text'>Tools</span>
            </div>
              <div className='bottom-desc bottom-text'>
              <ul className='bio-list tool-list'>
                <li className='list-elem tool-list-elem'>After Effects</li>
                <li className='list-elem tool-list-elem'>xD</li>
                <li className='list-elem tool-list-elem'>Blender</li>
                <li className='list-elem tool-list-elem'>Illustrator</li>
                <li className='list-elem tool-list-elem'>Unity</li>
                <li className='list-elem tool-list-elem'>Garage Band</li>
                <li className='list-elem tool-list-elem'>Photoshop</li>
              </ul>
            </div>
            
          </div>
          
        </div>
    </div>
  </main>
  )
}