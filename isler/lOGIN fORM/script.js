//  function kelimeYazdir(kelime, adet) {
//      for (let i = 0; i < adet; i++) {
//          console.log(kelime)
//      };
//  };

//  //  kelimeYazdir("Salam", 4);

//  function alanCevrehesbla(kisa, uzun) {
//      let alan = kisa * uzun;
//      let cevre = (kisa + uzun) * 2;

//      return `alan: ${alan} cevre: ${cevre}`
//  };

//  //  let sonuc = alanCevrehesbla(7, 10);
//  //  console.log(sonuc);

//  // yazi tura

//  function yazituraAt() {
//      let random = Math.floor(Math.random() * 10) + 1;
//      if (random <= 5) {
//          console.log("yazi");
//      } else {
//          console.log("Tura")
//      };
//      console.log(random);
//  };
//  //  yazituraAt();
//  //  yazituraAt();
//  //  yazituraAt();

//  function tamBolenler(sayi) {
//      let sayilar = [];

//      for (let i = 2; i < sayi; i++) {
//          if (sayi % i == 0) {
//              sayilar.push(i);
//          };
//      };
//      return sayilar;
//  };

//  //  console.log(tamBolenler(10));
//  //  console.log(tamBolenler(15));
//  //  console.log(tamBolenler(20));
//  //  console.log(tamBolenler(100));

//  function toplam() {
//      let sonuc = 0;
//      for (let i = 0; i < arguments.length; i++) {
//          sonuc += arguments[i];
//      }
//      return sonuc;
//  };

//  //  console.log(toplam(2, 5));
//  //  console.log(toplam(2, 5, 7, 5, 6, 8));


//  //////////////////////

//  //  const array = [1, 2, 3];

//  //  function addEtoArray(a, e) {
//  //      return [...a, e, Math.random()]
//  //  };

//  //  addEtoArray(array, 4);

//  //  console.log(array);

//  let ary = [1, 5, 64, 7, 8];
//  //  let sonuc;

//  sonuc = ary.sort((a, b) => {
//      return a - b;
//  });
//  //  console.log(sonuc);

//  const li = document.querySelectorAll("li");



//  li[3].classList = "red";


//  console.log(li);

function addEventListener() {
    const na = document.querySelector("#name");
    const pass = document.querySelector("#password");
    const btn = document.querySelector("#btn");
    const btn2 = document.querySelector("#btn2");
    //ws
    const w = document.querySelector("#w");
    const q = document.querySelector("#q");
    const form = document.querySelector("#form");
    const profil = document.querySelector("#profil");
    const p = document.querySelector("#p")
        // addEventListener
    btn.addEventListener("click", sh)

    function sh(e) {
        e.preventDefault();
        if (pass.type == "password") {
            pass.type = "text"
            btn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        } else {
            pass.type = "password"
            btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        }
    };
    btn2.addEventListener("click", ws);

    function ws(e) {
        e.preventDefault();
        if (na.value === "" && pass.value === "") {
            w.style.opacity = "1"
            setInterval(() => {
                w.style.opacity = "0"
            }, 4000);
        } else {
            w.style.opacity = "0"
            q.style.opacity = "1"
            setInterval(() => {
                q.style.opacity = "0"
            }, 2000);
            form.style.display = "none";
            profil.style.display = "block";
            p.innerHTML += " " + na.value;
            if (pass.value === "") {
                form.style.display = "block";
                profil.style.display = "none";
                p.innerHTML += "";
                q.style.opacity = "0"
                w.style.opacity = "1"
                setInterval(() => {
                    w.style.opacity = "0"
                }, 4000);
            };
            if (na.value === "") {
                form.style.display = "block";
                profil.style.display = "none";
                p.innerHTML += "";
                q.style.opacity = "0"
                w.style.opacity = "1"
                setInterval(() => {
                    w.style.opacity = "0"
                }, 4000);
            };
        }
        na.value = "";
        pass.value = "";
    };
};
addEventListener();