// DOM Elements
const form = document.getElementById('form');
const textArea = document.getElementById('input');
const errorMessage = document.getElementById('msg');
const postsContainer = document.getElementById('posts');

// EVENT LISTENERS
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
  if (e.key === 'Enter') {
    e.preventDefault();
    formValidation();
  }
})

textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    formValidation();
  }
});

// VALIDATE FORM
function formValidation() {
  textArea.value === ''
    ? errorMessage.textContent = 'Post field cannot be empty'
    : (errorMessage.textContent = '', createPosts(textArea.value));
}

// CREATE POST
function createPosts(text) {
  const postTemplate =
    `
  <div>
    <p class="post-color">${text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  postsContainer.insertAdjacentHTML('beforeend', postTemplate);
  textArea.value = '';
}

// EDIT POST
function editPost(event) {
  event.parentNode.parentNode.remove();
  textArea.value = event.parentElement.previousElementSibling.innerHTML;
}

// DELETE POST
function deletePost(event) {
  event.parentNode.parentNode.remove();
}