const file = document.getElementById('file');
file.addEventListener('change', function (event) {
    const myfile = event.target.files[0];

    if (file) {
        const fileReader = new FileReader();
        fileReader.onloadend = function () {
            const filenum = new Uint8Array(fileReader.result);
            const fileforPC = Array.from(filenum).map(function (x) {
                if ((x >= 97 && x <= 122) || (x >= 65 && x <= 90)) {
                    x = x + 6;
                }
                
                return String.fromCharCode(x);
            })
            console.log(fileforPC.join(''));
        }
            fileReader.readAsArrayBuffer(myfile);
    }
});

