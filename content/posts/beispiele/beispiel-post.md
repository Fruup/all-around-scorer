---
title: Dieser Post zeigt dir alle Features, die du benutzen kannst.
excerpt: In diesem Post geht es darum, wie sich die retrograde Venusrotation auf das Paarungsverhalten der philippinischen Weinbergschnecke auswirkt.
date: 09.11.1989
---

# Wichtig!

Am Anfang der **'.md'**-Datei muss ein Abschnitt mit Metainformationen stehen.
Er steht zwischen zwei Markerzeilen (**'---'**) und muss Titel (*title*), Ausschnitt bzw. Preview (*excerpt*) und Release-Datum (*date*) enthalten.

# Headline

Hier steht dann ein Paragraph.

Quis consectetur esse sint sint commodo nisi elit nostrud excepteur. Dolor pariatur ipsum fugiat fugiat incididunt magna labore esse ullamco aliqua ipsum. Ad ad qui fugiat aliquip aliqua aute commodo.

## Unterabschnitt 1

Etwas kleinere Headline.

### Unterabschnitt 2

Noch kleinere Headline.

# Trenner

Trenner werden generiert durch drei oder mehr aufeinanderfolgende **'-'**.

---

# Texteffekte

*Dieser Text* ist **ETWAS** ~~schöner~~ anders als die anderen.

------------

Falls es dir noch nicht aufgefallen ist:<br>
Am oberen Bildschirmrand wird dir ganz subtil der Fortschritt beim Lesen angezeigt.<br>
Und gezielte Zeilenumbrüche entstehen durch Einsatz von '<**br**>'.

------------

# Quotes

> E = mc²

> Erst wenn der Subwoofer die Katze inhaliert, dann fickt der Bass richtig.<br>

...wie schon Mozart sagte.

------------

# Listen und Aufzählungen

### Ungeordnete Liste

- Ein bisschen Roastbeef
- 'n Hühnchen
- 'ne Pizza

### Geordnete Liste

1. Lakers
2. Eagles
3. Portland Bumblebees
4. Was mache ich hier

------------

# Externe Bilder einbetten

Beachte das **'!'** am Anfang der Zeile, es unterscheidet Bilder von Links.
Der Text in den eckigen Klammern ist eine Beschreibung des Bildes (Barrierefreiheit: Der Text wird von screen readern für blinde Menschen vorgelesen. Außerdem wird er angezeigt, sollte das Bild nicht geladen werden können).

Hier nun ein Bild eines süßen Biebers:

![Süßer Bieber](https://p0.pikrepo.com/preview/1007/616/brown-beaver.jpg)

# Interne Bilder einbetten

Alle internen Bilder werden im Ordner '*assets/img*' aufbewahrt. Willst du eigene Bilder in deinen Posts benutzen, lege sie in diesen Ordner und verwende sie wie folgt in der Markdowndatei:

<blog-image src='katze.jpg' alt='Was ne süße Katze, oder?' width='50'></blog-image>

Wichtig (aber nutzlos) dabei ist der sog. *closing tag* '<**/blog-image**>'.

**Attribute:**

- *src*: der vollständige Dateiname
- *alt*: eine verbale Beschreibung des Bildes aus Gründen der Barrierefreiheit *(optional)*
- *width*: eine Zahl zwischen 0 und 100, die angibt, wie viel Prozent der Breite des Artikels das Bild einnehmen soll *(optional, default: 66)*

Es geht also auch kürzer:

<blog-image src='katze.jpg'></blog-image>

------------

# Link zu externer Seite

Links lassen sich ähnlich wie externe Bilder einbetten, nur ohne das **'!'** am Anfang der Zeile.

[Kurz was googlen...](https://google.com/)

# Link zu anderem Blog-Post

Gib einfach den Dateinamen ohne Endung (**.md**) an.

Der Link für die Home-Page lautet **'/'** - ohne Anführungszeichen.

[D-Day Review](/d-day-review)

Du kannst sogar auf einen ganz bestimmten Teil deines Blogs verweisen, indem du an den Namen ein **'#'** und den Code der Überschrift des Abschnittes anhängst.
Sei die Überschrift beispielsweise **'Der Mega Deal'**, ist der Code dafür *'der-mega-deal'*.

[D-Day Review, Mega Deal](/d-day-review#der-mega-deal)
