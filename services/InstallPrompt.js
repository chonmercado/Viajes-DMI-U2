import React, { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowModal(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("El usuario ha instalado la PWA");
        } else {
          console.log("El usuario ha rechazado la instalación");
        }
        setDeferredPrompt(null);
        setShowModal(false);
      });
    }
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>📲 Instala nuestra App</h2>
          <p>Para una mejor experiencia, instala nuestra aplicación en tu dispositivo.</p>
          <div className="modal-buttons">
            <button className="install-button" onClick={handleInstallClick}>Instalar</button>
            <button className="close-button" onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default InstallPrompt;
