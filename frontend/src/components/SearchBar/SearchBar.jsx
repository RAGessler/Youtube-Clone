const SearchBar = (props) => {


    function handleSubmit(){
        console.log('hello')
    }
//https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyB2zDVfGZtdLQ4g3RO7QFmwT1RJ_kRI0Bs&type=video&maxResults=5

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="Search" placeholder="Search Videos" id="" />
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar