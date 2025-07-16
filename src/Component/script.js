export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'cv.pdf'; 
    link.download = 'Abderrazaq_Moustaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
