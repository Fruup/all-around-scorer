# Informationen über das Erstellen und Veröffentlichen neuer Blogposts

## Wie geht das hier eigentlich alles?

Alle Posts werden im Markdown-Format geschrieben.
Wie das aussieht, siehst du hier (diese Datei ist im Markdown-Format)
und auf den Websites, die unten verlinkt sind.

Die Blogeinträge werden in dem Ordner 'content' gelagert.
Willst du einen neuen Post erstellen, erzeuge einfach eine
neue '.md' Datei in diesem Ordner.

Um zu sehen, wie die Website mit dem neuen Blogeintrag aussieht,
starte die Datei 'preview.sh' in diesem Ordner.
Es öffnet sich ein Browser-Fenster, in dem du die Website testen kannst
(es kann ein paar Sekunden dauern, bis sich der Server im Hintergrund startet).
Änderst du etwas an dem Content und speicherst du die Datei ab,
lädt sich die Website automatisch neu. Sollte das nicht der Fall sein,
versuche einfach, die Seite mit F5 neu zu laden, oder starte das
'preview.sh'-Programm neu.
WICHTIG: Schließe das Programm, indem du Strg+C drückst, sonst läuft der Server im Hintergrund weiter.

Bist du zufrieden mit deiner Arbeit, schließe 'preview.sh' wieder (Strg+C).
Um zu veröffentlichen, starte 'deploy.sh'.
Hat alles geklappt, ist die Website in ein paar Minuten online.

## Markdown

Markdown ist ein Textformat, das es sehr einfach macht, Text zu strukturieren und Content wie Bilder o. Ä. einzufügen.
Ich habe einen Beispielpost ('beispiel-post.md') angelegt, in dem alle zur Zeit unterstützten Features von Markdown gezeigt werden.
Ich empfehle, dir den Post in der Preview ('preview.sh') anzusehen und nebenbei in der Markdowndatei ('content/posts/beispiele/beispiel-post.md') mitzulesen.

Fortgeschrittene Quellen:

<https://www.markdownguide.org/basic-syntax>
<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>

## Wichtiges zu Posts

Es ist wichtig, ein paar zusätzliche Daten zu jedem Post zu hinterlegen.
Schau dir die Datei 'beispiel-post.md' als Referenz an.
