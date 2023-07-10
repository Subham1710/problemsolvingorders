import React, { useEffect } from 'react';

function OrdersComponent() {
  // Function to fetch orders asynchronously
  const fetchOrders = async () => {
    try {
      // Make a request to the backend API
      const response = await fetch('/api/orders');
      
      // Check if the response is empty
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      
      // Parse the response as JSON
      const orders = await response.json();
      
      // Process the fetched orders
      processOrders(orders);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching orders:', error);
    }
  };

  // Function to process the fetched orders
  const processOrders = (orders) => {
    // Display the orders in the UI or perform any necessary operations
    console.log('Fetched orders:', orders);
  };

  useEffect(() => {
    // Fetch orders initially
    fetchOrders();

    // Schedule periodic updates
    const interval = setInterval(fetchOrders, 120000); // Fetch orders every 2 minutes

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Render your component's UI here */}
    </div>
  );
}

export default OrdersComponent;







  
