# Vending_Machine
Local website simulating a vending machine
Requirements: install React, Node JS, Express, and bootstrap
# Once Installed
within the nodejs folder, start the server with the following command:
node src/route/index.js
# Next start react webpage
from the react folder execute the following command:
npm start
This will star the web page
# Web Page functionality
You will see the list of items within the vending machine
you will be able to enter the amount of money you have and purchase a product.
# Purchasing
Once an item is purchased, the web page calls an api 'http://localhost:5001/products/${prod.name}` 
which takes the product name. Once received by the server, it will return and download the corresponding JSON file for that product with all of it's details.

# TODO
I am still working on the Admin page where instead of  having my variables defined locally, I was working to create another API call to fetch what I needed from the server, however ran out of time.
