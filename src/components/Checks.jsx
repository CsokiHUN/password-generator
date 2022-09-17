import Checkbox from './Checkbox';

function Checks() {
  return (
    <>
      <ul class='flex flex-col gap-y-3'>
        <Checkbox name='uppercase' label='Include Uppercase Letters'></Checkbox>
        <Checkbox name='lowercase' label='Include Lowercase Letters'></Checkbox>
        <Checkbox name='numbers' label='Include Numbers'></Checkbox>
        <Checkbox name='symbols' label='Include Symbols'></Checkbox>
      </ul>
    </>
  );
}

export default Checks;
