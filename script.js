const h1 = document.createElement('h1');
setTimeout(() => {
    h1.innerText = 10;
    h1.style.color = 'red';

    setTimeout(() => {
        h1.innerText = 9;
        h1.style.color = 'blue';

        setTimeout(() => {
            h1.innerText = 8;
            h1.style.color = 'yellow';

            setTimeout(() => {
                h1.innerText = 7;
                h1.style.color = 'crimson';

                setTimeout(() => {
                    h1.innerText = 6;
                    h1.style.color = 'teal';

                    setTimeout(() => {
                        h1.innerText = 5;
                        h1.style.color = 'skyblue';

                        setTimeout(() => {
                            h1.innerText = 4;
                            h1.style.color = 'green';

                            setTimeout(() => {
                                h1.innerText = 3;
                                h1.style.color = '#f718db';

                                setTimeout(() => {
                                    h1.innerText = 2;
                                    h1.style.color = '#02e8c8';

                                    setTimeout(() => {
                                        h1.innerText = 1;
                                        h1.style.color = '#2dc123c7';
                                        setTimeout(() => {
                                            h1.innerText = 'Happy Indpnedence Day!!!';
                                            h1.style.color = 'f30834';

                                        },
                                            1000)
                                    },
                                        1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);

document.body.append(h1);