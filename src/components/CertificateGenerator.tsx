'use client';
import { useRef, useEffect } from 'react';
import { useLocale } from './LocaleProvider';

interface CertificateProps {
  studentName: string;
  courseName: string;
  courseNameFr?: string;
  completionDate: Date;
  instructor?: string;
  onGenerate?: (certificateUrl: string) => void;
}

export default function CertificateGenerator({ 
  studentName, 
  courseName, 
  courseNameFr,
  completionDate, 
  instructor = "ATA Team",
  onGenerate 
}: CertificateProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locale = useLocale();

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size for high quality
    canvas.width = 1200;
    canvas.height = 800;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.5, '#764ba2');
    gradient.addColorStop(1, '#f093fb');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

    // Inner border
    ctx.strokeStyle = '#f4f4f4';
    ctx.lineWidth = 2;
    ctx.strokeRect(70, 70, canvas.width - 140, canvas.height - 140);

    // ATA Logo background circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 150, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.stroke();

    // ATA Logo text
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ATA', canvas.width / 2, 160);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px serif';
    ctx.textAlign = 'center';
    const titleText = locale === 'ht' ? 'Sètifika Konpetans' : 'Certificat de Compétence';
    ctx.fillText(titleText, canvas.width / 2, 260);

    // Subtitle
    ctx.font = '24px Arial';
    const subtitleText = locale === 'ht' 
      ? 'Sa sètifika konfime ak rekonèt ke'
      : 'Ce certificat atteste et reconnaît que';
    ctx.fillText(subtitleText, canvas.width / 2, 320);

    // Student Name
    ctx.font = 'bold 42px serif';
    ctx.fillStyle = '#FFD700'; // Gold color
    ctx.fillText(studentName, canvas.width / 2, 380);

    // Achievement text
    ctx.font = '24px Arial';
    ctx.fillStyle = '#ffffff';
    const achievementText = locale === 'ht' 
      ? 'te reyisi nan kou'
      : 'a terminé avec succès le cours';
    ctx.fillText(achievementText, canvas.width / 2, 430);

    // Course Name
    ctx.font = 'bold 36px serif';
    ctx.fillStyle = '#FFD700';
    const displayCourseName = locale === 'ht' ? courseName : (courseNameFr || courseName);
    
    // Handle long course names by wrapping text
    const maxWidth = canvas.width - 200;
    const words = displayCourseName.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    // Draw course name lines
    const lineHeight = 40;
    const startY = 490 - (lines.length - 1) * lineHeight / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
    });

    // Date and signature section
    ctx.font = '20px Arial';
    ctx.fillStyle = '#ffffff';
    
    const dateText = locale === 'ht' 
      ? `Dat konpletasyon: ${completionDate.toLocaleDateString('ht-HT', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}`
      : `Date d'achèvement: ${completionDate.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        })}`;
    
    ctx.textAlign = 'left';
    ctx.fillText(dateText, 120, 620);

    // Instructor signature
    ctx.textAlign = 'right';
    const instructorText = locale === 'ht' ? `Enstriktè: ${instructor}` : `Instructeur: ${instructor}`;
    ctx.fillText(instructorText, canvas.width - 120, 620);

    // Signature line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width - 300, 640);
    ctx.lineTo(canvas.width - 120, 640);
    ctx.stroke();

    // Decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    
    // Top left decoration
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI / 2);
    ctx.fill();
    
    // Top right decoration
    ctx.beginPath();
    ctx.arc(canvas.width - 150, 150, 80, Math.PI / 2, Math.PI);
    ctx.fill();
    
    // Bottom left decoration
    ctx.beginPath();
    ctx.arc(150, canvas.height - 150, 80, Math.PI, 3 * Math.PI / 2);
    ctx.fill();
    
    // Bottom right decoration
    ctx.beginPath();
    ctx.arc(canvas.width - 150, canvas.height - 150, 80, 3 * Math.PI / 2, 2 * Math.PI);
    ctx.fill();

    // Convert to blob and call onGenerate
    canvas.toBlob((blob) => {
      if (blob && onGenerate) {
        const url = URL.createObjectURL(blob);
        onGenerate(url);
      }
    }, 'image/png', 1.0);
  };

  useEffect(() => {
    generateCertificate();
  }, [studentName, courseName, courseNameFr, completionDate, instructor, locale]);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef}
        className="max-w-full h-auto border-2 border-gray-200 rounded-lg shadow-lg"
      />
      
      <div className="mt-4 flex gap-4 justify-center">
        <button
          onClick={generateCertificate}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          {locale === 'ht' ? 'Regenenere Sètifika' : 'Régénérer Certificat'}
        </button>
        
        <button
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
              const link = document.createElement('a');
              link.download = `certificate-${studentName.replace(/\s+/g, '-')}.png`;
              link.href = canvas.toDataURL();
              link.click();
            }
          }}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          {locale === 'ht' ? 'Telechaje' : 'Télécharger'}
        </button>
      </div>
    </div>
  );
}