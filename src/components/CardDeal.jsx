import styles, {layout} from "../constants/style";
import {card} from '../assets';
import Button from "./Button";

const CardDeal = () =>  (

  //prvi deo za tekst i dugme
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Pronađite bolju ponudu za karticu <br className="sm:block hidden"/>
      u nekoliko jednostavnih koraka.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nase kartice su dizajnirane prema Vama i Vasim uslovima kako biste bas Vi izgledali bolje od drugih.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}> 
    {/*drugi deo za sliku*/}
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
      
    </section>
  )


export default CardDeal