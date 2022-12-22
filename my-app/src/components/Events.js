import Button from "./evento/Button";

function Events() {
  function myEvent() {
    console.log(`Ativando primeiro evento!`);
  }

  function segundoEveno() {
    console.log("Ativando segundo evento!")
  }

  return (
    <div>
      <p>Clique aqui</p>
      <Button event={myEvent} text="Primeiro Evento" />
      <Button event={segundoEveno} text="segundo Evento" />
    </div>
  );
}

export default Events;
