import React from "react";
import { createBeer } from "../../api";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../router";

function NewBeer() {
  const initialState = {
    name: "",
    tagline: "",
    description: "",
  };

  const [state, setState] = React.useState(initialState);
  const history = useHistory();
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createBeer(state);
    history.push(ROUTES.beers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input required name="name" value={state.name} onChange={handleChange} />
      <label htmlFor="tagLine">Tagline</label>
      <input
        required
        name="tagline"
        value={state.tagline}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        required
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <button type="submit">Create Beer</button>
    </form>
  );
}

export default NewBeer;
