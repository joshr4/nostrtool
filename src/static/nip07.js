async function loadPubkeyNIP07() {
    const { nostr } = window;

    if (!nostr) {
        alert('Error: extension not reachable')
        return
    }

    const publicKey = await window.nostr.getPublicKey()
    document.getElementById("pubkey_npub").value = publicKey;
}