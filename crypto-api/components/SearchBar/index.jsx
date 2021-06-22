
import styles from './Search.module.css';


const SearchBar = ({...rest} ) => { 

    return ( 
        <>
        <h2 className={styles.h2_title}>Search bar</h2>
       <div className={styles.coin_search}>
           <input className={styles.coin_input} {...rest} />
       </div>
       </>
    );
};

export default SearchBar;