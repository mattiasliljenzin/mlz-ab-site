# MLZ AB:s hemsida

En statisk sida (bara HTML, CSS och bilder, inget byggsteg) för MLZ AB med
två spelsidor och en integritetspolicy per spel. Den behövs för att registrera
MLZ AB i Apple Developer Program som organisation: Apple kräver en publik
webbplats på en domän som hör till företaget.

| Sida | Fil |
|---|---|
| Företagssidan | `index.html` |
| Dragonäventyret | `dragonaventyret/index.html` |
| Integritet, Dragonäventyret | `dragonaventyret/integritet.html` |
| Draklekar | `draklekar/index.html` |
| Integritet, Draklekar | `draklekar/integritet.html` |

Integritetssidornas adresser kan klistras in direkt i App Store Connect
("Privacy Policy URL"), till exempel `https://mlz-labs.com/dragonaventyret/integritet.html`.

Alla bilder är målningar och skärmbilder ur spelen, konverterade till WebP
(hela sidan är cirka 5 MB). Typsnitten (IM Fell English, Baloo 2) ligger i
`typsnitt/` med sina OFL-licenser. Det enda som hämtas från en annan server är
skriptet för Cloudflare Web Analytics, som räknar besök anonymt utan kakor
(statistiken finns i Cloudflare under Analytics & Logs → Web Analytics).

## Bilder och prestanda

- Stora bilder finns i flera bredder (`-480`, `-800`, `-1200`) och väljs med
  `srcset`, så mobilen hämtar små filer.
- Toppbilderna har en stående variant (`-mobil.webp`) för telefoner.
- Typsnitten är beskurna till latinska tecken och svenska bokstäver (cirka
  130 kB totalt).
- Delningsbilder för Facebook, Messenger och liknande ligger i `bilder/dela/`
  (1200x630).
- `sitemap.xml`, `robots.txt` och `404.html` ligger i roten.

## Titta på sidan lokalt

```sh
python3 -m http.server 8000
# öppna http://localhost:8000
```

## Lägga ut sidan på GitHub Pages

Sidan ligger i det här publika repot, med filerna direkt i roten.

1. I repot: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, välj `main` och `/ (root)`, spara.
2. Efter någon minut ligger sidan på `https://mattiasliljenzin.github.io/mlz-ab-site/`.

## Koppla domänen mlz-labs.com

Apple vill att domänen hör till företaget, så köp den i MLZ AB:s namn (hos
till exempel Loopia, One.com eller Namecheap) med företagets organisationsnummer.

1. **Verifiera domänen på GitHub först** (skyddar mot att någon annan tar den):
   GitHub → din profil → **Settings → Pages → Add a domain**. GitHub visar en
   TXT-post som du lägger in hos domänleverantören och sedan klickar *Verify*.
2. **DNS hos domänleverantören** för huvuddomänen `mlz-labs.com`:

   | Typ | Namn | Värde |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | mattiasliljenzin.github.io |

   Ta bort leverantörens egna A-poster för `@` (ofta en "parkeringssida").
3. I sidans repo: **Settings → Pages → Custom domain**, skriv `mlz-labs.com` och
   spara. GitHub lägger då till en fil `CNAME` i repot. Bocka i
   **Enforce HTTPS** när rutan går att klicka (det kan ta upp till ett dygn
   medan certifikatet skapas).
4. Kontrollera att `https://mlz-labs.com` och `https://www.mlz-labs.com` visar sidan.

## Inför Apple-registreringen

- Apple jämför företagsnamnet med D-U-N-S-registret. Ange webbadressen
  (`https://mlz-labs.com`) när du ansöker om eller uppdaterar D-U-N-S-numret, så att
  de stämmer överens.
- Kontaktadressen på sidan är `contact@mlz-labs.com`, på samma domän som
  sidan, vilket Apple ser som ett tecken på att domänen hör till företaget.
- Organisationsnumret (559491-0407) och orten står i sidfoten på alla sidor.

## Ändra texter och bilder

- Texterna står direkt i HTML-filerna.
- När ett spel finns i App Store: byt etiketten `Kommer snart till App Store`
  mot en länk till spelets App Store-sida.
