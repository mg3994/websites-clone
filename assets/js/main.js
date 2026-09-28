/**
 * Unique Packers & Movers - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', function () {
  // Update packing materials selection counter
  window.updateMaterialCount = function () {
    const checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
    const countEl = document.getElementById('selected-materials-count');
    if (countEl) {
      countEl.textContent = checkedItems.length;
    }
  };

  // WhatsApp Quote Link Generator for Packing Supplies
  window.sendMaterialsWhatsApp = function () {
    const checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
    const list = Array.from(checkedItems).map(item => item.value);
    const msg = "Hi Unique Packers, I would like a quote with these selected packaging materials for Hyderabad shifting: " + (list.join(", ") || "None selected");
    const url = "https://wa.me/917056895470?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
  };

  // WhatsApp Relocation Estimate Submission
  window.submitEstimateWhatsApp = function () {
    const service = document.getElementById('service-type') ? document.getElementById('service-type').value : 'Household Shifting';
    const origin = document.getElementById('origin-locality') ? document.getElementById('origin-locality').value : 'Kondapur';
    const dest = document.getElementById('dest-locality') ? document.getElementById('dest-locality').value : 'Madhapur';
    const phone = document.getElementById('client-phone') ? document.getElementById('client-phone').value : '';

    const msg = "Hi Unique Packers, I need an estimate for " + service + " from " + origin + " to " + dest + ". My contact number is: " + phone + ". I am ready to share photos/videos for review.";
    const url = "https://wa.me/917056895470?text=" + encodeURIComponent(msg);
    window.open(url, '_blank');
  };

  // Live Tracking Lookup Simulation
  window.triggerTrackMock = function () {
    const input = document.getElementById('tracking-input');
    const docket = input && input.value.trim() ? input.value.trim() : 'UNQ-HYD-7281';
    alert("Live Telematics for Docket " + docket + ": Vehicle TS 08 UB 4192 is currently en-route between Kondapur and Gachibowli. Estimated arrival in 45 minutes.");
  };

  // Initialize count on load
  if (document.querySelectorAll('input[name="packing-materials"]').length > 0) {
    window.updateMaterialCount();
  }
});
