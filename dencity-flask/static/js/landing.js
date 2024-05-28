function toggleContent(type) {
    const tenantsText = document.querySelector('.text.tenants');
    const landlordsText = document.querySelector('.text.landlords');
    const tenantImage = document.querySelector('.tenant-image');
    const landlordImage = document.querySelector('.landlord-image');
    const tenantButton = document.querySelector('.tenant-button');
    const landlordButton = document.querySelector('.landlord-button');

    if (type === 'tenant') {
        tenantsText.classList.add('active');
        landlordsText.classList.remove('active');
        tenantImage.classList.add('active');
        landlordImage.classList.remove('active');
        tenantButton.classList.add('active');
        landlordButton.classList.remove('active');

    } else if (type === 'landlord') {
        tenantsText.classList.remove('active');
        landlordsText.classList.add('active');
        tenantImage.classList.remove('active');
        landlordImage.classList.add('active');
        tenantButton.classList.remove('active');
        landlordButton.classList.add('active');
    }

    // Reset the sliding animation
    const statistics = document.querySelectorAll('.statistic');
    statistics.forEach(stat => {
        stat.classList.remove('animate');
        void stat.offsetWidth;
        stat.classList.add('animate');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const statistics = document.querySelectorAll('.statistic');

    //sliding animation for differing value propositions
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1 
    });
  
    statistics.forEach(stat => {
      observer.observe(stat);
    });

  });
