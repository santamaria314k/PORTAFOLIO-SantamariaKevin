document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCvBtn');

    if(downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const pdfUrl = 'CVKevinSantamaria.pdf'; 

            const newTab = window.open(pdfUrl, '_blank');
            newTab.focus();

            
            const downloadTitle = this.querySelector('.download-title');
            const downloadComplete = this.querySelector('.download-complete');

            if(downloadTitle && downloadComplete) {
                downloadTitle.style.display = 'none';
                downloadComplete.style.display = 'block';

                setTimeout(() => {
                    downloadTitle.style.display = 'block';
                    downloadComplete.style.display = 'none';
                }, 3000);
            }
        });
    }
});
