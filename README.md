
# Web3 Event Hosting Platform

This project is a decentralized application (DApp) built on Ethereum, allowing users to host and list events like parties and get-togethers. The backend of the project is powered by a Solidity smart contract, while the frontend is a website interface that interacts with the blockchain.

## Features
- **Decentralized Hosting**: Events are stored on the blockchain, ensuring transparency and immutability.
- **Event Listing**: Users can create, view, and join events directly through the website.
- **Web3 Integration**: Wallet connection via MetaMask or other Web3 providers.
- **Secure Payments**: Payments or deposits for event tickets or reservations (optional feature).

## Tech Stack
- **Solidity**: Smart contract language for the Ethereum blockchain.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.
- **Truffle**: Development environment and testing framework for Ethereum.
- **Ganache**: Local Ethereum blockchain for testing.
- **MetaMask**: Web3 wallet for user authentication.
- **HTML/CSS/JavaScript**: Frontend of the website.

## Requirements
Before setting up the project, ensure you have the following installed:
- Node.js
- Truffle Suite
- Ganache CLI (or Ganache GUI)
- MetaMask extension (for browser testing)
- Solidity compiler

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/web3-event-hosting.git
cd web3-event-hosting
```

### 2. Install Dependencies
Install the necessary npm packages:
```bash
npm install
```

### 3. Compile the Smart Contracts
Compile the Solidity smart contract using Truffle:
```bash
truffle compile
```

### 4. Deploy the Smart Contract
Deploy the contract to a local blockchain (using Ganache) or a testnet like Rinkeby:
- If using Ganache:
  1. Start Ganache.
  2. Deploy the contract:
     ```bash
     truffle migrate --network development
     ```

- If deploying on Rinkeby:
  1. Set up your `.env` file with your wallet's mnemonic and Infura API key.
  2. Deploy to Rinkeby:
     ```bash
     truffle migrate --network rinkeby
     ```

### 5. Configure Frontend
1. Update the contract ABI and address in the frontend code. You'll find the ABI and address in the `build/contracts/EventHosting.json` file after deployment.
2. Connect the frontend with MetaMask for wallet interactions.

### 6. Run the Application
Start the local development server for the frontend:
```bash
npm run dev
```

### 7. Interact with the DApp
1. Open the app in your browser (typically `http://localhost:3000`).
2. Connect your MetaMask wallet.
3. Create, view, or join events using the DApp interface.

## Smart Contract Details
The smart contract is written in Solidity and handles:
- Event creation: Users can create new events by providing details like event name, date, and location.
- Event registration: Attendees can register for an event.
- Optional payments: The smart contract can handle payments for events if the organizer requires tickets.

### Example Solidity Contract Snippet
```solidity
pragma solidity ^0.8.0;

contract EventHosting {
    struct Event {
        string name;
        string location;
        uint256 date;
        address organizer;
        uint256 ticketPrice;
    }

    Event[] public events;

    function createEvent(string memory _name, string memory _location, uint256 _date, uint256 _ticketPrice) public {
        events.push(Event(_name, _location, _date, msg.sender, _ticketPrice));
    }

    function getEvents() public view returns (Event[] memory) {
        return events;
    }

    function registerForEvent(uint _eventId) public payable {
        require(msg.value >= events[_eventId].ticketPrice, "Insufficient payment");
        // Add registration logic here
    }
}
```

## Deployment on a Testnet (Optional)
To deploy on an Ethereum testnet like Rinkeby:
1. Get some test Ether from a [Rinkeby Faucet](https://faucet.rinkeby.io/).
2. Add your Rinkeby account in MetaMask.
3. Update your Truffle configuration to include the Rinkeby network.
4. Run the deployment command:
   ```bash
   truffle migrate --network rinkeby
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
