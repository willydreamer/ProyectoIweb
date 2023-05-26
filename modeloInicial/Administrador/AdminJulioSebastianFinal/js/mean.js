const input = document.getElementById('formFile');
const preview = document.getElementById('image-preview');
const deleteButton = document.getElementById('delete-image');

input.addEventListener('change', () => {
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            preview.style.backgroundImage = `url(${reader.result})`;
        });

        reader.readAsDataURL(file);
    } else {
        preview.style.backgroundImage = null;
    }
});

deleteButton.addEventListener('click', () => {
    preview.style.backgroundImage = null;
    input.value = '';
});