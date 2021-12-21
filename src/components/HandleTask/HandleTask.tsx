import { FormEvent } from 'react';

const HandleTask = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input type="text" id="text" name="text" />
        </div>
        <div className="form-control form-control__checkbox">
          <label htmlFor="important">Set as important</label>
          <input type="checkbox" name="important" id="important" />
        </div>
        <button type="submit" className="btn btn__submit">
          Save
        </button>
      </form>
    </>
  );
};

export default HandleTask;
