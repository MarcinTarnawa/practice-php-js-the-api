> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s5e12-php-js-the-dom` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` PHP: JavaScript, The API

W tym zadaniu będziesz potrzebował rozwiązania napisanego w PHP, które będzie imitować loklane API na podstawie pliku `data.json` - to w nim będziesz zapisywał dane oraz jeg odczytywał. Po wysłaniu zapytania przy pomocą metody GET na adres (tzw. endpont) `user.php` powinieneś odczytać dane ze wskazanego pliku oraz je wyświetlić w formacie JSON. 

Twoim zadaniem jest napisanie obsługi formularza, tak aby można było dodawać nowe dane do naszego lokalnego API.

Przypominam, że należy:
* wykorzystać odpowiednią metodę (`POST`),
* na podstawie wysłanych przez formularz danych utworzyć obiekt, który trzeba zamienić na format JSON (`JSON.stringify()`),
* przekazanć odpowiedni nagłówek (`'Content-Type': 'application/json'`).
* napisać obsługę zapisywania danych do pliku `data.json`

Po każdorazowym dodaniu użytkownika zaktualizuj widok przy pomocy funkcji `loadUsers()`. Trzeba ją uruchomić w odpowiednim momencie, np. w `finally()`.

 **Uwaga!** Podczas tworzenia rozwiązań wykorzystujących API, możesz się spotkać z problemem dotyczącym [CORS](https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/). Jeśli on wystąpi, to nie będziesz mógł pobrać danych z API. Wszystko zależy od konfiguracji przeglądarki i serwera. Problem zidentyfikujesz przez [odpowiedni komunikat w konsoli](https://www.google.com/search?q=cors+problem&source=lnms&tbm=isch). Możesz próbować wyłączyć to zabezpieczenie w przeglądarce przez [odpowiedni plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) lub wykorzystać [pośrednika](https://github.com/Rob--W/cors-anywhere/).
 Problem z CORS może być spowodowany również tym, że uruchamiasz plik przez protokół `file://`. Wówczas wystarczy, że uruchomisz plik `.html` przy pomocy rozszerzenia [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSC.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **Wideo**, znajdziesz je na stronie [laracasts.com](https://laracasts.com/referral/bogolubow)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
