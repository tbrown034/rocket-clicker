function Upgrades({ upgrades, onPurchase }) {
  return (
    <div>
      <h2 className="text-2xl mb-4">Upgrades</h2>
      {upgrades.map((upgrade, index) => (
        <button
          key={index}
          onClick={() => onPurchase(index)}
          className="block mb-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          {upgrade.name} ({upgrade.cost} km)
        </button>
      ))}
    </div>
  );
}

export default Upgrades;
