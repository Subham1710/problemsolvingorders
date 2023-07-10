// Function to fetch orders asynchronously
async function fetchOrders() {
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
  }
  
  // Function to process the fetched orders
  function processOrders(orders) {
    // Display the orders in the UI or perform any necessary operations
    console.log('Fetched orders:', orders);
  }
  
  // Fetch orders initially
  fetchOrders();
  
  // Schedule periodic updates
  setInterval(fetchOrders, 120000); // Fetch orders every 2 minutes
  