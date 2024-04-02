// create function to handle saving a book to our database
const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
  
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
  
    if (!token) {
      return false;
    }
  
    try {
      const { data } = await saveBook({
        variables: { input: bookToSave }
      });
  
      if (!data.ok) {
        throw new Error('something went wrong!');
      }
  
      // if book successfully saves to user's account, save book id to state
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };
  