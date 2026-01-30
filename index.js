const file = document.getElementById('file');
file.addEventListener('change', function (event) {
    const myfile = event.target.files[0];

    if (file) {
        console.log(myfile.name);
        console.log(myfile.type);
        console.log(myfile.size);

        const fileReader = new FileReader();

        fileReader.onloadstart = function () {
            console.log('onloadstart: ' + fileReader.readyState);
        }
        fileReader.onprogress = function () {
            console.log('onprogress: ' + fileReader.readyState);
        }
        fileReader.onloadend = function () {
            const filenum = new Uint8Array(fileReader.result);
            const fileforPC = Array.from(filenum).map(function (x) {
                let PCcode = x.toString(2).padStart (8, 0);

                return PCcode
            })
            console.log(fileforPC.join(' '));
        }

        fileReader.readAsArrayBuffer(myfile);
    }
});

