/* ==========================================================================
   Unique Packers & Movers - Lightweight Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // 1. Mobile Menu Toggle
  var mobileToggle = document.getElementById('mobile-toggle');
  var navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking a link
    var links = navLinks.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('show');
      });
    });
  }

  // Initial call to update material count on page load
  updateMaterialCount();
});

// 2. Packaging Materials Counter
function updateMaterialCount() {
  var checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
  var countEl = document.getElementById('selected-materials-count');
  if (countEl) {
    countEl.textContent = checkedItems.length;
  }
}

// 3. Send Selected Materials to WhatsApp
function sendMaterialsWhatsApp() {
  var checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
  var selected = [];
  checkedItems.forEach(function(item) {
    selected.push(item.value);
  });

  if (selected.length === 0) {
    alert('Please select at least one packaging material.');
    return;
  }

  var msg = "Hi Unique Packers & Movers, I would like a quote with these selected packaging materials for my shifting: " + selected.join(", ");
  var url = "https://wa.me/917056895470?text=" + encodeURIComponent(msg);
  window.open(url, '_blank');
}

// 4. Submit Relocation Estimate Form via WhatsApp
function submitEstimateWhatsApp() {
  var service = document.getElementById('service-type') ? document.getElementById('service-type').value : '';
  var origin = document.getElementById('origin-locality') ? document.getElementById('origin-locality').value : '';
  var dest = document.getElementById('dest-locality') ? document.getElementById('dest-locality').value : '';
  var phone = document.getElementById('client-phone') ? document.getElementById('client-phone').value : '';

  if (!phone) {
    alert('Please enter your phone/WhatsApp number.');
    return;
  }

  var msg = "Hi Unique Packers & Movers, I need an estimate for " + service + " from " + origin + " to " + dest + ". My contact number is: " + phone + ". I am ready to share video/images for review.";
  var url = "https://wa.me/917056895470?text=" + encodeURIComponent(msg);
  window.open(url, '_blank');
}

// 5. Trigger Mock Shipment Tracking
function triggerTrackMock() {
  var input = document.getElementById('tracking-input');
  var docket = input && input.value.trim() !== '' ? input.value.trim() : 'UNQ-HYD-7281';
  alert("Live Telematics for Docket " + docket + ": Vehicle TS 08 UB 4192 is currently en-route between Kondapur and Gachibowli. Estimated arrival in 45 minutes.");
}
