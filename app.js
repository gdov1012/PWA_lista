if ('serviceWorker' in navigator) {
    //registro do sw
    navigator.serviceWorker.register('/PWA_lista/sw.js')
        .then(() => console.log('Service Worker registrado com sucesso!'))
        .catch(err => console.log('Erro ao registrar Service Worker:', err));
}
