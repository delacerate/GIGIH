function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('format email salah.');
      return false;
    }
    if (password.length < 6) {
      alert('password minimum 6 character.');
      return false;
    }
    if (email.trim() === '' || password.trim() === '') {
      alert('isi semua form terlebih dahulu');
      return false;
    }
    alert('sudah tervalidasi!');
    return true;
  }