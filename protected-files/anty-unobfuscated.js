// Block key shortcuts
window.addEventListener('keydown', function (e) {
    // Prevent specific key combinations (e.g., Ctrl+Shift+I for inspect, F12, etc.)
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        notis.create(
            "Wykryto Skrót Klawiszowy",
            "Nasza strona nie pozwala na korzystanie ze skrótów klawiszowych!",
            10,
            true
          );
        }
    }

    // Add other key combinations to block as needed
);

// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    notis.create(
        "Wykryto PPM",
        "Niestety ale nasza strona nie pozwala na korzystanie z prawego przycisku myszy!",
        10,
        true
      );
    }
);

document.addEventListener("DOMContentLoaded", function() {
    notis.create(
        "JavaScript działa!",
        "Jeśli widzisz tą wiadomość to znaczy że JavaScript działa poprawnie!",
        5,
        true
      );
  });