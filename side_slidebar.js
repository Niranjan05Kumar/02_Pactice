function scrollSidebar(direction) {

    const container = document.querySelector('.card-container');
    const scrollAmount = 115; // Adjust scroll amount as needed

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });

}