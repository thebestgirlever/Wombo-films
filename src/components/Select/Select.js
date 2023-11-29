function Select(options, current) {
  return (
    <select name="pets" id="pet-select">
      <option value="">--Please choose an option--</option>
      {options.map(item => <option value={item.value}>{item.label}</option>)}
    </select>
  )

}