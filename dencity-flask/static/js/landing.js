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
}