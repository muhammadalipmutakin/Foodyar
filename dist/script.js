        document.addEventListener("DOMContentLoaded", function () {
            const ratingContainers = document.querySelectorAll(".star-rating");
    
            ratingContainers.forEach(container => {
                const rating = parseInt(container.getAttribute("data-rating"), 10);
                container.innerHTML = ''; // Kosongkan isi elemen sebelumnya
    
                for (let i = 1; i <= 5; i++) {
                    const star = document.createElement("span");
                    star.innerHTML = i <= rating ? "★" : "☆"; // Bintang penuh atau kosong
                    container.appendChild(star);
                }
            });
        });
