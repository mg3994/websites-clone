/* ==========================================================================
   UNIQUE PACKERS & MOVERS - VANILLA JAVASCRIPT
   Lightweight Interactivity: Mobile Menu, Materials Counter, WhatsApp Dispatcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking any mobile nav link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Initialize selected materials count on page load
  window.updateMaterialCount();
});

// 2. Custom Packaging Material Count Tracker
window.updateMaterialCount = function () {
  const checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
  const countEl = document.getElementById('selected-materials-count');
  if (countEl) {
    countEl.textContent = checkedItems.length;
  }
};

// 3. Send Selected Materials Package to WhatsApp
window.sendMaterialsWhatsApp = function () {
  const checkedItems = document.querySelectorAll('input[name="packing-materials"]:checked');
  const list = [];
  checkedItems.forEach(function (item) {
    list.push(item.value);
  });

  if (list.length === 0) {
    alert('Please select at least one packaging material item.');
    return;
  }

  const message = "Hi Unique Packers & Movers, I would like a quote with these selected packaging supplies: " + list.join(", ");
  const whatsappUrl = "https://wa.me/917056895470?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank');
};

// 4. Quick Estimator Form Submission via WhatsApp
window.submitEstimateWhatsApp = function () {
  const service = document.getElementById('service-type') ? document.getElementById('service-type').value : 'Relocation';
  const origin = document.getElementById('origin-locality') ? document.getElementById('origin-locality').value : 'Hyderabad';
  const dest = document.getElementById('dest-locality') ? document.getElementById('dest-locality').value : '';
  const phone = document.getElementById('client-phone') ? document.getElementById('client-phone').value : '';

  if (!phone) {
    alert('Please enter your mobile phone / WhatsApp number.');
    return;
  }

  const message = "Hi Unique Packers & Movers, I need a quotation for " + service + " from " + origin + " to " + dest + ". My phone number is " + phone + ".";
  const whatsappUrl = "https://wa.me/917056895470?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank');
};

// 5. Live Tracking Docket Lookup Mock
window.triggerTrackMock = function () {
  const input = document.getElementById('tracking-input');
  const docketNumber = input && input.value.trim() ? input.value.trim() : 'UNQ-HYD-7281';

  alert("Live Telematics Status for Docket #" + docketNumber + ":\n\nStatus: In-Transit\nVehicle: TS 08 UB 4192 (Driver Suresh K.)\nCurrent Location: En-route to destination\nEstimated Delivery: In 45 Minutes");
};
