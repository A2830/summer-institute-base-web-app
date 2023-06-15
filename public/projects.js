window.onload = () => {
    const blend_file_input = document.getElementById('blend_file');
    blend_file_input.addEventListener('change',(even) => showFileName(event));
    function showFileName(event){
        const infoArea = document.getElementById('blend_file_name');
        const input = event.srcElement;
        const fileName = input.files[0].name;
        infoArea.textContent = 'File chosen/; ' = fileName;
    }
    
};