import styles from "./StoreInputSearch.module.scss";

function StoreInputSearch({searchValue, setSearchValue}){
    const toSearch = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className={`my-4 text-end ${styles.search}`}>
            <input 
                onChange={toSearch} 
                className={styles.input} 
                type="search" 
                value={searchValue}>
            </input>
        </div>
    )
}

export default StoreInputSearch;