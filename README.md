# Barbara vs. KI - Bewerbungswebsite

Diese Website ist eine kreative Bewerbung für die Summer University 2025. Die Seite zeigt die einzigartigen Fähigkeiten und Qualifikationen von Barbara Halat als Medienmanagement-Studentin.

## Über das Projekt

Die Website ist eine statische HTML-Seite, die auf GitHub Pages gehostet wird. Sie bietet:

- Eine persönliche Vorstellung
- Eine KI-generierte Perspektive auf Barbaras Fähigkeiten
- Erklärungen zur Motivation für die Summer University
- Ein interaktives Element zum Thema "Mensch vs. KI"

## Live-Version

Die Website ist live unter folgender URL verfügbar:
https://[GITHUB-USERNAME].github.io/barbara-bewerbung/

## Anleitung zur Veröffentlichung auf GitHub Pages

1. **GitHub-Repository erstellen**
   - Melden Sie sich bei GitHub an (oder erstellen Sie ein Konto)
   - Erstellen Sie ein neues Repository mit dem Namen "barbara-bewerbung"
   - Wählen Sie "Public" als Sichtbarkeit

2. **Dateien ins Repository hochladen**
   - Laden Sie alle Dateien aus diesem Ordner in Ihr Repository hoch
   - Sie können die Dateien per Drag & Drop in die GitHub-Oberfläche ziehen oder Git-Befehle verwenden

3. **GitHub Pages aktivieren**
   - Gehen Sie zu den Repository-Einstellungen (Settings)
   - Scrollen Sie nach unten zu "GitHub Pages"
   - Wählen Sie als Quelle "main" oder "master" Branch
   - Klicken Sie auf "Save"

4. **Überprüfen der Veröffentlichung**
   - Nach einigen Minuten wird Ihre Website unter der folgenden URL verfügbar sein:
   - https://[GITHUB-USERNAME].github.io/barbara-bewerbung/
   - Der GitHub-Actions-Workflow wird automatisch ausgeführt und die Website bereitstellen

## Git-Befehle für erfahrene Nutzer

```bash
# Repository klonen (falls Sie es zuerst lokal bearbeiten möchten)
git clone https://github.com/[GITHUB-USERNAME]/barbara-bewerbung.git

# Ins Verzeichnis wechseln
cd barbara-bewerbung

# Alle Dateien hinzufügen
git add .

# Änderungen committen
git commit -m "Initial commit"

# Änderungen auf GitHub hochladen
git push origin main
```

## Lokale Entwicklung

Um die Website lokal zu entwickeln:

1. Repository klonen: `git clone https://github.com/[GITHUB-USERNAME]/barbara-bewerbung.git`
2. Ins Verzeichnis wechseln: `cd barbara-bewerbung`
3. Die HTML-Dateien können direkt im Browser geöffnet werden

## Technologie

Die Website verwendet:
- HTML5
- CSS3
- JavaScript (ES6+)
- Responsive Design für alle Gerätetypen

## Hinweise zur Upload-Funktion

Die Upload-Funktion auf der Upload-Seite ist in der GitHub Pages-Version deaktiviert, da GitHub Pages keine serverseitigen Skripte unterstützt. In der lokalen Entwicklungsumgebung mit Flask würde diese Funktion es ermöglichen, ein Profilbild hochzuladen. 