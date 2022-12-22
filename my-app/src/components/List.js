import Item from "./Item";

function List() {
  return (
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="BMW" />
        <Item marca="Bugati" />
      </ul>
    </>
  );
}

export default List;
