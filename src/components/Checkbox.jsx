import { config, setConfig } from '../stores';

function Checkbox(props) {
  const change = (checked) => {
    const newConfig = { ...config(), [props.name]: checked };

    if (!newConfig.uppercase && !newConfig.lowercase) {
      newConfig.lowercase = true;
    }

    setConfig(newConfig);
  };

  return (
    <li>
      <input class='mr-4' type='checkbox' checked={config()[props.name]} onChange={({ target }) => change(target.checked)} />
      {props.label}
    </li>
  );
}

export default Checkbox;
