import { FormEvent } from 'react';
import css from './SearchBar.module.css'
import toast from 'react-hot-toast';


type Props ={
    onSubmit: (query: string) => void;
}


const SearchBar: React.FC<Props> = ({ onSubmit }) => {


    const handleSubmit = (event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const query = (formData.get("search") as string).trim();

        if (query.trim() === "") {
            toast.error("Please enter a search term!");
            return;
        }

        onSubmit(query);
        event.currentTarget.reset();
      };


  return (
    <header>
  <form onSubmit={handleSubmit} className={css.form}>
    <input
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      className={css.input}
    />
    <button type="submit" className={css.button}
    >Search
    </button>
  </form>
</header>
     )
}

export default SearchBar;