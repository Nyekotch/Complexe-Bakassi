import { QRCodeSVG } from 'qrcode.react';
import { Download, Printer, Share2 } from 'lucide-react';
import { config } from '@/data/config';

export default function QRPage() {
  const qrValue = window.location.origin;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const svg = document.querySelector('#qr-code svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngFile;
        downloadLink.download = `qrcode-${config.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
      
      img.onerror = () => {
        alert('Erreur lors de la conversion du QR Code');
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    } else {
      alert('QR Code non trouvé');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          QR Code - {config.name}
        </h1>

        {/* QR Code Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div id="qr-code" className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-lg shadow-inner">
              <QRCodeSVG
                value={qrValue}
                size={256}
                level="H"
                includeMargin={true}
                bgColor="#FFFFFF"
                fgColor="#000000"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {config.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Scannez ce QR Code pour découvrir nos services
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {qrValue}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Printer size={20} />
              <span>Imprimer</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download size={20} />
              <span>Télécharger</span>
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: config.name,
                    text: 'Scannez ce QR Code pour découvrir nos services!',
                    url: qrValue,
                  });
                }
              }}
              className="inline-flex items-center space-x-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Share2 size={20} />
              <span>Partager</span>
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Instructions d'utilisation
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-secondary-500 mr-2">1.</span>
              <span>Imprimez ce QR Code en format A4 pour l'afficher dans votre établissement</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-500 mr-2">2.</span>
              <span>Distribuez des flyers avec le QR Code dans les zones à fort trafic</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-500 mr-2">3.</span>
              <span>Créez des stickers pour les placer sur vos véhicules</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-500 mr-2">4.</span>
              <span>Partagez le QR Code sur vos réseaux sociaux</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-500 mr-2">5.</span>
              <span>Incluez le QR Code sur vos cartes de visite</span>
            </li>
          </ul>
        </div>

        {/* Print Styles */}
        <style>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
            }
            body * {
              visibility: hidden;
            }
            #qr-code, #qr-code * {
              visibility: visible;
            }
            #qr-code {
              position: fixed;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: auto;
              height: auto;
            }
            .no-print {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
