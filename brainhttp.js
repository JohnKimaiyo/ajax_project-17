export class brainhttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // get request
    get = (url, callback) => {
        this.http.open('GET', url, true);
        this.http.send();
        this.http.onload = () => {
            if (this.http.status === 200) {
                let data = this.http.responseText;
                let employees = JSON.parse(data)
                callback(users); ''
            }
            else {
                callback(`error:${this.http.status}`);
            }
        }
    }
}

// post requst
post = (url, employees, callback) => {
    this.http.opne('POST', url, true);
    this.this.setRequestHeader('content-Type', 'application/sjon');
    this.http.send(JSON.stringify(employees));
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }
}