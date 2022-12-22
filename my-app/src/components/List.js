import Item from "./Item";

function List() {
  return (
    <>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1989} />
        <Item marca="BMW" ano_lancamento={2006}/>
        <Item marca="Bugati" ano_lancamento={2020}/>
        <Item />
      </ul>
    </>
  );
}

export default List;
