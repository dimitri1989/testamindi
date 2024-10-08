export default function dataNewHandler(){
    const datanewObject = [{word:"Overcast",translate:"ღრუბლიანი"},
        {word:"Light rain",translate:"სუსტი წვიმა"},
        {word:"Rain",translate:"წვიმა"},
        {word:"Cloudy",translate:"ღრუბლიანი"},
        {word:"Mostly cloudy",translate:"უმეტესად ღრუბლიანი"},
        {word:"Partly sunny",translate:"Ნაწილობრივ მზიანი"},
        {word:"Sunny",translate:"მზიანი"},
        {word:"Mostly sunny",translate:"უმეტესად მზიანი"},
        {word:"Clear",translate:"მოწმენდილი ცა"},
        {word:"Mostly clear",translate:"უმეტესად მოწმენდილი ცა"},
        {word:"Partly clear",translate:"ნაწილობრივ მოწმენდილი ცა"},
        {word:"Rain shower",translate:"კოკისპირული წვიმა"},
        {word:"Fog",translate:"ნისლი"},
        {word:"Thunderstorm",translate:"ჭექა-ქუხილი"},
        {word:"Light rain, increasing in the afternoon.",translate:"მსუბუქი წვიმა, დღის მეორე ნახევარში მოიმატებს"},
        {word:"Partly sunny.",translate:"Ნაწილობრივ მზიანი"},
        {word:"Sunny, more clouds in the afternoon and evening.",translate:"მზიანი, დღისით და საღამოს მოიმატებს ღრუბლიანობა"},
        {word:"Partly sunny during the day, fog by evening.",translate:"დღის განმავლობაში ნაწილობრივ მზიანი, საღამოს ნისლი"},
        {word:"Partly sunny in the morning changing to mostly cloudy in the afternoon and fog later in the evening.",translate:"დილით ნაწილობრივ მზიანი, დღისით უმეტესად მოღრუბლული, ხოლო საღამოს ნისლი"},
        {word:"Rain showers.",translate:"კოკისპირული წვიმა"},
        {word:"Partly sunny changing to rain showers in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Sunny changing to rain showers in the afternoon.",translate:"მზიანი დღის მეორე ნახევარში შესაძლებელია წვიმა"},
        {word:"Cloudy changing to rain showers in the afternoon.",translate:"ღრუბლიანობა დღის მეორე ნახევარში წვიმაა მოსალოდნელი"},
        {word:"Sunny changing to rain showers by evening.",translate:"მზიანი საღამოს მოსალოდნელია წვიმა"},
        {word:"Sunny.",translate:"მზიანი"},
        {word:"Rain showers in the morning and evening, sunny in the afternoon.",translate:"დილა-საღამოს წვიმა, შუადღისას მზიანი"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლებად ღრუბლიანი"},
        {word:"Partly sunny, fewer clouds in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში შესაძლებელია ღრუბლიანობა"},
        {word:"Rain showers in the morning and evening, partly sunny in the afternoon.",translate:"დილა-საღამოს წვიმა, შუადღისას ნაწილობრივ მზიანი"},
        {word:"Light rain changing to cloudy in the afternoon.",translate:"შუადღისას სუსტი წვიმა, მოღრუბლული"},
        {word:"Light rain changing to sunny in the afternoon.",translate:"სუსტი წვიმა, შუადღისას მზე"},
        {word:"Rain showers. Temperature falling to 27 °C.",translate:"წვიმის წვიმა. ტემპერატურა ეცემა 27 °C-მდე"},
        {word:"Mostly cloudy, fewer clouds in the afternoon.",translate:"ძირითადად მოღრუბლული"},
        {word:"Rain showers changing to light rain by afternoon.",translate:"შუადღისთვის წვიმა იცვლება მსუბუქ წვიმაში"},
        {word:"Rain showers, increasing in the evening.",translate:"წვიმა, საღამოს გახშირდება"},
        {word:"Light rain.",translate:"მსუბუქი წვიმა"},
        {word:"Sunny in the morning and evening, rain showers in the afternoon.",translate:"დილა-საღამოს მზიანი, შუადღისას წვიმა"},
        {word:"Mostly cloudy, fewer clouds in the afternoon and evening.",translate:"უმეტესად მოღრუბლული, დღის მეორე ნახევარში და საღამოს ნაკლებად ღრუბლიანი"},
        {word:"Cloudy changing to sunny by afternoon and evening.",translate:"შუადღისას და საღამოს მოღრუბლული შეიძლება შეიცვალოს მზიანით"},
        {word:"Partly sunny, more clouds in the afternoon and evening. . Wind from NW in the afternoon.",translate:"ნაწილობრივ მზიანი, დღისით და საღამოს მეტად ღრუბლიანი. . შუადღისას ქარი ჩრდილო-დასავლეთიდან"},
        {word:"Partly sunny changing to rain showers by evening.",translate:"საღამოს ნაწილობრივ მზიანი, შესაძლებელია წვიმა"},
        {word:"Cloudy changing to partly sunny by afternoon and evening.",translate:"შუადღისას და საღამოს მოღრუბლულობა  ნაწილობრივ მზიანი"},
        {word:"Rain showers changing to sunny in the afternoon.",translate:"წვიმა დღის მეორე ნახევარში შეიცვლება მზით"},
        {word:"Partly sunny, more clouds in the evening.",translate:"ნაწილობრივ მზიანი, საღამოს მოიმატებს ღრუბლიანობა"},
        {word:"Mostly cloudy, more clouds in the afternoon and evening. , but a feels-like temperature of only 24 °C. Wind from SW in the afternoon.",translate:"ძირითადად მოღრუბლული, შუადღისას და საღამოს მეტი ღრუბლიანი"},
        {word:"Possible rain. Temperature falling to 17 °C.",translate:"შესაძლებელია წვიმა"},
        {word:"Rain showers changing to cloudy in the afternoon.",translate:"ნალექი დღის მეორე ნახევარში მოღრუბლულობით იცვლება"},
        {word:"Cloudy changing to partly sunny by afternoon and evening. Temperature rising to 22 °C.",translate:"შუადღისას და საღამოს მოღრუბლულობა იცვლება ნაწილობრივ მზიანამდე."},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. . Wind from NE.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლები ღრუბლიანი."},
        {word:"Sunny changing to cloudy by evening.",translate:" მზიანი, საღამოს შეიცვლება ღრუბლიანობისაკენ"},
        {word:"Cloudy changing to partly sunny by afternoon and evening. Temperature falling to 16 °C.",translate:"დილით და საღამოს მოღრუბლული შუადღისას მზე."},
        {word:"Cloudy changing to partly sunny by evening. . Wind from N in the afternoon.",translate:"საღამოს მოღრუბლულობა ნაწილობრივ მზიანი"},
        {word:"Partly sunny changing to cloudy by afternoon and evening.",translate:"მოღრუბლულობა,შეიძლება შეიცვალოს მზიანით"},
        {word:"Cloudy, fewer clouds in the evening.",translate:"მოღრუბლული, საღამოს ნაკლებად მოღრუბლული"},
        {word:"Partly sunny, fewer clouds in the evening.",translate:"ნაწილობრივ მზიანი, საღამოს ნაკლებად ღრუბლიანობა"},
        {word:"Partly sunny changing to cloudy by afternoon.",translate:"ღრუბლიანობა შეიძლება შეიცვალოს მზით"},
        {word:"Cloudy.",translate:"ღრუბლიანი"},
        {word:"Mostly cloudy, more clouds in the evening.",translate:"უმეტესად მოღრუბლული, საღამოს მეტი ღრუბელი"},
        {word:"Partly sunny changing to cloudy by evening.",translate:"ნაწილობრივ მზიანი, საღამოს მოღრუბლული"},
        {word:"Partly sunny, more clouds in the afternoon.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში მეტი ღრუბლიანი"},
        {word:"Light rain changing to partly sunny in the afternoon.",translate:"შუადღისას სუსტი წვიმა იცვლება ნაწილობრივ მზიანამდე"},
        {word:"Cloudy changing to partly sunny by evening.",translate:"საღამოს მოღრუბლულობა იცვლება ნაწილობრივ მზიანამდე"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. Temperature rising to 27 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლებად ღრუბლიანი"},
        {word:"Sunny, more clouds in the afternoon.",translate:"მზიანი, დღის მეორე ნახევარში მეტი ღრუბლიანი"},
        {word:"Cloudy changing to clear by evening.",translate:"მოღრუბლულობა საღამოს შეიცვლება მზიანით"},
        {word:"Mostly cloudy, more clouds in the afternoon.",translate:"ძირითადად მოღრუბლული, დღის მეორე ნახევარში მეტი ღრუბლიანი"},
        {word:"Sunny changing to mostly cloudy by afternoon.",translate:"ძირითადად მზიანი საღამოს მოღრუბლულობა"},
        {word:"Mostly cloudy changing to rain showers in the afternoon.",translate:"უმეტესად მოღრუბლული, დღის მეორე ნახევარში წვიმა"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. , but a feels-like temperature of only 7 °C. Wind from NW.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლები ღრუბლიანი."},
        {word:"Sunny. , but a feels-like temperature of only 7 °C. Wind from NW.",translate:"მზიანი"},
        {word:"Sunny, more clouds in the afternoon. Temperature rising to 18 °C.",translate:"მზიანი, შუადღისას მეტი ღრუბლიანი"},
        {word:"Cloudy, fewer clouds in the afternoon.",translate:"მოღრუბლული, დღის მეორე ნახევარში ნაკლებად ღრუბლიანი"},
        {word:"Sunny, more clouds in the evening.",translate:"მზიანი, საღამოს მეტი ღრუბლიანი"},
        {word:"Cloudy changing to partly sunny by afternoon.",translate:"შუადღისთვის ღრუბლიანობა იცვლება ნაწილობრივ მზიანამდე"},
        {word:"Cloudy changing to light rain in the afternoon.",translate:"მოღრუბლული, დღის მეორე ნახევარში მსუბუქი წვიმა"},
        {word:"Light rain, increasing in the evening.",translate:"მსუბუქი წვიმა, საღამოს მოიმატებს წვიმა"},
        {word:"Cloudy in the morning and evening, light rain in the afternoon.",translate:"დილა-საღამოს მოღრუბლული, შუადღისას წვიმა"},
        {word:"Cloudy changing to rain by evening.",translate:"ღრუბელი,საღამოს წვიმა"},
        {word:"Rain.",translate:"წვიმა"},
        {word:"Rain, reducing in the afternoon. . Wind from SW in the afternoon.",translate:"წვიმა, შუადღისას შემცირდება. . შუადღისას ქარი დასავლეთიდან"},
        {word:"Light rain changing to rain showers by afternoon. . Wind from SW in the afternoon.",translate:"მსუბუქი წვიმა შუადღისას ქარი დასავლეთიდან"},
        {word:"Rain, increasing in the afternoon.",translate:"წვიმა, დღის მეორე ნახევარში მოიმატებს"},
        {word:"Rain, reducing in the afternoon.",translate:"წვიმა, შუადღისას შემცირდება"},
        {word:"Rain showers changing to partly sunny in the afternoon.",translate:"ნალექი დღის მეორე ნახევარში იცვლება ნაწილობრივ მზიანზე"},
        {word:"Cloudy changing to rain in the afternoon.",translate:"მოღრუბლული,დღის მეორე ნახევარში წვიმა"},
        {word:"Light rain changing to rain showers by afternoon.",translate:"წვიმა, შუადღისთვის შეიცვლება ძლიერი წვიმით"},
        {word:"Cloudy during the day, thunderstorms by evening.",translate:"დღისით მოღრუბლული, საღამოს ელჭექი"},
        {word:"Light rain in the morning and evening, mostly cloudy in the afternoon.",translate:"დილა-საღამოს სუსტი წვიმა, შუადღისას უმეტესად მოღრუბლული"},
        {word:"Light rain in the morning changing to cloudy in the afternoon and thunderstorms later in the evening.",translate:"დილალით მსუბუქი წვიმა, შუადღისას მოღრუბლული, ელჭექი გვიან საღამოს"},
        {word:"Light rain changing to thunderstorms in the afternoon.",translate:"მსუბუქი წვიმა შუადღემდე და შემდეგ ელჭექი"},
        {word:"Rain changing to thunderstorms in the afternoon.",translate:"წვიმა, შუადღისას ელჭექი"},
        {word:"Sunny changing to mostly cloudy by evening.",translate:"საღამოს მზიანი, მოღრუბლული"},
        {word:"Mostly cloudy, more clouds in the afternoon. . Wind from N in the morning.",translate:"ძირითადად მოღრუბლული, დღის მეორე ნახევარში მოიმატებს ღრუბლიანობა"},
        {word:"Cloudy. , but a feels-like temperature of up to 9 °C. Wind from N.",translate:"Მოღრუბლული. , ქარი"},
        {word:"Cloudy changing to possible rain in the afternoon. . Wind from N in the morning.",translate:"მოღრუბლული, შუადღისას მოსალოდნელია წვიმა. . დილით ჩრდილოეთის ქარი"},
        {word:"Light rain, increasing in the afternoon and evening.",translate:"მსუბუქი წვიმა ძლიერდება შუადღისას და საღამოს"},
        {word:"Rain, reducing in the afternoon and evening.",translate:"წვიმა, შუადღისას და საღამოს წვიმა იკლებს"},
        {word:"Mostly cloudy changing to light rain in the afternoon.",translate:"უმეტესად მოღრუბლული, დღის მეორე ნახევარში ცვალებადი წვიმაა"},
        {word:"Mostly cloudy in the morning and evening, rain showers in the afternoon.",translate:"დილა-საღამოს უმეტესად მოღრუბლული, შუადღისას წვიმა"},
        {word:"Partly sunny changing to light rain in the afternoon.",translate:"ნაწილობრივ მოღრუბლული, შუადღისას წვიმა"},
        {word:"Rain, reducing in the evening.",translate:"წვიმა, საღამოს შემცირდება"},
        {word:"Mostly cloudy changing to sunny by afternoon.",translate:"უმეტესად მოღრუბლული, შუადღისას შეიცვლება მზით"},
        {word:"Sunny changing to possible rain by evening.",translate:"მზიანი, საღამოს შესაძლებელია წვიმა"},
        {word:"Partly sunny changing to possible rain by evening.",translate:"ნაწილობრივ მოღრუბლული, საღამოს მოსალოდნელია წვიმა"},
        {word:"Sunny changing to cloudy by afternoon.",translate:"მზიანი, შუადღისას ღრუბლიანობა"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. . Wind from SW in the afternoon.",translate:"მოღრუბლული, შუადღისას და საღამოს ნაწილობრივ მოღრუბლული. შუადღისას ქარი სამხრეთ-დასავლეთი"},
        {word:"Partly sunny during the day, thunderstorms by evening.",translate:"დღისით ნაწილობრივ მზიანი, საღამოს ელჭექი"},
        {word:"Sunny. . Wind from NE.",translate:"მზიანი. ქარი ჩრდილო-აღმოსავლეთიდან"},
        {word:"Sunny. . Wind from N.",translate:"მზიანი. ქარი ჩრდილოეთიდან"},
        {word:"Sunny. . Wind from N in the afternoon.",translate:"მზიანი. შუადღისას ქარი ჩრდილოეთიდან"},
        {word:"Sunny, more clouds in the evening. . Wind from N in the afternoon.",translate:"მზიანი, საღამოს მოღრუბლული. . შუადღისას ქარი ჩრდილოეთიდან"},
        {word:"Sunny. . Wind from NW in the afternoon.",translate:"მზიანი. შუადღისას ქარი ჩრდილო-დასავლეთიდან"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. . Wind from NW in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლები ღრუბლიანი. . შუადღისას ქარი ჩრდილო-დასავლეთიდან"},
        {word:"Partly sunny in the morning changing to rain showers in the afternoon and thunderstorms later in the evening.",translate:"დილით ნაწილობრივ მოღრუბლული, შუადღისას წვიმა, საღამოს ელჭექი."},
        {word:"Rain showers changing to thunderstorms in the afternoon.",translate:"შუადღისას წვიმა ელჭექში გადაიზრდება"},
        {word:"Sunny in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening.",translate:"დილით მზიანი, შუადღისას ნაწილობრივ მოღრუბლული, საღამოს ელჭექი."},
        {word:"Thunderstorms in the morning, partly sunny later.",translate:"დილით ელჭექი, მოგვიანებით ნაწილობრივ მოღრუბლული"},
        {word:"Light rain in the morning changing to mostly cloudy in the afternoon and thunderstorms later in the evening.",translate:"დილით სუსტი წვიმა, შუადღისას მოღრუბლული, საღამოს ელჭექი."},
        {word:"Cloudy changing to partly sunny by afternoon and evening. Temperature falling to 20 °C.",translate:"დღისით და საღამოს მოღრუბლული"},
        {word:"Mostly cloudy changing to sunny by afternoon and evening.",translate:"ძირითადად მოღრუბლული, შუადღისას და საღამოს შეიცვლება მზით"},
        {word:"Mostly cloudy, fewer clouds in the evening.",translate:"ძირითადად მოღრუბლული, საღამოს ნაკლებად მოღრუბლული"},
        {word:"Possible rain in the morning, light rain in the afternoon. Temperature falling to 24 °C.",translate:"დილით მოსალოდნელია წვიმა, შუადღისას წვიმა. ტემპერატურის ვარდნა"},
        {word:"Fog in the morning, cloudy later. Temperature rising to 29 °C.",translate:"დილით ნისლი, მოგვიანებით მოღრუბლული. ტემპერატურის მატება"},
        {word:"Light rain changing to rain showers by afternoon and evening.",translate:"წვიმა, შუადღისას და საღამოს წვიმა შესუსტდება"},
        {word:"Sunny, more clouds in the afternoon and evening. , but a feels-like temperature of up to 35 °C.",translate:"მზიანი, მოღრუბლული დღისით და საღამოს."},
        {word:"Partly sunny in the morning and evening, rain showers in the afternoon.",translate:"დილა-საღამოს ნაწილობრივ მზიანი, შუადღისას წვიმა"},
        {word:"Mostly cloudy in the morning changing to light rain in the afternoon and thunderstorms later in the evening.",translate:"უმეტესად მოღრუბლული დილა, დღის მეორე ნახევარში წვიმა, საღამოს კი ელჭექი"},
        {word:"Rain showers in the morning and evening, thunderstorms in the afternoon.",translate:"დილა-საღამოს წვიმა, შუადღისას ელჭექი"},
        {word:"Rain in the morning and evening, mostly cloudy in the afternoon.",translate:"დილა-საღამოს წვიმა, შუადღისას უმეტესად მოღრუბლული"},
        {word:"Partly sunny in the morning changing to rain in the afternoon and thunderstorms later in the evening.",translate:"დილით ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა და საღამოს ელჭექი"},
        {word:"Rain showers changing to partly sunny by evening.",translate:"წვიმა საღამომდე შეიცვლება ცვალებადი მზიანობით"},
        {word:"Rain showers changing to mostly cloudy in the afternoon.",translate:"მოღრუბლული,შუადღისას წვიმა"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. Temperature falling to 29 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლებად ღრუბლიანი."},
        {word:"Cloudy changing to light rain by evening.",translate:"საღამოს მოღრუბლული, შემდეგ მოსალოდნელია სუსტი წვიმა"},
        {word:"Rain in the morning and evening, thunderstorms in the afternoon.",translate:"დილა-საღამოს წვიმა, შუადღისას ელჭექი"},
        {word:"Partly sunny changing to rain showers in the afternoon. . Wind from SE in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა. შუადღისას ქარი სამხრეთ-აღმოსავლეთიდან"},
        {word:"Thunderstorms changing to partly sunny by evening.",translate:"საღამოს ელჭექი ნაწილობრივ მზიან ამინდში გადაიზრდება"},
        {word:"Mostly cloudy, fewer clouds in the afternoon. . Wind from SE in the afternoon.",translate:"ძირითადად მოღრუბლული, შუადღისას ნაკლებად ღრუბლიანი. შუადღისას ქარი სამხრეთ-აღმოსავლეთიდან"},
        {word:"Partly sunny. . Wind from SE in the afternoon.",translate:"Ნაწილობრივ მზიანი. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Partly sunny, fewer clouds in the afternoon. . Wind from E in the afternoon.",translate:"დღის განმავლობაში ნაწილობრივ მოღრუბლული, შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Thunderstorms. . Wind from SE in the afternoon.",translate:"ჭექა-ქუხილი. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Thunderstorms changing to rain showers by evening. . Wind from E in the afternoon.",translate:"საღამოს ელჭექით წვიმა. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Light rain. . Wind from SE in the afternoon.",translate:"მსუბუქი წვიმა. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Rain showers during the day, thunderstorms by evening. . Wind from E in the afternoon.",translate:"დღისით წვიმა, საღამოს ელჭექი. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Thunderstorms.",translate:"ჭექა-ქუხილი"},
        {word:"Thunderstorms changing to rain showers by evening. . Wind from SE in the afternoon.",translate:"საღამოს ჭექა-ქუხილი წვიმის სახით იცვლება. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Thunderstorms changing to light rain by evening. . Wind from SE in the afternoon.",translate:"საღამოს ელჭექი იცვლება მსუბუქ წვიმაში. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Partly sunny, more clouds in the afternoon. . Wind from SE in the afternoon.",translate:"Ნაწილობრივ მოღრუბლული. შუადღისას სამხრეთ-აღმოსავლეთის ქარი"},
        {word:"Rain showers changing to thunderstorms in the afternoon. . Wind from SE in the afternoon.",translate:"შუადღისას წვიმა ელჭექში გადაიზრდება. შუადღისას ქარი სამხრეთ-აღმოსავლეთი"},
        {word:"Thunderstorms changing to partly sunny by evening. . Wind from SE in the afternoon.",translate:"საღამოს ელჭექი შეიცვლება ნაწილობრივ მზიანში. შუადღისას ქარი სამხრეთ-აღმოსავლეთი"},
        {word:"Rain showers changing to partly sunny by evening. . Wind from E in the afternoon.",translate:"წვიმა, საღამოს შეიცვლება ცვალებადი მზით. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Rain showers during the day, thunderstorms by evening. . Wind from SE in the afternoon.",translate:""},
        {word:"Thunderstorms in the morning and evening, partly sunny in the afternoon. . Wind from SE in the afternoon.",translate:"დილა-საღამოს ელჭექი, შუადღისას ნაწილობრივ მზიანი. შუადღისას ქარი სამხრეთ-აღმოსავლეთის მიმართულებიდან"},
        {word:"Fog in the morning, light rain later.",translate:"დილით ნისლი, მოგვიანებით სუსტი წვიმა"},
        {word:"Fog in the morning, possible rain later.",translate:"დილით ნისლი, მოგვიანებით შესაძლებელია წვიმა"},
        {word:"Possible rain in the morning and afternoon, rain showers in the evening.",translate:"შესაძლებელია წვიმა დილა-შუადღეს, საღამოს წვიმა"},
        {word:"Rain showers, increasing in the afternoon.",translate:"წვიმა, შუადღისას მოიმატებს"},
        {word:"Partly sunny, fewer clouds in the afternoon. . Wind from SW in the afternoon.",translate:"დღის განმავლობაში ნაწილობრივ მოღრუბლული, შუადღისას ქარი სამხრეთ-დასავლეთი"},
        {word:"Sunny, more clouds in the afternoon. . Wind from SW in the afternoon.",translate:"მზიანი, დღის მეორე ნახევარში მეტი ღრუბლიანობა. შუადღისას ქარი დასავლეთიდან"},
        {word:"Light rain changing to mostly cloudy in the afternoon.",translate:"სუსტი წვიმა, დღის მეორე ნახევარში მოღრუბლულობა"},
        {word:"Rain, increasing in the evening.",translate:"წვიმა, საღამოს მოიმატებს"},
        {word:"Rain, increasing in the afternoon and evening.",translate:"წვიმა, დღის მეორე ნახევარში და საღამოს მოიმატებს"},
        {word:"Rain showers. . Wind from SW in the afternoon.",translate:"Წვიმა. შუადღისას ქარი დასავლეთიდან"},
        {word:"Rain showers in the morning and evening, mostly cloudy in the afternoon.",translate:"დილა-საღამოს წვიმა, დღისით უმეტესად მოღრუბლული"},
        {word:"Fog in the morning, mostly cloudy later.",translate:"დილით ნისლი, მოგვიანებით უმეტესად მოღრუბლული"},
        {word:"Partly sunny in the morning changing to rain showers in the afternoon and thunderstorms later in the evening. . Wind from SW in the afternoon.",translate:"დილით ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა, საღამოს კი ელჭექი, შუადღისას ქარი დასავლეთიდან"},
        {word:"Light rain changing to cloudy in the afternoon. . Wind from SW in the afternoon.",translate:"შუადღისას სუსტი წვიმა მოღრუბლული. დღის მეორე ნახევარში ქარი დასავლეთიდან"},
        {word:"Partly sunny, fewer clouds in the afternoon and evening. , but a feels-like temperature of up to 37 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში და საღამოს ნაკლები ღრუბლიანობა."},
        {word:"Partly sunny changing to thunderstorms in the afternoon.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში იცვლება ელჭექით"},
        {word:"Mostly cloudy changing to rain showers in the afternoon. . Wind from NE.",translate:"ძირითადად მოღრუბლული წვიმა შუადღისას. ქარი ჩრდილო-აღმოსავლეთიდან."},
        {word:"Thunderstorms changing to possible rain by evening.",translate:"ჭექა-ქუხილი საღამოს მოსალოდნელია წვიმა"},
        {word:"Partly sunny. . Wind from NE in the afternoon.",translate:"Ნაწილობრივ მზიანი. შუადღისას ქარი ჩრდილო-აღმოსავლეთით"},
        {word:"Partly sunny changing to rain showers by evening. . Wind from NE in the afternoon.",translate:"საღამოს ნაწილობრივ მზიანი, საღამოს წვიმა, შუადღისას ქარი ჩრდილო-აღმოსავლეთით"},
        {word:"Partly sunny, fewer clouds in the evening. . Wind from NE.",translate:"საღამოს ნაწილობრივ მოღრუბლული. ქარი ჩრდილო-აღმოსავლეთიდან"},
        {word:"Partly sunny in the morning changing to mostly cloudy in the afternoon and thunderstorms later in the evening.",translate:"დილით ნაწილობრივ მზიანი, დღისით უმეტესად მოღრუბლული, ხოლო გვიან საღამოს ელჭექით"},
        {word:"Thunderstorms in the morning and evening, sunny in the afternoon.",translate:"დილა-საღამოს ელჭექი, შუადღისას მზიანი"},
        {word:"Partly sunny, fewer clouds in the evening. . Wind from NE in the afternoon.",translate:"ნაწილობრივ მზიანი, საღამოს ნაკლები ღრუბლიანი. შუადღისას ქარი ჩრდილო-აღმოსავლეთით"},
        {word:"Partly sunny changing to light rain by evening. . Wind from NE.",translate:"ნაწილობრივ მოღრუბლული, საღამოს ცვალებადი წვიმა. ქარი ჩრდილო-აღმოსავლეთიდან"},
        {word:"Mostly cloudy in the morning changing to cloudy in the afternoon and thunderstorms later in the evening. . Wind from E.",translate:"დილით მოღრუბლული, შუადღისას მოღრუბლული, საღამოს ელჭექი. ქარი აღმოსავლეთიდან"},
        {word:"Partly sunny during the day, thunderstorms by evening. . Wind from E in the morning.",translate:"დღისით ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. . დილით აღმოსავლური ქარი"},
        {word:"Partly sunny during the day, thunderstorms by evening. . Wind from NE in the afternoon.",translate:"დღისით ნაწილობრივ მზიანი, საღამოს ელჭექი. შუადღისას ქარი ჩრდილო-აღმოსავლეთით"},
        {word:"Sunny in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening. . Wind from NE in the afternoon.",translate:"დილით მზიანი, შუადღისას ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. შუადღისას ქარი ჩრდილო-აღმოსავლეთი"},
        {word:"Partly sunny, fewer clouds in the afternoon. . Wind from NE in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში ნაკლები ღრუბლიანი. შუადღისას ქარი ჩრდილო-აღმოსავლეთით"},
        {word:"Mostly cloudy in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening. . Wind from E in the afternoon.",translate:"დილით ძირითადად მოღრუბლული, შუადღისას ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Cloudy. . Wind from E in the afternoon.",translate:"Მოღრუბლული. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Rain showers in the morning changing to light rain in the afternoon and thunderstorms later in the evening.",translate:"დილით წვიმა, შუადღისას წვიმა, საღამოს კი ელჭექი."},
        {word:"Partly sunny changing to rain showers in the afternoon. . Wind from E in the afternoon.",translate:"ნახევრად მოღრუბლული ნაშუადღევს წვიმა. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Sunny in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening. . Wind from E in the afternoon.",translate:"დილით მზიანი, შუადღისას ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. . შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Partly sunny in the morning changing to rain showers in the afternoon and thunderstorms later in the evening. . Wind from E in the afternoon.",translate:"დილით ნაწილობრივ მოღრუბლული, შუადღისას წვიმა და საღამოს ელჭექი. . შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Mostly cloudy in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening. . Wind from NE in the afternoon.",translate:"დილით ძირითადად მოღრუბლული, შუადღისას ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. . შუადღისას ქარი ჩრდილო-აღმოსავლეთი"},
        {word:"Cloudy in the morning changing to mostly cloudy in the afternoon and thunderstorms later in the evening. . Wind from E in the afternoon.",translate:"დილით მოღრუბლული, შუადღისას მოღრუბლული, საღამოს ელჭექი. . შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Partly sunny during the day, thunderstorms by evening. . Wind from E in the afternoon.",translate:"დღისით ნაწილობრივ მოღრუბლული, საღამოს ელჭექი. შუადღისას ქარი აღმოსავლეთის მხრიდან"},
        {word:"Rain showers in the morning changing to partly sunny in the afternoon and thunderstorms later in the evening.",translate:"დილით წვიმა, შუადღისას ნაწილობრივ მზიანი და ელჭექი გვიან საღამოს"},
        {word:"Partly sunny in the morning changing to sunny in the afternoon and thunderstorms later in the evening.",translate:"დილით ნაწილობრივ მოღრუბლული, შუადღისას მზიანი, გვიან შუადღისას ელჭექი"},
        {word:"Possible rain changing to thunderstorms in the afternoon.",translate:"დღის მეორე ნახევარში მოსალოდნელია წვიმა ელჭექით"},
        {word:"Light rain in the morning, possible rain in the afternoon.",translate:"დილას წვიმა, შუადღისას შესაძლებელია წვიმა"},
        {word:"Light rain. , but a feels-like temperature of up to 34 °C.",translate:"მსუბუქი წვიმა"},
        {word:"Rain showers during the day, thunderstorms by evening.",translate:"დღისით წვიმა, საღამოს ელჭექი"},
        {word:"Rain showers changing to clear by evening.",translate:"წვიმა. საღამოს მოწმენდილი"},
        {word:"Thunderstorms in the morning and evening, possible rain in the afternoon.",translate:"დილა-საღამოს ელჭექი, შუადღისას შესაძლებელია წვიმა"},
        {word:"Fog in the morning, cloudy later.",translate:"დილით ნისლი, მოგვიანებით მოღრუბლული"},
        {word:"Mostly cloudy changing to thunderstorms in the afternoon.",translate:"უმეტესად მოღრუბლული, დღის მეორე ნახევარში იცვლება ელჭექით"},
        {word:"Fog in the morning, mostly cloudy later. , but a feels-like temperature of up to 41 °C.",translate:"დილით ნისლი, მოგვიანებით უმეტესად მოღრუბლული"},
        {word:"Rain showers changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 39 °C.",translate:"ნალექი დღის მეორე ნახევარში გადაინაცვლებს ელჭექით"},
        {word:"Partly sunny changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 38 °C.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში იცვლება ელჭექით"},
        {word:"Rain showers changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 38 °C.",translate:"წვიმა დღის მეორე ნახევარში ელჭექით იცვლება"},
        {word:"Sunny changing to rain showers in the afternoon. , but a feels-like temperature of up to 39 °C.",translate:"მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Sunny changing to rain showers by evening. , but a feels-like temperature of up to 41 °C.",translate:"საღამოს მზიანი წვიმა იცვლება"},
        {word:"Sunny, more clouds in the evening. , but a feels-like temperature of up to 41 °C.",translate:"მზიანი, საღამოს მეტი ღრუბლიანი"},
        {word:"Partly sunny changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 39 °C.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში იცვლება ელჭექით"},
        {word:"Cloudy changing to possible rain in the afternoon.",translate:"დღის მეორე ნახევარში მოღრუბლული მოსალოდნელია წვიმა"},
        {word:"Cloudy changing to possible rain by evening.",translate:"მოღრუბლული,საღამოს მოსალოდნელია წვიმა"},
        {word:"Light rain in the morning and afternoon, possible rain in the evening.",translate:"დილა-საღამოს სუსტი წვიმა, საღამოს შესაძლებელია წვიმა"},
        {word:"Light rain in the morning and afternoon, possible rain in the evening. , but a feels-like temperature of up to 34 °C.",translate:"დილა-საღამოს სუსტი წვიმა"},
        {word:"Fog in the morning, cloudy later. , but a feels-like temperature of up to 37 °C.",translate:"დილით ნისლი, მოგვიანებით მოღრუბლული"},
        {word:"Cloudy changing to thunderstorms in the afternoon.",translate:"ღრუბლიანი,დღის მეორე ნახევარში  ელჭექი"},
        {word:"Rain showers changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 40 °C.",translate:"წვიმა დღის მეორე ნახევარში ელჭექით იცვლება"},
        {word:"Partly sunny in the morning changing to rain showers in the afternoon and thunderstorms later in the evening. , but a feels-like temperature of up to 38 °C.",translate:"დილით ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა, საღამოს კი ელჭექი"},
        {word:"Partly sunny, more clouds in the evening. , but a feels-like temperature of up to 39 °C.",translate:"ნახევრად მზიანი, საღამოს მეტი ღრუბელი"},
        {word:"Sunny, more clouds in the afternoon. , but a feels-like temperature of up to 40 °C.",translate:"მზიანი, დღის მეორე ნახევარში მეტი ღრუბელი"},
        {word:"Rain showers changing to thunderstorms in the afternoon. , but a feels-like temperature of up to 37 °C.",translate:"წვიმა დღის მეორე ნახევარში ელჭექით იცვლება"},
        {word:"Sunny during the day, thunderstorms by evening.",translate:"დღისით მზიანი, საღამოს ელჭექი"},
        {word:"Partly sunny during the day, thunderstorms by evening. , but a feels-like temperature of up to 37 °C.",translate:"დღისით ნაწილობრივ მზიანი, საღამოს ელჭექი"},
        {word:"Possible rain in the morning and evening, cloudy in the afternoon. Temperature rising to 31 °C.",translate:"დილა-საღამოს მოსალოდნელია წვიმა, შუადღისას მოღრუბლული"},
        {word:"Possible rain changing to partly sunny in the afternoon.",translate:"ნალექი ნაშუადღევს შესაძლოა შეიცვალოს ნაწილობრივ მზიანით"},
        {word:"Rain showers. Temperature falling to 24 °C.",translate:"წვიმა"},
        {word:"Rain showers changing to mostly cloudy by evening.",translate:"წვიმა, საღამოს უმეტესად ღრუბლიანი"},
        {word:"Partly sunny changing to rain showers in the afternoon. Temperature rising to 28 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Rain showers changing to light rain by evening.",translate:"წვიმა, საღამოს წვიმა შესუსტდება"},
        {word:"Possible rain changing to cloudy in the afternoon.",translate:"მოსალოდნელია წვიმა, რომელიც დღის მეორე ნახევარში გადაინაცვლებს მოღრუბლულამდე"},
        {word:"Fog in the morning, sunny later.",translate:"დილით ნისლი, მოგვიანებით მზიანი"},
        {word:"Partly sunny in the morning and evening, rain showers in the afternoon. . Wind from NW in the afternoon.",translate:"დილა-საღამოს ნაწილობრივ მოღრუბლული, შუადღისას წვიმა. შუადღისას ქარი ჩრდილო-დასავლეთით"},
        {word:"Possible rain in the morning, light rain in the afternoon.",translate:"დილით მოსალოდნელია წვიმა, შუადღისას სუსტი წვიმა"},
        {word:"Fog in the morning, rain showers later. Temperature rising to 25 °C.",translate:"დილით ნისლი, მოგვიანებით წვიმა"},
        {word:"Partly sunny in the morning changing to rain showers in the afternoon and fog later in the evening.",translate:"დილით ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა, საღამოს კი ნისლი"},
        {word:"Fog in the morning, partly sunny later.",translate:"დილით ნისლი, მოგვიანებით ნაწილობრივ მზიანი"},
        {word:"Fog in the morning, rain showers later. Temperature rising to 26 °C.",translate:"დილით ნისლი, მოგვიანებით წვიმა"},
        {word:"Cloudy in the morning changing to rain in the afternoon and fog later in the evening.",translate:"დილით მოღრუბლული, დღის მეორე ნახევარში წვიმა, საღამოს კი ნისლი"},
        {word:"Light rain in the morning changing to rain showers in the afternoon and fog later in the evening.",translate:"დილით სუსტი წვიმა, ხოლო მოგვიანებით საღამოს ნისლი"},
        {word:"Partly sunny changing to light rain in the afternoon. Temperature rising to 23 °C.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში იცვლება მსუბუქ წვიმამდე"},
        {word:"Cloudy in the morning changing to mostly cloudy in the afternoon and fog later in the evening.",translate:"დილით მოღრუბლული, ნისლი გვიან საღამოს"},
        {word:"Partly sunny changing to rain showers in the afternoon. Temperature rising to 26 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Rain showers changing to partly sunny in the afternoon. Temperature falling to 24 °C.",translate:"ნალექი დღის მეორე ნახევარში იცვლება ნაწილობრივ მზიანზე"},
        {word:"Partly sunny changing to light rain in the afternoon. Temperature rising to 28 °C.",translate:"ნახევრად მზიანი, დღის მეორე ნახევარში იცვლება მსუბუქ წვიმამდე"},
        {word:"Partly sunny changing to rain showers in the afternoon. Temperature rising to 30 °C.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Cloudy changing to possible rain by evening.",translate:"მოღრუბლული მოსალოდნელია წვიმა საღამოს"},
        {word:"Mostly cloudy, fewer clouds in the afternoon. . Wind from NW in the afternoon.",translate:"ძირითადად მოღრუბლული, შუადღისას ნაკლებად ღრუბლიანი. შუადღისას ქარი ჩრდილო-დასავლეთიდან"},
        {word:"Rain showers. Temperature falling to 25 °C.",translate:"წვიმა"},
        {word:"Partly sunny changing to rain showers in the afternoon.",translate:"ნაწილობრივ მზიანი, დღის მეორე ნახევარში წვიმა"},
        {word:"Possible rain in the morning and evening, cloudy in the afternoon.",translate:"დილა-საღამოს მოსალოდნელია წვიმა, შუადღისას მოღრუბლული"},
        {word:"Partly sunny, fewer clouds in the evening. Temperature rising to 31 °C.",translate:"ნაწილობრივ მზიანი, საღამოს ნაკლები ღრუბლიანი"},
        {word:"Thunderstorms in the morning, rain showers later.",translate:"დილით ელჭექი, მოგვიანებით წვიმა"},
        {word:"Fog in the morning, sunny later. , but a feels-like temperature of up to 36 °C.",translate:"დილით ნისლი, მოგვიანებით მზიანი"},
        {word:"Sunny changing to thunderstorms in the afternoon.",translate:"დღის მეორე ნახევარში მზიანი ელჭექით შეიცვლება"},
		{word:"Possible rain in the morning, rain showers in the afternoon.",translate:"მოსალოდნელია წვიმა"}
		]
        return datanewObject
}