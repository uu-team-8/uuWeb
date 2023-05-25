import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  token = localStorage.getItem("token");

  getUser = () => {
    fetch("https://api.uu.vojtechpetrasek.com/v3/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {
    return (
      <div
        className="gradient-custom"
        style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <div className="container">
          <p className="text-white mb-10 mt-5">
            Vítejte na našem inovativním webovém portálu pro cloudovou aplikaci
            pro monitoring teploty a vlhkosti serverů!
          </p>
          <p className="text-white mb-5">
            Sledujeme přicházející vlnu technologického pokroku a rozvoje, která
            závisí na spolehlivém fungování moderních serverových systémů.
            Chápeme, že udržování optimálních podmínek pro provoz serverů je
            klíčové pro dosažení nejvyššího výkonu a minimalizaci rizika výpadku
            služby. Naše výkonná cloudová aplikace vám poskytuje nezbytné
            nástroje a informace pro sledování a správu teploty a vlhkosti ve
            vašem serverovém prostředí. Díky naší pokročilé technologii a
            přesnému sběru dat v reálném čase vám nabízíme okamžitý přehled o
            stavu vašich serverů. Hlavní výhody naší aplikace zahrnují:
            Monitorování v reálném čase: Náš výkonný systém monitoruje teplotu a
            vlhkost vašich serverů v reálném čase, abyste měli neustálý přehled
            o jejich stavu. Upozornění a notifikace: Naše aplikace je vybavena
            inteligentním systémem upozornění, který vás okamžitě informuje,
            pokud jsou detekovány jakékoli odchylky od nastavených optimálních
            podmínek. To vám umožňuje rychle reagovat a předejít potenciálním
            problémům. Historická data a analýza: Naše aplikace shromažďuje a
            ukládá veškerá data o teplotě a vlhkosti vašich serverů, takže máte
            k dispozici kompletní historii měření. Můžete provádět analýzy
            trendů a identifikovat dlouhodobé vzorce, které vám pomohou
            optimalizovat provoz a plánovat údržbu. Intuitivní uživatelské
            rozhraní: Navrhli jsme naši aplikaci tak, aby byla snadno
            ovladatelná a přístupná pro všechny uživatele. Intuitivní rozhraní
            vám umožňuje rychle nalézt potřebné informace a provádět přesné
            akce. Náš tým zkušených odborníků se zavázal poskytnout vám nejlepší
            možnou službu a podporu při monitorování teploty a vlhkosti vašich
            serverů. Společně můžeme zvýšit výkon vašich serverových systémů a
            snížit riziko výpadků, čímž zajistíme neustálou dostupnost vašich
            online služeb. Připojte se k nám ještě dnes a začněte využívat
            výhody naší cloudové aplikace pro monitoring teploty a vlhkosti
            serverů. Vaše spolehlivost je naší prioritou!
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
