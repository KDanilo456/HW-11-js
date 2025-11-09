let bankAccount = {
    ownerName: 'Danylo',
    accountNumber: 123,
    balance: 500,
    confirm: function() {
        let b = confirm('ви хочете поповнити рахунок чи зняти гроші з рахунку?');

        if (b) {
            this.deposit();
        }
        else {
            this.withdraw();
        }
    },
    deposit: function() {
        while (true) {

            let input = prompt('вкажіть суму щоб поповнити рахунок');
            
            if (input === null) {
                alert('скасовано користувачем');
                break;
            }

            input = Number(input);

            if (isNaN(input)) {
                alert('потрібно ввести число. Спробуйте ще раз');
            }

            if (input <= 0) {
                alert('сума має бути більша за 0');
            }

            if (input > 0) {
                this.balance += input;
                alert(this.balance);
                break;
            }

        }
    },
    withdraw: function() {
            while (true) {

            let input = prompt('введіть суму яку ви хочете зняти з вашого рахунку');
            
            if (input === null) {
                alert('скасовано користувачем');
                break;
            }

            input = Number(input);

            if (isNaN(input)) {
                alert('потрібно ввести число. Спробуйте ще раз');
            }

            if (input <= 0) {
                alert('сума має бути більша за 0');
            }

            if (input > this.balance) {
                alert('сума перевищує ваш баланс. Введіть меншу суму');
            }

            if (input > 0 && input <= this.balance) {
                this.balance -= input;
                alert(this.balance);
                break;
            }

        }   
    }
}

bankAccount.confirm();

let weather = {
    temperature: prompt('введіть температуру'),
    humidity: '70% вологості',
    windSpeed:'3 метри за секунду',
    checkTemerature: function(temperature) {
        if (temperature < 0) {
            console.log('температура нижче 0 градусів Цельсія');
        }
        else if (temperature >= 0) {
            console.log('температура вища 0 градусів Цельсія');
        }

    }
}

weather.checkTemerature(weather.temperature);

let input;

let user = {
    name: 'danylo123',
    email: 'danylo123@gmail.com',
    password: 'd123',
    login: function() {
        while (true) {
            input = prompt('введіть ваш email');

            if (input === this.email) {
                break;
            }
            if (input !== this.email) {
                alert('ви ввели неправильний email. Введіть ще раз');
            }
        }
        while (true) {
            input = prompt('введіть свій пароль');

            if (input === this.password) {
                alert('ви ввійшли в свій акаунт');
                break;
            }
            if (input !== this.password) {
                alert('ви ввели не вірний пароль. Введіть ще раз');
            }
        }
    } 
}

user.login();

let movie = {
    title: 'movie1',
    director: 'director1',
    year: 2010,
    raiting: 10,

    returnSomething: function() {
        if (this.raiting > 8) {
            return true;
        }
        else if (this.raiting <= 8) {
            return false;
        }
    }
}

console.log(movie.returnSomething());
