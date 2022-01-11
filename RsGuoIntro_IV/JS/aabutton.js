var clickBtn = document.querySelector(".open-btn");
var closeBtn = document.querySelector(".btn");
var modal = document.querySelector(".modal");
function toggleModal() {
  modal.classList.toggle("show-modal");
}
clickBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    toggleModal();
  }
});