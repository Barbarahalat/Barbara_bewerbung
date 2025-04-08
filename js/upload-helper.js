/**
 * Handle file uploads for the static GitHub Pages site.
 * Note: This is a simulated upload function as GitHub Pages doesn't support server-side processing.
 */
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('fileInput');
  const uploadButton = document.getElementById('uploadButton');
  const uploadZone = document.getElementById('uploadZone');
  const previewImg = document.getElementById('previewImg');
  const fileName = document.getElementById('fileName');
  const imagePreview = document.getElementById('imagePreview');
  const responseMessage = document.getElementById('responseMessage');

  // Add upload zone functionality
  uploadZone.addEventListener('click', function() {
    fileInput.click();
  });

  // Add drag and drop functionality
  uploadZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = '#763626';
    this.style.background = '#f0ece2';
  });

  uploadZone.addEventListener('dragleave', function() {
    this.style.borderColor = '#336b87';
    this.style.background = '#f7f4ee';
  });

  uploadZone.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.borderColor = '#336b87';
    this.style.background = '#f7f4ee';
    if (e.dataTransfer.files.length > 0) {
      fileInput.files = e.dataTransfer.files;
      handleFileSelection(e.dataTransfer.files[0]);
    }
  });

  // Handle file selection
  fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      handleFileSelection(this.files[0]);
    }
  });

  // Handle file preview and upload button activation
  function handleFileSelection(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
    
    if (validTypes.includes(file.type)) {
      // Show file preview
      previewImg.src = URL.createObjectURL(file);
      fileName.textContent = file.name;
      imagePreview.style.display = 'block';
      
      // Enable upload button
      uploadButton.disabled = false;
    } else {
      showError('Ungültiger Dateityp. Bitte wählen Sie ein Bild (JPG, PNG, GIF, SVG).');
      resetFileInput();
    }
  }

  // Simulated upload functionality
  uploadButton.addEventListener('click', function() {
    // Show loading state
    uploadButton.disabled = true;
    uploadButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wird hochgeladen...';
    
    // Simulate upload delay
    setTimeout(function() {
      // Show success message with GitHub Pages context
      showSuccess('Simulierte Hochladen-Funktion: In der GitHub Pages-Version wird kein tatsächlicher Upload durchgeführt. Dies ist nur eine Demonstration der Benutzeroberfläche.');
      
      // Reset upload button
      uploadButton.innerHTML = '<i class="fas fa-upload"></i> Hochladen';
      uploadButton.disabled = true;
    }, 1500);
  });

  // Helper functions
  function showSuccess(message) {
    responseMessage.innerHTML = `<div class="success"><i class="fas fa-check-circle"></i> ${message}</div>`;
  }

  function showError(message) {
    responseMessage.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
  }

  function resetFileInput() {
    fileInput.value = '';
    imagePreview.style.display = 'none';
    uploadButton.disabled = true;
  }
}); 