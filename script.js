// Roulette and Payment System

class Roulette {
    constructor() {
        this.bets = [];
        this.colors = ['red', 'black', 'green'];
    }

    placeBet(amount, color) {
        if (!this.colors.includes(color)) {
            throw new Error('Invalid color. Choose red, black, or green.');
        }
        this.bets.push({ amount, color });
    }

    spin() {
        const winningColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return winningColor;
    }

    settleBets(winningColor) {
        return this.bets.map(bet => {
            if (bet.color === winningColor) {
                return {
                    amount: bet.amount * 2,
                    color: bet.color,
                    status: 'Win'
                };
            }
            return {
                ...bet,
                status: 'Lose'
            };
        });
    }
}

class PaymentSystem {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive.');
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error('Invalid withdraw amount.');
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

// Example usage
const roulette = new Roulette();
roulette.placeBet(100, 'red');
const winningColor = roulette.spin();
const results = roulette.settleBets(winningColor);
console.log(results);

const payment = new PaymentSystem();
payment.deposit(500);
payment.withdraw(200);
console.log(payment.getBalance());
