import { useParams } from 'react-router-dom';

const MenuItemDetails = () => {
  const { id } = useParams();

  // You can fetch data using the id here
  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold">Menu Item Details</h1>
      <p>Showing details for menu item ID: {id}</p>
    </div>
  );
};

export default MenuItemDetails;
