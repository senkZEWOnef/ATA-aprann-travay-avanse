export const pythonWeek14Cards = [
  // Card 1: What is JSON?
  {
    id: 'json-intro',
    title: {
      ht: 'Ki sa ki JSON?',
      fr: 'Qu\'est-ce que JSON ?',
      en: 'What is JSON?'
    },
    content: {
      ht: `JSON vle di "JavaScript Object Notation" - se yon fòma done ki senp ak popilè nan pwogram ak sit entènèt.

**JSON nan pwogram:**
- Fòma done ki lije ak senp
- Yo itilize l nan API ak fichye done yo
- Python trete JSON kòm diksyonè ak lis

**Egzanp JSON:**
\`\`\`json
{
  "nom": "Ralph",
  "laj": 30,
  "langaj": ["Python", "JavaScript"],
  "aktif": true
}
\`\`\`

**Koresponpans ak Python:**
- JSON object → Python dict
- JSON array → Python list  
- JSON string → Python str
- JSON number → Python int/float
- JSON true/false → Python True/False
- JSON null → Python None`,
      fr: `JSON signifie "JavaScript Object Notation" - c'est un format de données léger et populaire dans la programmation et les applications web.

**JSON en programmation :**
- Format de données léger et simple
- Utilisé dans les API et fichiers de données
- Python traite JSON comme des dictionnaires et des listes

**Exemple JSON :**
\`\`\`json
{
  "nom": "Ralph",
  "age": 30,
  "langages": ["Python", "JavaScript"],
  "actif": true
}
\`\`\`

**Correspondance avec Python :**
- Objet JSON → dict Python
- Tableau JSON → list Python
- Chaîne JSON → str Python
- Nombre JSON → int/float Python
- true/false JSON → True/False Python
- null JSON → None Python`,
      en: `JSON stands for "JavaScript Object Notation" - it's a lightweight and popular data format in programming and web applications.

**JSON in programming:**
- Lightweight and simple data format
- Used in APIs and data files
- Python treats JSON as dictionaries and lists

**JSON Example:**
\`\`\`json
{
  "name": "Ralph",
  "age": 30,
  "languages": ["Python", "JavaScript"],
  "active": true
}
\`\`\`

**Correspondence with Python:**
- JSON object → Python dict
- JSON array → Python list
- JSON string → Python str
- JSON number → Python int/float
- JSON true/false → Python True/False
- JSON null → Python None`
    },
    codeExamples: [
      {
        title: 'Understanding JSON Structure',
        code: `# JSON data (as a string)
json_data = '''
{
  "student": {
    "name": "Ana Martinez",
    "age": 22,
    "courses": ["Math", "Science", "History"],
    "graduated": false,
    "gpa": 3.8
  }
}
'''

# When loaded into Python, this becomes:
student_data = {
    "student": {
        "name": "Ana Martinez",
        "age": 22,
        "courses": ["Math", "Science", "History"],
        "graduated": False,
        "gpa": 3.8
    }
}

print("Student name:", student_data["student"]["name"])
print("Courses:", student_data["student"]["courses"])
print("GPA:", student_data["student"]["gpa"])`
      }
    ],
    quiz: {
      question: {
        ht: 'Ki sa ki JSON vle di?',
        fr: 'Que signifie JSON ?',
        en: 'What does JSON stand for?'
      },
      options: [
        { ht: 'Java Standard Object Notation', fr: 'Java Standard Object Notation', en: 'Java Standard Object Notation' },
        { ht: 'JavaScript Object Notation', fr: 'JavaScript Object Notation', en: 'JavaScript Object Notation' },
        { ht: 'Just Simple Object Notes', fr: 'Just Simple Object Notes', en: 'Just Simple Object Notes' },
        { ht: 'Java Structured Object Network', fr: 'Java Structured Object Network', en: 'Java Structured Object Network' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'JSON vle di "JavaScript Object Notation" - yon fòma done ki lije ak popilè pou echanje done yo ant aplikasyon yo.',
        fr: 'JSON signifie "JavaScript Object Notation" - un format de données léger et populaire pour l\'échange de données entre applications.',
        en: 'JSON stands for JavaScript Object Notation, a lightweight data format used for data exchange between applications.'
      }
    }
  },

  // Card 2: Reading JSON Files
  {
    id: 'reading-json',
    title: {
      ht: 'Kòman pou li fichye JSON yo',
      fr: 'Comment lire des fichiers JSON',
      en: 'How to Read JSON Files'
    },
    content: {
      ht: `Python gen yon modil JSON ki konsèy ki pèmèt nou travay ak done JSON yo fasil.

**Etap yo pou li JSON:**
1. Enpòte modil json
2. Ouvè fichye a
3. Itilize json.load() pou li done yo
4. Travay ak done yo kòm diksyonè Python

**Fonksyon prensipal yo:**
- \`json.load()\` - Li JSON nan yon fichye
- \`json.loads()\` - Li JSON nan yon string

**Jesyon erè:**
- FileNotFoundError - Fichye pa egziste
- json.JSONDecodeError - JSON pa valid`,
      fr: `Python dispose d'un module JSON intégré qui nous permet de travailler facilement avec les données JSON.

**Étapes pour lire JSON :**
1. Importer le module json
2. Ouvrir le fichier
3. Utiliser json.load() pour lire les données
4. Travailler avec les données comme des dictionnaires Python

**Fonctions principales :**
- \`json.load()\` - Lire JSON depuis un fichier
- \`json.loads()\` - Lire JSON depuis une chaîne

**Gestion d'erreurs :**
- FileNotFoundError - Fichier n'existe pas
- json.JSONDecodeError - JSON invalide`,
      en: `Python has a built-in JSON module that allows us to work with JSON data easily.

**Steps to read JSON:**
1. Import the json module
2. Open the file
3. Use json.load() to read the data
4. Work with data as Python dictionaries

**Main functions:**
- \`json.load()\` - Read JSON from a file
- \`json.loads()\` - Read JSON from a string

**Error handling:**
- FileNotFoundError - File doesn't exist
- json.JSONDecodeError - Invalid JSON`
    },
    codeExamples: [
      {
        title: 'Basic JSON Reading',
        code: `import json

# Reading JSON from a file
try:
    with open("students.json", "r") as file:
        data = json.load(file)
    
    print("Data loaded successfully!")
    print("Type:", type(data))
    print("Content:", data)

except FileNotFoundError:
    print("Error: students.json file not found")
except json.JSONDecodeError as e:
    print(f"Error: Invalid JSON format - {e}")`
      },
      {
        title: 'Reading JSON from String',
        code: `import json

# JSON as a string
json_string = '''
{
    "name": "Weather Station",
    "location": "San Juan",
    "temperature": 28.5,
    "conditions": ["sunny", "warm"],
    "active": true
}
'''

# Parse JSON string
weather_data = json.loads(json_string)

print("Station:", weather_data["name"])
print("Location:", weather_data["location"])
print("Temperature:", weather_data["temperature"], "°C")
print("Conditions:", ", ".join(weather_data["conditions"]))`
      },
      {
        title: 'Working with Complex JSON',
        code: `import json

# Example: Reading configuration file
config_json = '''
{
    "database": {
        "host": "localhost",
        "port": 5432,
        "name": "myapp_db"
    },
    "features": {
        "user_registration": true,
        "email_notifications": false,
        "api_rate_limit": 1000
    }
}
'''

config = json.loads(config_json)

# Access nested data
print("Database host:", config["database"]["host"])
print("Database port:", config["database"]["port"])
print("API limit:", config["features"]["api_rate_limit"])

# Check feature flags
if config["features"]["user_registration"]:
    print("✅ User registration is enabled")
else:
    print("❌ User registration is disabled")`
      }
    ],
    exercises: [
      'Create a JSON file with your personal information and read it',
      'Parse a JSON string containing a list of books',
      'Handle errors when reading a non-existent JSON file',
      'Read a JSON file with nested objects and extract specific values'
    ]
  },

  // Card 3: Writing JSON Files
  {
    id: 'writing-json',
    title: {
      ht: 'Kòman pou ekri fichye JSON yo',
      fr: 'Comment écrire des fichiers JSON',
      en: 'How to Write JSON Files'
    },
    content: {
      ht: `Nou ka kreye ak konsèv done nan fòma JSON lè nou fè pwogram Python.

**Etap yo pou ekri JSON:**
1. Kreye done Python (dict, list)
2. Itilize json.dump() pou konsèv nan fichye
3. Oswa itilize json.dumps() pou jwenn string JSON

**Parametè itil yo:**
- \`indent\` - Pi bèl fòmataj
- \`ensure_ascii\` - Pèmèt karaktè Unicode
- \`sort_keys\` - Klase kle yo

**Bon pratik yo:**
- Itilize indent=4 pou pi bèl fòmataj
- Verifye done yo avan ou konsèv yo`,
      fr: `Nous pouvons créer et sauvegarder des données au format JSON lors de la programmation Python.

**Étapes pour écrire JSON :**
1. Créer des données Python (dict, list)
2. Utiliser json.dump() pour sauvegarder dans un fichier
3. Ou utiliser json.dumps() pour obtenir une chaîne JSON

**Paramètres utiles :**
- \`indent\` - Meilleur formatage
- \`ensure_ascii\` - Permettre les caractères Unicode
- \`sort_keys\` - Trier les clés

**Bonnes pratiques :**
- Utiliser indent=4 pour un meilleur formatage
- Vérifier les données avant de les sauvegarder`,
      en: `We can create and save data in JSON format when programming in Python.

**Steps to write JSON:**
1. Create Python data (dict, list)
2. Use json.dump() to save to a file
3. Or use json.dumps() to get a JSON string

**Useful parameters:**
- \`indent\` - Better formatting
- \`ensure_ascii\` - Allow Unicode characters
- \`sort_keys\` - Sort keys

**Best practices:**
- Use indent=4 for better formatting
- Validate data before saving`
    },
    codeExamples: [
      {
        title: 'Basic JSON Writing',
        code: `import json

# Create student data
student = {
    "name": "Carlos Rodriguez",
    "age": 20,
    "courses": ["Python", "Web Development", "Data Science"],
    "gpa": 3.7,
    "active": True,
    "graduation_year": None
}

# Save to file with nice formatting
with open("student.json", "w") as file:
    json.dump(student, file, indent=4)

print("Student data saved to student.json")

# Also get as string
json_string = json.dumps(student, indent=2)
print("JSON string:")
print(json_string)`
      },
      {
        title: 'Saving Complex Data Structures',
        code: `import json

# Create a more complex data structure
school_data = {
    "school_name": "Tech Academy",
    "location": {
        "address": "123 Main St",
        "city": "San Juan",
        "country": "Puerto Rico"
    },
    "students": [
        {
            "id": 1,
            "name": "Ana Torres",
            "courses": ["Math", "Science"]
        },
        {
            "id": 2,
            "name": "Luis Garcia",
            "courses": ["History", "Literature"]
        }
    ],
    "founded": 2010,
    "active": True
}

# Save with formatting options
with open("school.json", "w", encoding="utf-8") as file:
    json.dump(school_data, file, 
              indent=4, 
              ensure_ascii=False,  # Allow Unicode characters
              sort_keys=True)      # Sort keys alphabetically

print("School data saved successfully!")`
      },
      {
        title: 'Creating Configuration Files',
        code: `import json

# Create app configuration
config = {
    "app_name": "Weather App",
    "version": "1.0.0",
    "settings": {
        "theme": "dark",
        "language": "en",
        "notifications": True,
        "auto_update": False
    },
    "api_keys": {
        "weather": "your-api-key-here",
        "maps": "your-maps-key-here"
    },
    "cache_settings": {
        "enabled": True,
        "max_size_mb": 100,
        "expiry_hours": 24
    }
}

# Save configuration
with open("config.json", "w") as file:
    json.dump(config, file, indent=4, sort_keys=True)

print("Configuration saved to config.json")

# Create a backup copy with timestamp
import datetime
timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
backup_filename = f"config_backup_{timestamp}.json"

with open(backup_filename, "w") as backup_file:
    json.dump(config, backup_file, indent=4)
    
print(f"Backup saved as {backup_filename}")`
      }
    ],
    quiz: {
      question: {
        ht: 'Ki fonksyon yo itilize pou ekri yon objè Python nan yon fichye JSON?',
        fr: 'Quelle fonction est utilisée pour écrire un objet Python dans un fichier JSON ?',
        en: 'Which function is used to write a Python object to a JSON file?'
      },
      options: [
        { ht: 'json.save()', fr: 'json.save()', en: 'json.save()' },
        { ht: 'json.write()', fr: 'json.write()', en: 'json.write()' },
        { ht: 'json.dump()', fr: 'json.dump()', en: 'json.dump()' },
        { ht: 'json.export()', fr: 'json.export()', en: 'json.export()' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'json.dump() yo itilize pou ekri yon objè Python nan yon fichye JSON, pandan y ap json.dumps() konvèti nan yon JSON string.',
        fr: 'json.dump() est utilisé pour écrire un objet Python dans un fichier JSON, tandis que json.dumps() convertit en chaîne JSON.',
        en: 'json.dump() is used to write a Python object to a JSON file, while json.dumps() converts to a JSON string.'
      }
    }
  },

  // Card 4: What is an API?
  {
    id: 'api-intro',
    title: {
      ht: 'Ki sa ki yon API?',
      fr: 'Qu\'est-ce qu\'une API ?',
      en: 'What is an API?'
    },
    content: {
      ht: `API vle di "Application Programming Interface" - se yon fason pou pwogram yo kominike ak lòt pwogram oswa sèvis yo sou entènèt.

**API se tankou:**
- Yon restoran ki gen yon meni ak garson
- Ou mande yon plat (request)
- Yo ban ou manje a (response)
- Ou pa bezwen konnen kijan yo kwit li

**Egzanp API yo:**
- Weather API - Done sou tan an
- GitHub API - Done sou pwojè yo
- Social Media API - Posts ak imaj yo
- News API - Atik nouvèl yo

**Kòman API yo fonksyone:**
1. Ou voye yon request (demann)
2. API a trete demann nan
3. Li voye response (repons) ba ou
4. Ou itilize done yo nan pwogram ou`,
      fr: `API signifie "Application Programming Interface" - c'est un moyen pour les programmes de communiquer avec d'autres programmes ou services sur Internet.

**L'API est comme :**
- Un restaurant qui a un menu et un serveur
- Vous commandez un plat (request)
- On vous apporte la nourriture (response)
- Vous n'avez pas besoin de savoir comment c'est cuisiné

**Exemples d'API :**
- API Météo - Données sur le temps
- API GitHub - Données sur les projets
- API Médias Sociaux - Posts et images
- API Actualités - Articles de presse

**Comment fonctionnent les API :**
1. Vous envoyez une request (demande)
2. L'API traite la demande
3. Elle renvoie une response (réponse)
4. Vous utilisez les données dans votre programme`,
      en: `API stands for "Application Programming Interface" - it's a way for programs to communicate with other programs or services on the Internet.

**An API is like:**
- A restaurant that has a menu and a waiter
- You order a dish (request)
- They bring you the food (response)
- You don't need to know how it's cooked

**API Examples:**
- Weather API - Weather data
- GitHub API - Project data
- Social Media API - Posts and images
- News API - News articles

**How APIs work:**
1. You send a request (ask for data)
2. The API processes the request
3. It sends back a response (data)
4. You use the data in your program`
    },
    codeExamples: [
      {
        title: 'Understanding API Requests',
        code: `# API Request Example (conceptual)
# 
# URL: https://api.weather.com/v1/current
# Parameters: 
#   - city: "San Juan"
#   - units: "metric"
#   - key: "your-api-key"
#
# Full URL would be:
# https://api.weather.com/v1/current?city=San Juan&units=metric&key=your-api-key

# API Response Example (JSON):
example_response = {
    "location": {
        "city": "San Juan",
        "country": "Puerto Rico"
    },
    "current": {
        "temperature": 28.5,
        "humidity": 75,
        "condition": "Partly Cloudy",
        "wind_speed": 12
    },
    "status": "success"
}

# Using the response data
print(f"Current temperature in {example_response['location']['city']}: {example_response['current']['temperature']}°C")
print(f"Condition: {example_response['current']['condition']}")
print(f"Humidity: {example_response['current']['humidity']}%")`
      },
      {
        title: 'Different Types of API Endpoints',
        code: `# Different API endpoints serve different purposes:

# 1. Get user information
user_api_url = "https://api.github.com/users/username"

# 2. Get weather data
weather_api_url = "https://api.openweathermap.org/data/2.5/weather?q=San Juan"

# 3. Get news articles
news_api_url = "https://newsapi.org/v2/headlines?country=us"

# 4. Get random quotes
quotes_api_url = "https://api.quotegarden.io/api/v3/quotes/random"

# 5. Get currency exchange rates
currency_api_url = "https://api.exchangerate-api.com/v4/latest/USD"

# Each API has:
# - Base URL (domain)
# - Endpoint (specific path)
# - Parameters (query string)
# - Authentication (API keys)

print("APIs allow us to access:")
print("📊 Data from databases")
print("🌤 Real-time information")
print("🔄 Services and computations")
print("📱 Third-party applications")`
      }
    ],
    exercises: [
      'Research 3 different public APIs and list what data they provide',
      'Identify the components of an API URL (base, endpoint, parameters)',
      'Explain the difference between a request and a response',
      'Find a free API that doesn\'t require authentication'
    ]
  },

  // Card 5: Using the requests Module
  {
    id: 'requests-module',
    title: {
      ht: 'Kòman pou itilize modil requests lan',
      fr: 'Comment utiliser le module requests',
      en: 'How to Use the requests Module'
    },
    content: {
      ht: `Modil \`requests\` lan se zouti ki pi popilè nan Python pou travay ak API yo ak entènèt.

**Enstalasyon:**
\`\`\`bash
pip install requests
\`\`\`

**Fonksyon prensipal yo:**
- \`requests.get()\` - Jwenn done
- \`requests.post()\` - Voye done
- \`requests.put()\` - Modifye done
- \`requests.delete()\` - Efase done

**Response atribi yo:**
- \`.status_code\` - Kòd estati (200 = bon)
- \`.json()\` - Done JSON
- \`.text\` - Tèks reponn nan
- \`.headers\` - Enfòmasyon header yo`,
      fr: `Le module \`requests\` est l'outil le plus populaire en Python pour travailler avec les API et Internet.

**Installation :**
\`\`\`bash
pip install requests
\`\`\`

**Fonctions principales :**
- \`requests.get()\` - Obtenir des données
- \`requests.post()\` - Envoyer des données
- \`requests.put()\` - Modifier des données
- \`requests.delete()\` - Supprimer des données

**Attributs de response :**
- \`.status_code\` - Code de statut (200 = ok)
- \`.json()\` - Données JSON
- \`.text\` - Texte de réponse
- \`.headers\` - Informations d'en-tête`,
      en: `The \`requests\` module is the most popular tool in Python for working with APIs and the Internet.

**Installation:**
\`\`\`bash
pip install requests
\`\`\`

**Main functions:**
- \`requests.get()\` - Get data
- \`requests.post()\` - Send data
- \`requests.put()\` - Modify data
- \`requests.delete()\` - Delete data

**Response attributes:**
- \`.status_code\` - Status code (200 = ok)
- \`.json()\` - JSON data
- \`.text\` - Response text
- \`.headers\` - Header information`
    },
    codeExamples: [
      {
        title: 'Basic API Request',
        code: `import requests

# Make a GET request to a public API
url = "https://httpbin.org/json"
response = requests.get(url)

# Check if request was successful
print("Status code:", response.status_code)

if response.status_code == 200:
    print("✅ Request successful!")
    
    # Get JSON data
    data = response.json()
    print("Response data:", data)
    
    # Access specific fields
    if 'slideshow' in data:
        print("Title:", data['slideshow']['title'])
else:
    print("❌ Request failed")`
      },
      {
        title: 'API Request with Parameters',
        code: `import requests

# API with parameters
base_url = "https://httpbin.org/get"
params = {
    'name': 'Ana',
    'age': 25,
    'city': 'San Juan'
}

# Send request with parameters
response = requests.get(base_url, params=params)

print("Full URL:", response.url)
print("Status:", response.status_code)

if response.status_code == 200:
    data = response.json()
    print("\\nSent parameters:")
    for key, value in data['args'].items():
        print(f"  {key}: {value}")`
      },
      {
        title: 'Error Handling with Requests',
        code: `import requests
from requests.exceptions import RequestException, Timeout, ConnectionError

def safe_api_request(url, timeout=5):
    """
    Make a safe API request with error handling
    """
    try:
        response = requests.get(url, timeout=timeout)
        
        # Check status code
        if response.status_code == 200:
            return {"success": True, "data": response.json()}
        elif response.status_code == 404:
            return {"success": False, "error": "Resource not found"}
        elif response.status_code == 429:
            return {"success": False, "error": "Rate limit exceeded"}
        else:
            return {"success": False, "error": f"HTTP {response.status_code}"}
            
    except Timeout:
        return {"success": False, "error": "Request timed out"}
    except ConnectionError:
        return {"success": False, "error": "Connection failed"}
    except RequestException as e:
        return {"success": False, "error": f"Request error: {e}"}

# Test the function
result = safe_api_request("https://httpbin.org/json")

if result["success"]:
    print("✅ API request successful!")
    print("Data:", result["data"])
else:
    print("❌ API request failed:", result["error"])`
      },
      {
        title: 'Working with Headers',
        code: `import requests

# API that requires headers
url = "https://httpbin.org/headers"

# Custom headers
headers = {
    'User-Agent': 'Python Weather App 1.0',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    print("Request headers sent:")
    for header, value in data['headers'].items():
        print(f"  {header}: {value}")
    
    print("\\nResponse headers received:")
    for header, value in response.headers.items():
        print(f"  {header}: {value}")`
      }
    ],
    quiz: {
      question: {
        ht: 'Ki sa ki kòd estati 200 vle di nan yon repons HTTP?',
        fr: 'Que signifie le code d\'état 200 dans une réponse HTTP ?',
        en: 'What does the status code 200 mean in an HTTP response?'
      },
      options: [
        { ht: 'Demand lan echwe', fr: 'La demande a échoué', en: 'Request failed' },
        { ht: 'Paj la pa jwenn', fr: 'Page non trouvée', en: 'Page not found' },
        { ht: 'Demand lan reyisi', fr: 'Demande réussie', en: 'Request successful' },
        { ht: 'Erè sèvè a', fr: 'Erreur serveur', en: 'Server error' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'Kòd estati 200 vle di demand lan te reyisi. Lòt kòd komen yo: 404 (pa jwenn), 500 (erè sèvè), 401 (pa otorize).',
        fr: 'Le code d\'état 200 signifie que la demande a réussi. Autres codes courants : 404 (non trouvé), 500 (erreur serveur), 401 (non autorisé).',
        en: 'Status code 200 means the request was successful. Other common codes: 404 (not found), 500 (server error), 401 (unauthorized).'
      }
    }
  },

  // Card 6: Parsing API Responses
  {
    id: 'parsing-api-responses',
    title: {
      ht: 'Kòman pou analiz reponn API yo',
      fr: 'Comment analyser les réponses d\'API',
      en: 'How to Parse API Responses'
    },
    content: {
      ht: `Lè ou resevwa done nan yon API, ou bezwen konnen kijan pou jwenn enfòmasyon espesifik yo.

**Etap yo pou analiz:**
1. Verifye status_code (200 = bon)
2. Konvèti nan JSON ak .json()
3. Navige nan estrikti done a
4. Jere erè yo

**Estrikti done komen yo:**
- Objè (dictionaries) ak kle yo
- Lis (arrays) ak endèks yo  
- Valè nested (anbote)
- Metadata ak done prensipal yo

**Bon pratik yo:**
- Toujou verifye si kle yo egziste
- Jere erè ak try/except
- Valide done yo avan ou itilize yo`,
      fr: `Lorsque vous recevez des données d'une API, vous devez savoir comment extraire les informations spécifiques.

**Étapes pour analyser :**
1. Vérifier status_code (200 = ok)
2. Convertir en JSON avec .json()
3. Naviguer dans la structure des données
4. Gérer les erreurs

**Structures de données communes :**
- Objets (dictionnaires) avec des clés
- Listes (tableaux) avec des index
- Valeurs imbriquées (nested)
- Métadonnées et données principales

**Bonnes pratiques :**
- Toujours vérifier si les clés existent
- Gérer les erreurs avec try/except
- Valider les données avant utilisation`,
      en: `When you receive data from an API, you need to know how to extract specific information.

**Steps to parse:**
1. Check status_code (200 = ok)
2. Convert to JSON with .json()
3. Navigate the data structure
4. Handle errors

**Common data structures:**
- Objects (dictionaries) with keys
- Lists (arrays) with indexes
- Nested values
- Metadata and main data

**Best practices:**
- Always check if keys exist
- Handle errors with try/except
- Validate data before use`
    },
    codeExamples: [
      {
        title: 'Basic Response Parsing',
        code: `import requests

# Get data from a public API
response = requests.get("https://httpbin.org/json")

if response.status_code == 200:
    # Parse JSON response
    data = response.json()
    
    # Display the full structure first
    print("Full response structure:")
    import json
    print(json.dumps(data, indent=2))
    
    # Extract specific data
    if 'slideshow' in data:
        slideshow = data['slideshow']
        print(f"\\nTitle: {slideshow['title']}")
        print(f"Author: {slideshow['author']}")
        print(f"Date: {slideshow['date']}")
        
        # Access slides list
        if 'slides' in slideshow:
            print(f"Number of slides: {len(slideshow['slides'])}")
            
            # Show first slide
            if slideshow['slides']:
                first_slide = slideshow['slides'][0]
                print(f"First slide title: {first_slide['title']}")
                print(f"First slide type: {first_slide['type']}")
else:
    print(f"Error: {response.status_code}")`
      },
      {
        title: 'Safe Data Extraction',
        code: `import requests

def safe_get_value(data, keys, default=None):
    """
    Safely extract nested values from JSON data
    """
    current = data
    for key in keys:
        if isinstance(current, dict) and key in current:
            current = current[key]
        else:
            return default
    return current

# Example API response simulation
fake_api_response = {
    "weather": {
        "location": {
            "city": "San Juan",
            "country": "PR"
        },
        "current": {
            "temperature": 28.5,
            "humidity": 75,
            "conditions": ["sunny", "warm"]
        }
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "source": "weather-api"
}

# Safe extraction examples
city = safe_get_value(fake_api_response, ['weather', 'location', 'city'], "Unknown")
temp = safe_get_value(fake_api_response, ['weather', 'current', 'temperature'], 0)
conditions = safe_get_value(fake_api_response, ['weather', 'current', 'conditions'], [])

print(f"City: {city}")
print(f"Temperature: {temp}°C")
print(f"Conditions: {', '.join(conditions) if conditions else 'No data'}")

# This would safely return default value if key doesn't exist
missing_value = safe_get_value(fake_api_response, ['weather', 'forecast'], "Not available")
print(f"Forecast: {missing_value}")`
      },
      {
        title: 'Real API Example - GitHub User Info',
        code: `import requests

def get_github_user_info(username):
    """
    Get GitHub user information
    """
    url = f"https://api.github.com/users/{username}"
    
    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            user_data = response.json()
            
            # Extract useful information
            user_info = {
                'name': user_data.get('name', 'No name provided'),
                'username': user_data.get('login', ''),
                'bio': user_data.get('bio', 'No bio available'),
                'public_repos': user_data.get('public_repos', 0),
                'followers': user_data.get('followers', 0),
                'following': user_data.get('following', 0),
                'location': user_data.get('location', 'Location not provided'),
                'company': user_data.get('company', 'No company'),
                'blog': user_data.get('blog', ''),
                'created_at': user_data.get('created_at', '')
            }
            
            return user_info
            
        elif response.status_code == 404:
            return {"error": "User not found"}
        else:
            return {"error": f"API error: {response.status_code}"}
            
    except requests.RequestException as e:
        return {"error": f"Request failed: {e}"}

# Test with a real GitHub user
user_info = get_github_user_info("octocat")

if "error" not in user_info:
    print(f"👤 {user_info['name']} (@{user_info['username']})")
    print(f"📍 {user_info['location']}")
    print(f"🏢 {user_info['company']}")
    print(f"📝 {user_info['bio']}")
    print(f"📊 {user_info['public_repos']} repos, {user_info['followers']} followers")
    if user_info['blog']:
        print(f"🌐 {user_info['blog']}")
else:
    print(f"❌ {user_info['error']}")`
      }
    ],
    exercises: [
      'Parse a weather API response to extract temperature and conditions',
      'Extract user information from a social media API response',
      'Handle missing fields in API responses gracefully',
      'Create a function that validates required fields in API responses'
    ]
  },

  // Card 7: Real Example - News API
  {
    id: 'news-api-example',
    title: {
      ht: 'Egzanp ak News API a',
      fr: 'Exemple avec l\'API News',
      en: 'Example with News API'
    },
    content: {
      ht: `Ann aprann kijan pou travay ak yon API reyèl ki bay enfòmasyon sou nouvèl yo.

**News API karakteristik yo:**
- Resevwa atik nouvèl yo nan minit yo
- Filtre pa kategori ak peyi
- Chèche ak mo kle yo
- Done ak sòs otantik yo

**Done yo ki disponib:**
- Tit ak deskripsyon atik yo
- Otè ak sòs nouvèl yo
- Dat ak imaj yo
- URL ak kontni konplè

**Itilizasyon respè:**
- Respekte limit yo (rate limits)
- Itilize API key yo kòrèkteman
- Pa yon fè twòp demann yo`
    ,
      fr: `Apprenons à travailler avec une vraie API qui fournit des informations sur les actualités.

**Caractéristiques de l'API News :**
- Recevoir des articles d'actualités en temps réel
- Filtrer par catégories et pays
- Rechercher avec des mots-clés
- Données et sources authentiques

**Données disponibles :**
- Titres et descriptions des articles
- Auteurs et sources des nouvelles
- Dates et images
- URL et contenu complet

**Utilisation respectueuse :**
- Respecter les limites (rate limits)
- Utiliser correctement les clés API
- Ne pas faire trop de demandes`,
      en: `Let's learn to work with a real API that provides news information.

**News API features:**
- Get real-time news articles
- Filter by categories and countries
- Search with keywords
- Authentic data and sources

**Available data:**
- Article titles and descriptions
- Authors and news sources
- Dates and images
- URLs and full content

**Respectful usage:**
- Respect rate limits
- Use API keys correctly
- Don't make too many requests`
    },
    codeExamples: [
      {
        title: 'Free News API Example',
        code: `import requests
import json

def get_top_headlines(country="us", category=None):
    """
    Get top headlines from a free news source
    Note: This uses a free API that doesn't require authentication
    """
    # Free news API endpoint
    url = "https://saurav.tech/NewsAPI/top-headlines/category/general/us.json"
    
    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            data = response.json()
            articles = data.get('articles', [])
            
            print(f"📰 Top {len(articles)} Headlines:")
            print("=" * 50)
            
            for i, article in enumerate(articles[:5], 1):  # Show first 5
                title = article.get('title', 'No title')
                source = article.get('source', {}).get('name', 'Unknown source')
                description = article.get('description', 'No description')
                url_link = article.get('url', '')
                
                print(f"{i}. {title}")
                print(f"   Source: {source}")
                print(f"   {description[:100]}{'...' if len(description) > 100 else ''}")
                print(f"   🔗 {url_link}")
                print()
                
        else:
            print(f"Error fetching news: {response.status_code}")
            
    except requests.RequestException as e:
        print(f"Request failed: {e}")

# Get top headlines
get_top_headlines()`
      },
      {
        title: 'News Search Function',
        code: `import requests
from datetime import datetime

def search_news(query, max_results=5):
    """
    Search for news articles with a specific query
    This simulates how you would work with a news search API
    """
    print(f"🔍 Searching for: '{query}'")
    print("=" * 50)
    
    # Simulated news data (in real implementation, this would come from an API)
    sample_articles = [
        {
            "title": f"Latest developments in {query}",
            "source": {"name": "Tech News"},
            "author": "Jane Smith",
            "description": f"Important updates about {query} that everyone should know about.",
            "publishedAt": "2024-01-15T10:30:00Z",
            "url": f"https://example.com/news/{query.lower().replace(' ', '-')}"
        },
        {
            "title": f"{query}: What you need to know",
            "source": {"name": "Daily Herald"},
            "author": "John Doe",
            "description": f"A comprehensive guide to understanding {query} and its implications.",
            "publishedAt": "2024-01-15T08:15:00Z",
            "url": f"https://example.com/guide/{query.lower().replace(' ', '-')}"
        }
    ]
    
    for i, article in enumerate(sample_articles[:max_results], 1):
        print(f"{i}. {article['title']}")
        print(f"   📰 {article['source']['name']}")
        print(f"   ✍️ {article['author']}")
        
        # Format date
        date_str = article['publishedAt']
        try:
            date_obj = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            formatted_date = date_obj.strftime("%B %d, %Y at %I:%M %p")
            print(f"   📅 {formatted_date}")
        except:
            print(f"   📅 {date_str}")
            
        print(f"   📝 {article['description']}")
        print(f"   🔗 {article['url']}")
        print()

# Example searches
search_news("Python programming", 3)
search_news("Weather updates", 2)`
      },
      {
        title: 'News Categories and Filtering',
        code: `import requests

class NewsAggregator:
    """
    A simple news aggregator class
    """
    
    def __init__(self):
        self.categories = [
            "general", "business", "entertainment", 
            "health", "science", "sports", "technology"
        ]
        
    def display_categories(self):
        """Display available news categories"""
        print("📂 Available News Categories:")
        for i, category in enumerate(self.categories, 1):
            print(f"  {i}. {category.title()}")
        print()
    
    def get_category_news(self, category):
        """
        Get news for a specific category
        (This is a simulation - in reality, you'd call a real API)
        """
        if category.lower() not in self.categories:
            print(f"❌ Category '{category}' not available")
            return
            
        # Simulated category-specific news
        category_articles = {
            "technology": [
                {"title": "New Python Framework Released", "source": "Tech Today"},
                {"title": "AI Breakthrough in Machine Learning", "source": "AI News"}
            ],
            "science": [
                {"title": "Climate Change Research Update", "source": "Science Daily"},
                {"title": "Space Exploration Milestone", "source": "Space News"}
            ],
            "sports": [
                {"title": "Championship Game Results", "source": "Sports Center"},
                {"title": "Olympic Preparations Underway", "source": "Olympic News"}
            ]
        }
        
        articles = category_articles.get(category.lower(), [])
        
        print(f"🗂 {category.title()} News:")
        print("-" * 30)
        
        if articles:
            for i, article in enumerate(articles, 1):
                print(f"{i}. {article['title']}")
                print(f"   📰 {article['source']}")
                print()
        else:
            print("No articles available for this category.")
    
    def create_news_summary(self, articles, max_length=100):
        """Create a summary from multiple articles"""
        if not articles:
            return "No articles to summarize"
            
        summary_parts = []
        for article in articles[:3]:  # Use first 3 articles
            title = article.get('title', '')
            if title:
                summary_parts.append(title)
                
        summary = ". ".join(summary_parts)
        
        # Truncate if too long
        if len(summary) > max_length:
            summary = summary[:max_length] + "..."
            
        return summary

# Usage example
news_app = NewsAggregator()
news_app.display_categories()
news_app.get_category_news("technology")
news_app.get_category_news("science")`
      }
    ],
    quiz: {
      question: {
        ht: 'Lè w ap travay ak API nouvèl yo, ki sa ki pi enpòtan pou itilizasyon korrèk?',
        fr: 'Lorsque vous travaillez avec des API d\'actualités, qu\'est-ce qui est le plus important pour une utilisation respectueuse ?',
        en: 'When working with news APIs, what is most important for respectful usage?'
      },
      options: [
        { ht: 'Fè pi plis demann posib yo', fr: 'Faire le plus de demandes possibles', en: 'Making as many requests as possible' },
        { ht: 'Respekte limit yo ak kle API yo', fr: 'Respecter les limites et clés API', en: 'Respecting rate limits and API keys' },
        { ht: 'Sèlman itilize API gratis yo', fr: 'Utiliser seulement des API gratuites', en: 'Only using free APIs' },
        { ht: 'Kenbe done yo pou tout tan', fr: 'Mettre en cache les données pour toujours', en: 'Caching data forever' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Respekte limit yo ak itilize kle API yo kòmsi fò yo asire aksè ki jis pou tout itilizatè yo epi anpeche aksè ou a bloke.',
        fr: 'Respecter les limites et utiliser correctement les clés API assure un accès équitable pour tous les utilisateurs et empêche votre accès d\'être bloqué.',
        en: 'Respecting rate limits and properly using API keys ensures fair access for all users and prevents your access from being blocked.'
      }
    }
  },

  // Card 8: Building a Simple Weather App
  {
    id: 'weather-app-basic',
    title: {
      ht: 'Kreye yon aplikasyon tan an senp',
      fr: 'Créer une application météo simple',
      en: 'Building a Simple Weather App'
    },
    content: {
      ht: `Ann konstwi yon aplikasyon ki ka montre enfòmasyon sou tan an lè nou itilize API yo.

**Karakteristik aplikasyon an:**
- Mande itilizatè a yon vil
- Jwenn done sou tan an nan API a
- Montre tanperati ak kondisyon yo
- Jere erè yo ak bon jan fason

**Done yo nou ka jwenn:**
- Tanperati kounye a ak sa ou santi an
- Kondisyon tan an (soley, lapli, etc.)
- Imidite ak van an
- Previzyon pou kèk jou yo

**Bon pratik yo:**
- Verifye antre itilizatè a
- Jere erè kominikasyon yo
- Montre done yo ak fason ki klè`,
      fr: `Construisons une application qui peut afficher des informations météorologiques en utilisant des API.

**Caractéristiques de l'application :**
- Demander à l'utilisateur une ville
- Obtenir des données météorologiques de l'API
- Afficher la température et les conditions
- Gérer les erreurs proprement

**Données qu'on peut obtenir :**
- Température actuelle et ressentie
- Conditions météo (soleil, pluie, etc.)
- Humidité et vent
- Prévisions pour plusieurs jours

**Bonnes pratiques :**
- Valider les entrées utilisateur
- Gérer les erreurs de communication
- Présenter les données clairement`,
      en: `Let's build an application that can display weather information using APIs.

**Application features:**
- Ask user for a city
- Get weather data from API
- Display temperature and conditions
- Handle errors gracefully

**Data we can get:**
- Current and feels-like temperature
- Weather conditions (sunny, rain, etc.)
- Humidity and wind
- Forecasts for several days

**Best practices:**
- Validate user input
- Handle communication errors
- Present data clearly`
    },
    codeExamples: [
      {
        title: 'Basic Weather App Structure',
        code: `import requests
import json

class WeatherApp:
    """
    A simple weather application using free weather API
    """
    
    def __init__(self):
        # Using a free weather API that doesn't require API key
        self.base_url = "https://wttr.in/"
        
    def get_weather(self, city):
        """
        Get weather information for a city
        """
        try:
            # Clean up city name
            city = city.strip().title()
            
            # Build URL for JSON response
            url = f"{self.base_url}{city}?format=j1"
            
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                return self.parse_weather_data(data, city)
            else:
                return {"error": f"Weather data not available (HTTP {response.status_code})"}
                
        except requests.exceptions.Timeout:
            return {"error": "Request timed out. Please try again."}
        except requests.exceptions.ConnectionError:
            return {"error": "Connection error. Check your internet connection."}
        except requests.exceptions.RequestException as e:
            return {"error": f"Request failed: {e}"}
        except json.JSONDecodeError:
            return {"error": "Invalid response format"}
    
    def parse_weather_data(self, data, city):
        """
        Parse the weather API response
        """
        try:
            current = data['current_condition'][0]
            
            weather_info = {
                "city": city,
                "temperature_c": current['temp_C'],
                "temperature_f": current['temp_F'],
                "feels_like_c": current['FeelsLikeC'],
                "feels_like_f": current['FeelsLikeF'],
                "humidity": current['humidity'],
                "condition": current['weatherDesc'][0]['value'],
                "wind_speed": current['windspeedKmph'],
                "wind_direction": current['winddir16Point']
            }
            
            return weather_info
            
        except (KeyError, IndexError) as e:
            return {"error": f"Error parsing weather data: {e}"}
    
    def display_weather(self, weather_info):
        """
        Display weather information in a user-friendly format
        """
        if "error" in weather_info:
            print(f"❌ {weather_info['error']}")
            return
            
        print(f"\\n🌤 Weather in {weather_info['city']}")
        print("=" * 40)
        print(f"🌡️  Temperature: {weather_info['temperature_c']}°C ({weather_info['temperature_f']}°F)")
        print(f"🤔 Feels like: {weather_info['feels_like_c']}°C ({weather_info['feels_like_f']}°F)")
        print(f"☁️  Condition: {weather_info['condition']}")
        print(f"💧 Humidity: {weather_info['humidity']}%")
        print(f"💨 Wind: {weather_info['wind_speed']} km/h {weather_info['wind_direction']}")

# Create and use the weather app
weather_app = WeatherApp()

# Test with a city
city_name = "San Juan"
weather_data = weather_app.get_weather(city_name)
weather_app.display_weather(weather_data)`
      },
      {
        title: 'Interactive Weather App',
        code: `import requests

def interactive_weather_app():
    """
    Interactive weather app that asks for user input
    """
    print("🌟 Welcome to the Weather App! 🌟")
    print("Type 'quit' to exit")
    print()
    
    while True:
        city = input("Enter a city name: ").strip()
        
        if city.lower() in ['quit', 'exit', 'q']:
            print("👋 Thanks for using the Weather App!")
            break
            
        if not city:
            print("❌ Please enter a valid city name.")
            continue
            
        print(f"🔄 Getting weather for {city}...")
        
        try:
            # Using a simple weather API
            url = f"https://wttr.in/{city}?format=%C+%t+%h+%w"
            response = requests.get(url, timeout=5)
            
            if response.status_code == 200:
                weather_text = response.text.strip()
                if weather_text and "Unknown location" not in weather_text:
                    # Parse the response (format: condition temperature humidity wind)
                    parts = weather_text.split()
                    if len(parts) >= 4:
                        condition = parts[0]
                        temperature = parts[1]
                        humidity = parts[2]
                        wind = parts[3]
                        
                        print(f"\\n🌤 Weather in {city.title()}:")
                        print(f"  Condition: {condition}")
                        print(f"  Temperature: {temperature}")
                        print(f"  Humidity: {humidity}")
                        print(f"  Wind: {wind}")
                    else:
                        print(f"✅ {weather_text}")
                else:
                    print("❌ City not found. Please check the spelling.")
            else:
                print("❌ Unable to get weather data. Please try again.")
                
        except requests.exceptions.Timeout:
            print("❌ Request timed out. Please check your connection.")
        except requests.exceptions.ConnectionError:
            print("❌ Connection error. Please check your internet.")
        except Exception as e:
            print(f"❌ An error occurred: {e}")
        
        print()  # Add blank line for readability

# Run the interactive app
interactive_weather_app()`
      },
      {
        title: 'Weather App with Multiple Cities',
        code: `import requests
import json
from datetime import datetime

class MultiCityWeatherApp:
    """
    Weather app that can track multiple cities
    """
    
    def __init__(self):
        self.cities = []
        self.weather_data = {}
        
    def add_city(self, city):
        """Add a city to tracking list"""
        city = city.strip().title()
        if city not in self.cities:
            self.cities.append(city)
            print(f"✅ Added {city} to tracking list")
        else:
            print(f"ℹ️ {city} is already being tracked")
    
    def remove_city(self, city):
        """Remove a city from tracking list"""
        city = city.strip().title()
        if city in self.cities:
            self.cities.remove(city)
            if city in self.weather_data:
                del self.weather_data[city]
            print(f"✅ Removed {city} from tracking list")
        else:
            print(f"❌ {city} is not in tracking list")
    
    def get_weather_simple(self, city):
        """Get simple weather info"""
        try:
            url = f"https://wttr.in/{city}?format=%l:+%C+%t+%h"
            response = requests.get(url, timeout=5)
            
            if response.status_code == 200:
                weather_info = response.text.strip()
                if weather_info and "Unknown location" not in weather_info:
                    return weather_info
            return None
            
        except:
            return None
    
    def update_all_weather(self):
        """Update weather for all tracked cities"""
        print("🔄 Updating weather for all cities...")
        
        for city in self.cities:
            weather = self.get_weather_simple(city)
            if weather:
                self.weather_data[city] = {
                    "info": weather,
                    "last_updated": datetime.now().strftime("%H:%M")
                }
            else:
                self.weather_data[city] = {
                    "info": "Weather data unavailable",
                    "last_updated": datetime.now().strftime("%H:%M")
                }
        
        print("✅ Weather data updated!")
    
    def display_all_weather(self):
        """Display weather for all cities"""
        if not self.cities:
            print("No cities are being tracked.")
            return
            
        print(f"\\n📊 Weather Summary ({len(self.cities)} cities)")
        print("=" * 50)
        
        for city in self.cities:
            if city in self.weather_data:
                data = self.weather_data[city]
                print(f"🌍 {data['info']} (Updated: {data['last_updated']})")
            else:
                print(f"🌍 {city}: No data available")
        print()
    
    def show_menu(self):
        """Display app menu"""
        print("\\n📱 Multi-City Weather App")
        print("1. Add city")
        print("2. Remove city") 
        print("3. Update weather")
        print("4. Show all weather")
        print("5. List tracked cities")
        print("6. Quit")
        return input("Choose an option (1-6): ").strip()

# Example usage
def run_weather_app():
    app = MultiCityWeatherApp()
    
    # Add some default cities
    app.add_city("San Juan")
    app.add_city("New York")
    
    while True:
        choice = app.show_menu()
        
        if choice == '1':
            city = input("Enter city name to add: ")
            if city:
                app.add_city(city)
                
        elif choice == '2':
            city = input("Enter city name to remove: ")
            if city:
                app.remove_city(city)
                
        elif choice == '3':
            app.update_all_weather()
            
        elif choice == '4':
            app.display_all_weather()
            
        elif choice == '5':
            print(f"Tracked cities: {', '.join(app.cities) if app.cities else 'None'}")
            
        elif choice == '6':
            print("👋 Goodbye!")
            break
            
        else:
            print("❌ Invalid option. Please try again.")

# Uncomment to run:
# run_weather_app()`
      }
    ],
    quiz: {
      question: {
        ht: 'Ki sa ki premye bagay ou ta dwe tcheke lè w resevwa yon repons API?',
        fr: 'Quelle est la première chose à vérifier lors de la réception d\'une réponse API ?',
        en: 'What is the first thing you should check when receiving an API response?'
      },
      options: [
        { ht: 'Done repons lan', fr: 'Les données de réponse', en: 'The response data' },
        { ht: 'Kòd estati a', fr: 'Le code d\'état', en: 'The status code' },
        { ht: 'Tet yo', fr: 'Les en-têtes', en: 'The headers' },
        { ht: 'Tan repons lan', fr: 'Le temps de réponse', en: 'The response time' }
      ],
      correctAnswer: 1,
      explanation: {
        ht: 'Toujou tcheke kòd estati a anvan pou asire demand lan te reyisi (200) anvan ou eseye analize done repons lan.',
        fr: 'Vérifiez toujours d\'abord le code d\'état pour vous assurer que la demande a réussi (200) avant d\'essayer d\'analyser les données de réponse.',
        en: 'Always check the status code first to ensure the request was successful (200) before trying to parse the response data.'
      }
    }
  },

  // Card 9: Error Handling in API Calls
  {
    id: 'api-error-handling',
    title: {
      ht: 'Kòman pou jere erè yo nan API',
      fr: 'Comment gérer les erreurs dans les API',
      en: 'How to Handle Errors in API Calls'
    },
    content: {
      ht: `Lè nou travay ak API yo, gen plizyè bagay ki ka mal pase. Nou bezwen prepare pou jere yo.

**Kalite erè komen yo:**
- Koneksyon entènèt ki pa bon (ConnectionError)
- Tan ki depase (Timeout)  
- Sèvè ki pa disponib (500 errors)
- Mande ki pa otorize (401/403)
- Resous ki pa jwenn (404)

**Estrateji pou jere yo:**
- Itilize try/except blocks
- Verifye status codes yo
- Bay mesaj ki klè ak itilizatè a
- Essaye ankò ak limite yo
- Konsèv done backup yo

**Kòd estati komen yo:**
- 200: Bon jan bagay
- 400: Erè nan demand lan
- 401: Pa otorize
- 404: Pa jwenn
- 429: Twòp demand yo
- 500: Erè sèvè`,
      fr: `Lorsque nous travaillons avec des API, plusieurs choses peuvent mal se passer. Nous devons nous préparer à les gérer.

**Types d'erreurs communes :**
- Mauvaise connexion Internet (ConnectionError)
- Délai dépassé (Timeout)
- Serveur indisponible (500 errors)
- Demandes non autorisées (401/403)
- Ressources non trouvées (404)

**Stratégies pour les gérer :**
- Utiliser des blocs try/except
- Vérifier les codes de statut
- Donner des messages clairs à l'utilisateur
- Réessayer avec des limites
- Conserver des données de sauvegarde

**Codes de statut communes :**
- 200: Succès
- 400: Erreur dans la demande
- 401: Non autorisé
- 404: Non trouvé
- 429: Trop de demandes
- 500: Erreur serveur`,
      en: `When working with APIs, several things can go wrong. We need to prepare to handle them.

**Common error types:**
- Bad internet connection (ConnectionError)
- Timeout exceeded (Timeout)
- Server unavailable (500 errors)
- Unauthorized requests (401/403)
- Resources not found (404)

**Strategies to handle them:**
- Use try/except blocks
- Check status codes
- Give clear messages to user
- Retry with limits
- Keep backup data

**Common status codes:**
- 200: Success
- 400: Bad request
- 401: Unauthorized
- 404: Not found
- 429: Too many requests
- 500: Server error`
    },
    codeExamples: [
      {
        title: 'Comprehensive Error Handling',
        code: `import requests
from requests.exceptions import ConnectionError, Timeout, RequestException
import time

def robust_api_call(url, max_retries=3, timeout=10):
    """
    Make an API call with comprehensive error handling
    """
    for attempt in range(max_retries):
        try:
            print(f"🔄 Attempt {attempt + 1}/{max_retries}")
            
            response = requests.get(url, timeout=timeout)
            
            # Check status codes
            if response.status_code == 200:
                print("✅ Request successful!")
                return {"success": True, "data": response.json()}
                
            elif response.status_code == 400:
                return {"success": False, "error": "Bad request - check your parameters"}
                
            elif response.status_code == 401:
                return {"success": False, "error": "Unauthorized - check your API key"}
                
            elif response.status_code == 403:
                return {"success": False, "error": "Forbidden - access denied"}
                
            elif response.status_code == 404:
                return {"success": False, "error": "Resource not found"}
                
            elif response.status_code == 429:
                print("⚠️ Rate limit exceeded. Waiting before retry...")
                time.sleep(2 ** attempt)  # Exponential backoff
                continue
                
            elif response.status_code >= 500:
                print(f"⚠️ Server error ({response.status_code}). Retrying...")
                time.sleep(1)
                continue
                
            else:
                return {"success": False, "error": f"Unexpected status code: {response.status_code}"}
        
        except ConnectionError:
            print("❌ Connection error - check your internet connection")
            if attempt < max_retries - 1:
                print("⏳ Waiting before retry...")
                time.sleep(2)
                continue
            return {"success": False, "error": "Connection failed after multiple attempts"}
            
        except Timeout:
            print("❌ Request timed out")
            if attempt < max_retries - 1:
                print("⏳ Waiting before retry...")
                time.sleep(1)
                continue
            return {"success": False, "error": "Request timed out after multiple attempts"}
            
        except RequestException as e:
            return {"success": False, "error": f"Request error: {e}"}
            
        except ValueError:  # JSON decode error
            return {"success": False, "error": "Invalid JSON response"}
    
    return {"success": False, "error": "Max retries exceeded"}

# Test the robust API call
result = robust_api_call("https://httpbin.org/json")

if result["success"]:
    print("Data received:", result["data"])
else:
    print("Error:", result["error"])`
      },
      {
        title: 'Weather API with Error Recovery',
        code: `import requests
import json

class WeatherAppWithRecovery:
    """
    Weather app with advanced error handling and recovery
    """
    
    def __init__(self):
        # Multiple API endpoints for fallback
        self.primary_api = "https://wttr.in/"
        self.fallback_apis = [
            "https://api.openweathermap.org/data/2.5/weather",  # Requires API key
            # Add more fallback APIs here
        ]
        self.cache = {}  # Simple cache for offline use
        
    def get_weather_with_fallback(self, city):
        """
        Get weather with multiple fallback options
        """
        # Try primary API first
        result = self.try_primary_api(city)
        if result["success"]:
            # Cache successful result
            self.cache[city.lower()] = result["data"]
            return result
        
        print("⚠️ Primary API failed, trying fallbacks...")
        
        # Try fallback APIs
        for api_url in self.fallback_apis:
            result = self.try_fallback_api(api_url, city)
            if result["success"]:
                self.cache[city.lower()] = result["data"]
                return result
        
        # Use cached data if available
        if city.lower() in self.cache:
            print("📦 Using cached data (may be outdated)")
            return {"success": True, "data": self.cache[city.lower()], "source": "cache"}
        
        # All options failed
        return {"success": False, "error": "All weather sources unavailable"}
    
    def try_primary_api(self, city):
        """Try the primary weather API"""
        try:
            url = f"{self.primary_api}{city}?format=j1"
            response = requests.get(url, timeout=5)
            
            if response.status_code == 200:
                data = response.json()
                # Validate that we got actual weather data
                if 'current_condition' in data and data['current_condition']:
                    weather = self.parse_wttr_response(data, city)
                    return {"success": True, "data": weather, "source": "primary"}
            
            return {"success": False, "error": f"Primary API returned {response.status_code}"}
            
        except requests.exceptions.Timeout:
            return {"success": False, "error": "Primary API timeout"}
        except requests.exceptions.ConnectionError:
            return {"success": False, "error": "Primary API connection failed"}
        except Exception as e:
            return {"success": False, "error": f"Primary API error: {e}"}
    
    def try_fallback_api(self, api_url, city):
        """Try a fallback API (placeholder implementation)"""
        # This is a placeholder - in reality, you'd implement
        # different APIs with their specific formats
        return {"success": False, "error": "Fallback not implemented"}
    
    def parse_wttr_response(self, data, city):
        """Parse wttr.in API response"""
        try:
            current = data['current_condition'][0]
            return {
                "city": city,
                "temperature": current['temp_C'],
                "condition": current['weatherDesc'][0]['value'],
                "humidity": current['humidity'],
                "wind": current['windspeedKmph']
            }
        except (KeyError, IndexError):
            raise ValueError("Invalid weather data format")
    
    def display_weather_safely(self, weather_result):
        """Display weather with error handling"""
        if not weather_result["success"]:
            print(f"❌ Error: {weather_result['error']}")
            print("💡 Suggestions:")
            print("  • Check your internet connection")
            print("  • Verify the city name spelling")
            print("  • Try again in a few minutes")
            return
        
        data = weather_result["data"]
        source = weather_result.get("source", "unknown")
        
        print(f"\\n🌤 Weather for {data['city']} (Source: {source})")
        print(f"🌡️  {data['temperature']}°C")
        print(f"☁️  {data['condition']}")
        print(f"💧 {data['humidity']}% humidity")
        print(f"💨 {data['wind']} km/h wind")
        
        if source == "cache":
            print("⚠️  Note: This data may be outdated")

# Test the weather app with error handling
weather_app = WeatherAppWithRecovery()

# Try different cities
test_cities = ["San Juan", "InvalidCity123", "New York"]

for city in test_cities:
    print(f"\\n{'='*50}")
    print(f"Getting weather for: {city}")
    result = weather_app.get_weather_with_fallback(city)
    weather_app.display_weather_safely(result)`
      },
      {
        title: 'API Rate Limiting Handler',
        code: `import requests
import time
from datetime import datetime, timedelta

class RateLimitedAPI:
    """
    API client with built-in rate limiting and error handling
    """
    
    def __init__(self, requests_per_minute=60):
        self.requests_per_minute = requests_per_minute
        self.min_interval = 60.0 / requests_per_minute  # Seconds between requests
        self.last_request_time = None
        self.request_count = 0
        self.error_count = 0
        
    def wait_if_needed(self):
        """Wait if we're making requests too quickly"""
        if self.last_request_time:
            elapsed = time.time() - self.last_request_time
            if elapsed < self.min_interval:
                wait_time = self.min_interval - elapsed
                print(f"⏳ Rate limiting: waiting {wait_time:.1f} seconds...")
                time.sleep(wait_time)
    
    def make_request(self, url, **kwargs):
        """Make a rate-limited API request"""
        self.wait_if_needed()
        
        try:
            self.last_request_time = time.time()
            self.request_count += 1
            
            # Set default timeout if not provided
            if 'timeout' not in kwargs:
                kwargs['timeout'] = 10
            
            response = requests.get(url, **kwargs)
            
            # Handle different status codes
            if response.status_code == 200:
                print(f"✅ Request #{self.request_count} successful")
                return {"success": True, "data": response.json()}
                
            elif response.status_code == 429:  # Too Many Requests
                retry_after = response.headers.get('Retry-After')
                if retry_after:
                    wait_time = int(retry_after)
                    print(f"🚫 Rate limited! Waiting {wait_time} seconds...")
                    time.sleep(wait_time)
                    # Retry the request
                    return self.make_request(url, **kwargs)
                else:
                    print("🚫 Rate limited! No retry-after header, waiting 60 seconds...")
                    time.sleep(60)
                    return self.make_request(url, **kwargs)
                    
            else:
                self.error_count += 1
                return {
                    "success": False, 
                    "error": f"HTTP {response.status_code}: {response.text[:100]}"
                }
                
        except requests.exceptions.Timeout:
            self.error_count += 1
            return {"success": False, "error": "Request timed out"}
            
        except requests.exceptions.ConnectionError:
            self.error_count += 1
            return {"success": False, "error": "Connection failed"}
            
        except Exception as e:
            self.error_count += 1
            return {"success": False, "error": f"Unexpected error: {e}"}
    
    def get_stats(self):
        """Get API usage statistics"""
        success_rate = ((self.request_count - self.error_count) / self.request_count * 100) if self.request_count > 0 else 0
        
        print(f"\\n📊 API Usage Statistics:")
        print(f"   Total requests: {self.request_count}")
        print(f"   Successful: {self.request_count - self.error_count}")
        print(f"   Errors: {self.error_count}")
        print(f"   Success rate: {success_rate:.1f}%")

# Example usage with rate limiting
api_client = RateLimitedAPI(requests_per_minute=30)  # 30 requests per minute max

# Make several API calls
test_urls = [
    "https://httpbin.org/json",
    "https://httpbin.org/uuid",
    "https://httpbin.org/ip",
    "https://httpbin.org/user-agent"
]

for i, url in enumerate(test_urls, 1):
    print(f"\\nMaking request {i}...")
    result = api_client.make_request(url)
    
    if result["success"]:
        print(f"Data keys: {list(result['data'].keys())}")
    else:
        print(f"Error: {result['error']}")

# Show usage statistics
api_client.get_stats()`
      }
    ],
    exercises: [
      'Create a function that handles timeout errors gracefully',
      'Implement retry logic for failed API requests',
      'Build error messages that help users understand what went wrong',
      'Create a fallback system that uses cached data when APIs fail'
    ]
  },

  // Card 10: Best Practices and Tips
  {
    id: 'api-best-practices',
    title: {
      ht: 'Bon pratik ak konsèy pou API yo',
      fr: 'Bonnes pratiques et conseils pour les API',
      en: 'Best Practices and Tips for APIs'
    },
    content: {
      ht: `Ann aprann kijan pou itilize API yo ak fason ki responsab ak efikas.

**Jesyon API Key yo:**
- Pa janm konsèv API key yo nan kòd la
- Itilize environment variables
- Pa pataje yo ak moun yo
- Chanje yo regilyèman

**Optimizasyon pèfòmans:**
- Itilize caching pou redwi demann yo
- Batching requests yo
- Komprese done yo
- Itilize CDN yo

**Sekirite ak konfidensyalite:**
- Toujou itilize HTTPS
- Valide tout done ki antre yo
- Limite akseè ak permissions yo
- Audit ak monitoring

**Jesyon done yo:**
- Parse ak validate done yo
- Jere done ki gen pwoblèm yo
- Konsèv done yo ak fason ki konfidensyèl`,
      fr: `Apprenons à utiliser les API de manière responsable et efficace.

**Gestion des clés API :**
- Ne jamais stocker les clés API dans le code
- Utiliser des variables d'environnement
- Ne pas les partager avec d'autres
- Les changer régulièrement

**Optimisation des performances :**
- Utiliser la mise en cache pour réduire les demandes
- Regrouper les demandes
- Comprimer les données
- Utiliser des CDN

**Sécurité et confidentialité :**
- Toujours utiliser HTTPS
- Valider toutes les données entrantes
- Limiter l'accès avec des permissions
- Audit et surveillance

**Gestion des données :**
- Parser et valider les données
- Gérer les données problématiques
- Stocker les données de manière confidentielle`,
      en: `Let's learn to use APIs responsibly and efficiently.

**API Key Management:**
- Never store API keys in code
- Use environment variables
- Don't share them with others
- Change them regularly

**Performance optimization:**
- Use caching to reduce requests
- Batch requests
- Compress data
- Use CDNs

**Security and privacy:**
- Always use HTTPS
- Validate all input data
- Limit access with permissions
- Audit and monitoring

**Data management:**
- Parse and validate data
- Handle problematic data
- Store data confidentially`
    },
    codeExamples: [
      {
        title: 'Secure API Key Management',
        code: `import os
import json
from typing import Optional

class APIKeyManager:
    """
    Secure API key management system
    """
    
    def __init__(self, config_file: str = "api_config.json"):
        self.config_file = config_file
        self.api_keys = {}
        self.load_config()
    
    def load_config(self):
        """Load API configuration from file and environment"""
        # First, try to load from config file
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r') as f:
                    config = json.load(f)
                    self.api_keys.update(config.get('api_keys', {}))
        except Exception as e:
            print(f"⚠️ Warning: Could not load config file: {e}")
        
        # Override with environment variables (more secure)
        env_keys = {
            'weather_api': os.getenv('WEATHER_API_KEY'),
            'news_api': os.getenv('NEWS_API_KEY'),
            'github_api': os.getenv('GITHUB_API_KEY'),
        }
        
        # Add non-empty environment variables
        for key, value in env_keys.items():
            if value:
                self.api_keys[key] = value
    
    def get_api_key(self, service: str) -> Optional[str]:
        """Get API key for a service"""
        key = self.api_keys.get(service)
        if not key:
            print(f"❌ No API key found for {service}")
            print(f"💡 Set environment variable: {service.upper()}_KEY")
        return key
    
    def validate_key_format(self, key: str, service: str) -> bool:
        """Basic validation for API key format"""
        if not key:
            return False
            
        # Basic checks for common key formats
        validation_rules = {
            'weather_api': lambda k: len(k) >= 20 and k.isalnum(),
            'github_api': lambda k: len(k) >= 20 and ('ghp_' in k or len(k) == 40),
            'news_api': lambda k: len(k) >= 20 and k.isalnum(),
        }
        
        validator = validation_rules.get(service)
        if validator:
            return validator(key)
        
        # Generic validation
        return len(key) >= 10 and key.strip() != ''
    
    def create_sample_config(self):
        """Create a sample configuration file"""
        sample_config = {
            "api_keys": {
                "weather_api": "your_weather_api_key_here",
                "news_api": "your_news_api_key_here",
                "github_api": "your_github_token_here"
            },
            "endpoints": {
                "weather": "https://api.openweathermap.org/data/2.5",
                "news": "https://newsapi.org/v2",
                "github": "https://api.github.com"
            }
        }
        
        with open(f"sample_{self.config_file}", 'w') as f:
            json.dump(sample_config, f, indent=4)
        
        print(f"✅ Sample config created: sample_{self.config_file}")
        print("🔐 Remember to:")
        print("  1. Add your real API keys")
        print("  2. Add the config file to .gitignore")
        print("  3. Use environment variables in production")

# Usage example
api_manager = APIKeyManager()

# Get API keys safely
weather_key = api_manager.get_api_key('weather_api')
if weather_key:
    print("✅ Weather API key loaded")
else:
    print("❌ Weather API key not found")

# Create sample config for reference
# api_manager.create_sample_config()`
      },
      {
        title: 'API Response Caching System',
        code: `import json
import time
import hashlib
from datetime import datetime, timedelta
from typing import Dict, Any, Optional

class APICache:
    """
    Simple caching system for API responses
    """
    
    def __init__(self, cache_duration_minutes: int = 30):
        self.cache: Dict[str, Dict[str, Any]] = {}
        self.cache_duration = timedelta(minutes=cache_duration_minutes)
        self.hit_count = 0
        self.miss_count = 0
    
    def _generate_cache_key(self, url: str, params: Dict = None) -> str:
        """Generate a unique cache key for the request"""
        cache_string = url
        if params:
            # Sort params for consistent key generation
            sorted_params = json.dumps(params, sort_keys=True)
            cache_string += sorted_params
        
        # Create hash of the cache string
        return hashlib.md5(cache_string.encode()).hexdigest()
    
    def get(self, url: str, params: Dict = None) -> Optional[Dict]:
        """Get cached response if available and not expired"""
        cache_key = self._generate_cache_key(url, params)
        
        if cache_key in self.cache:
            cached_item = self.cache[cache_key]
            cache_time = cached_item['timestamp']
            
            # Check if cache is still valid
            if datetime.now() - cache_time < self.cache_duration:
                self.hit_count += 1
                print(f"📦 Cache HIT for {url[:50]}...")
                return cached_item['data']
            else:
                # Remove expired cache
                del self.cache[cache_key]
                print(f"⏰ Cache EXPIRED for {url[:50]}...")
        
        self.miss_count += 1
        print(f"❌ Cache MISS for {url[:50]}...")
        return None
    
    def set(self, url: str, data: Dict, params: Dict = None):
        """Cache the response data"""
        cache_key = self._generate_cache_key(url, params)
        
        self.cache[cache_key] = {
            'data': data,
            'timestamp': datetime.now(),
            'url': url[:100]  # Store shortened URL for reference
        }
        print(f"💾 Cached response for {url[:50]}...")
    
    def clear_expired(self):
        """Remove all expired cache entries"""
        current_time = datetime.now()
        expired_keys = []
        
        for key, item in self.cache.items():
            if current_time - item['timestamp'] >= self.cache_duration:
                expired_keys.append(key)
        
        for key in expired_keys:
            del self.cache[key]
        
        if expired_keys:
            print(f"🧹 Removed {len(expired_keys)} expired cache entries")
    
    def clear_all(self):
        """Clear all cached data"""
        count = len(self.cache)
        self.cache.clear()
        print(f"🗑️ Cleared {count} cache entries")
    
    def get_stats(self) -> Dict[str, Any]:
        """Get cache performance statistics"""
        total_requests = self.hit_count + self.miss_count
        hit_rate = (self.hit_count / total_requests * 100) if total_requests > 0 else 0
        
        return {
            'total_requests': total_requests,
            'cache_hits': self.hit_count,
            'cache_misses': self.miss_count,
            'hit_rate_percent': round(hit_rate, 2),
            'cached_items': len(self.cache)
        }
    
    def print_stats(self):
        """Print cache statistics in a friendly format"""
        stats = self.get_stats()
        print(f"\\n📊 Cache Performance Statistics:")
        print(f"   Total Requests: {stats['total_requests']}")
        print(f"   Cache Hits: {stats['cache_hits']}")
        print(f"   Cache Misses: {stats['cache_misses']}")
        print(f"   Hit Rate: {stats['hit_rate_percent']}%")
        print(f"   Cached Items: {stats['cached_items']}")

# Example usage with requests
import requests

class CachedAPIClient:
    """API client with built-in caching"""
    
    def __init__(self, cache_duration_minutes=30):
        self.cache = APICache(cache_duration_minutes)
    
    def get(self, url: str, params=None, **kwargs):
        """Make GET request with caching"""
        # Try to get from cache first
        cached_response = self.cache.get(url, params)
        if cached_response:
            return {"data": cached_response, "from_cache": True}
        
        # Make actual request if not in cache
        try:
            response = requests.get(url, params=params, **kwargs)
            if response.status_code == 200:
                data = response.json()
                # Cache the successful response
                self.cache.set(url, data, params)
                return {"data": data, "from_cache": False}
            else:
                return {"error": f"HTTP {response.status_code}"}
        except Exception as e:
            return {"error": str(e)}

# Test the cached API client
client = CachedAPIClient(cache_duration_minutes=5)

# Make the same request multiple times
test_url = "https://httpbin.org/json"

for i in range(3):
    print(f"\\n--- Request {i+1} ---")
    result = client.get(test_url)
    
    if "data" in result:
        print(f"✅ Success (cached: {result['from_cache']})")
    else:
        print(f"❌ Error: {result['error']}")
    
    time.sleep(1)  # Small delay between requests

# Show cache statistics
client.cache.print_stats()`
      },
      {
        title: 'API Request Monitoring and Logging',
        code: `import logging
import time
import json
from datetime import datetime
from typing import Dict, Any
import requests

class APIMonitor:
    """
    Monitor and log API usage for debugging and optimization
    """
    
    def __init__(self, log_file: str = "api_monitor.log"):
        self.setup_logging(log_file)
        self.request_stats = {
            'total_requests': 0,
            'successful_requests': 0,
            'failed_requests': 0,
            'total_response_time': 0,
            'errors_by_type': {}
        }
    
    def setup_logging(self, log_file: str):
        """Setup logging configuration"""
        # Create logger
        self.logger = logging.getLogger('APIMonitor')
        self.logger.setLevel(logging.INFO)
        
        # Create file handler
        file_handler = logging.FileHandler(log_file)
        file_handler.setLevel(logging.INFO)
        
        # Create console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.WARNING)
        
        # Create formatter
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        file_handler.setFormatter(formatter)
        console_handler.setFormatter(formatter)
        
        # Add handlers to logger
        self.logger.addHandler(file_handler)
        self.logger.addHandler(console_handler)
    
    def monitored_request(self, method: str, url: str, **kwargs) -> Dict[str, Any]:
        """
        Make a monitored API request with full logging
        """
        start_time = time.time()
        request_id = f"req_{int(start_time * 1000000) % 1000000}"
        
        # Log request start
        self.logger.info(f"[{request_id}] Starting {method} request to {url}")
        
        # Update stats
        self.request_stats['total_requests'] += 1
        
        try:
            # Make the actual request
            response = requests.request(method, url, **kwargs)
            end_time = time.time()
            response_time = end_time - start_time
            
            # Update response time stats
            self.request_stats['total_response_time'] += response_time
            
            # Log response details
            log_data = {
                'request_id': request_id,
                'method': method,
                'url': url,
                'status_code': response.status_code,
                'response_time_ms': round(response_time * 1000, 2),
                'response_size_bytes': len(response.content)
            }
            
            if response.status_code == 200:
                self.request_stats['successful_requests'] += 1
                self.logger.info(f"[{request_id}] SUCCESS: {json.dumps(log_data)}")
                
                # Try to parse JSON response
                try:
                    data = response.json()
                    return {
                        'success': True,
                        'data': data,
                        'response_time': response_time,
                        'status_code': response.status_code,
                        'request_id': request_id
                    }
                except ValueError:
                    return {
                        'success': True,
                        'data': response.text,
                        'response_time': response_time,
                        'status_code': response.status_code,
                        'request_id': request_id
                    }
            else:
                # Handle HTTP errors
                self.request_stats['failed_requests'] += 1
                error_type = f"HTTP_{response.status_code}"
                self.request_stats['errors_by_type'][error_type] = \
                    self.request_stats['errors_by_type'].get(error_type, 0) + 1
                
                self.logger.warning(f"[{request_id}] HTTP_ERROR: {json.dumps(log_data)}")
                
                return {
                    'success': False,
                    'error': f"HTTP {response.status_code}: {response.text[:200]}",
                    'response_time': response_time,
                    'status_code': response.status_code,
                    'request_id': request_id
                }
        
        except requests.exceptions.Timeout:
            self.request_stats['failed_requests'] += 1
            self.request_stats['errors_by_type']['TIMEOUT'] = \
                self.request_stats['errors_by_type'].get('TIMEOUT', 0) + 1
            
            self.logger.error(f"[{request_id}] TIMEOUT: Request to {url}")
            return {'success': False, 'error': 'Request timeout', 'request_id': request_id}
        
        except requests.exceptions.ConnectionError:
            self.request_stats['failed_requests'] += 1
            self.request_stats['errors_by_type']['CONNECTION_ERROR'] = \
                self.request_stats['errors_by_type'].get('CONNECTION_ERROR', 0) + 1
            
            self.logger.error(f"[{request_id}] CONNECTION_ERROR: Could not connect to {url}")
            return {'success': False, 'error': 'Connection error', 'request_id': request_id}
        
        except Exception as e:
            self.request_stats['failed_requests'] += 1
            self.request_stats['errors_by_type']['UNKNOWN_ERROR'] = \
                self.request_stats['errors_by_type'].get('UNKNOWN_ERROR', 0) + 1
            
            self.logger.error(f"[{request_id}] UNKNOWN_ERROR: {str(e)}")
            return {'success': False, 'error': f'Unknown error: {e}', 'request_id': request_id}
    
    def get_stats_summary(self) -> Dict[str, Any]:
        """Get a summary of API usage statistics"""
        total_requests = self.request_stats['total_requests']
        successful_requests = self.request_stats['successful_requests']
        failed_requests = self.request_stats['failed_requests']
        
        success_rate = (successful_requests / total_requests * 100) if total_requests > 0 else 0
        
        avg_response_time = (
            self.request_stats['total_response_time'] / successful_requests * 1000
        ) if successful_requests > 0 else 0
        
        return {
            'total_requests': total_requests,
            'successful_requests': successful_requests,
            'failed_requests': failed_requests,
            'success_rate_percent': round(success_rate, 2),
            'average_response_time_ms': round(avg_response_time, 2),
            'errors_by_type': self.request_stats['errors_by_type']
        }
    
    def print_stats(self):
        """Print formatted statistics"""
        stats = self.get_stats_summary()
        
        print(f"\\n📊 API Monitor Statistics:")
        print(f"   Total Requests: {stats['total_requests']}")
        print(f"   Successful: {stats['successful_requests']}")
        print(f"   Failed: {stats['failed_requests']}")
        print(f"   Success Rate: {stats['success_rate_percent']}%")
        print(f"   Avg Response Time: {stats['average_response_time_ms']:.2f}ms")
        
        if stats['errors_by_type']:
            print(f"   Error Types:")
            for error_type, count in stats['errors_by_type'].items():
                print(f"     {error_type}: {count}")

# Example usage
monitor = APIMonitor()

# Test different types of requests
test_urls = [
    ("GET", "https://httpbin.org/json"),
    ("GET", "https://httpbin.org/delay/2"),  # Slow endpoint
    ("GET", "https://httpbin.org/status/404"),  # 404 error
    ("GET", "https://invalid-url-that-does-not-exist.com"),  # Connection error
]

for method, url in test_urls:
    print(f"\\nTesting {method} {url}")
    result = monitor.monitored_request(method, url, timeout=3)
    
    if result['success']:
        print(f"✅ Success (Request ID: {result['request_id']})")
    else:
        print(f"❌ Error: {result['error']} (Request ID: {result['request_id']})")

# Print final statistics
monitor.print_stats()`
      }
    ],
    quiz: {
      question: {
        ht: 'Ki sa ki pratik sekirite ki pi enpòtan lè w ap travay ak kle API yo?',
        fr: 'Quelle est la pratique de sécurité la plus importante lors du travail avec des clés API ?',
        en: 'What is the most important security practice when working with API keys?'
      },
      options: [
        { ht: 'Itilize kle API kout yo', fr: 'Utiliser des clés API courtes', en: 'Using short API keys' },
        { ht: 'Depo kle API yo nan kòmantè kòd yo', fr: 'Stocker les clés API dans les commentaires de code', en: 'Storing API keys in code comments' },
        { ht: 'Pa janm depo kle API yo dirèkteman nan kòd la', fr: 'Ne jamais stocker les clés API directement dans le code', en: 'Never storing API keys directly in code' },
        { ht: 'Pataje kle API yo ak manm ekip yo', fr: 'Partager les clés API avec les membres de l\'équipe', en: 'Sharing API keys with team members' }
      ],
      correctAnswer: 2,
      explanation: {
        ht: 'Kle API yo pa ta dwe janm depo dirèkteman nan kòd la. Itilize varyab anviwonman oswa fichye konfigirasyon an sekirite ki pa commit nan kontwòl vèsyon an.',
        fr: 'Les clés API ne doivent jamais être stockées directement dans le code. Utilisez des variables d\'environnement ou des fichiers de configuration sécurisés qui ne sont pas committés dans le contrôle de version.',
        en: 'API keys should never be stored directly in code. Use environment variables or secure configuration files that are not committed to version control.'
      }
    }
  }
];

// Create the lesson object with all cards
export const pythonWeek14Lesson = {
  weekNumber: 14,
  title: {
    ht: 'Semèn 14: Travay ak Done Ekstèn (JSON ak API)',
    fr: 'Semaine 14: Travailler avec des Données Externes (JSON et API)',
    en: 'Week 14: Working with External Data (JSON & APIs)'
  },
  description: {
    ht: 'Aprann kijan pou travay ak done ekstèn, li ak ekri JSON, ak fè demann API yo.',
    fr: 'Apprenez à travailler avec des données externes, lire et écrire JSON, et faire des requêtes API.',
    en: 'Learn how to work with external data, read and write JSON, and make API requests.'
  },
  totalCards: 10,
  cards: pythonWeek14Cards,
  miniProject: {
    title: {
      ht: 'Pwojè Mini: Aplikasyon Tan an ak API',
      fr: 'Mini Projet: Application Météo avec API',
      en: 'Mini Project: Weather App with API'
    },
    description: {
      ht: 'Konstwi yon aplikasyon ki jwenn ak montre enfòmasyon sou tan an lè l itilize yon API reyèl.',
      fr: 'Construire une application qui récupère et affiche des informations météorologiques en utilisant une API réelle.',
      en: 'Build an application that fetches and displays weather information using a real API.'
    },
    starterCode: `import requests
import json

class WeatherApp:
    """
    Advanced Weather Application with multiple features
    """
    
    def __init__(self):
        self.base_url = "https://wttr.in/"
        self.favorites = []
        self.history = []
    
    def get_weather(self, city):
        """
        Get current weather for a city
        TODO: Implement this method
        """
        pass
    
    def add_to_favorites(self, city):
        """
        Add a city to favorites list
        TODO: Implement this method
        """
        pass
    
    def show_favorites_weather(self):
        """
        Show weather for all favorite cities
        TODO: Implement this method
        """
        pass
    
    def save_search_history(self, city, weather_data):
        """
        Save search to history
        TODO: Implement this method
        """
        pass
    
    def export_data(self, filename):
        """
        Export favorites and history to JSON file
        TODO: Implement this method
        """
        pass

# Main application loop
def main():
    app = WeatherApp()
    
    print("🌤 Welcome to Advanced Weather App! 🌤")
    print("Commands: weather, favorites, add, history, export, quit")
    
    while True:
        command = input("\\n> ").strip().lower()
        
        if command == "quit":
            print("👋 Thanks for using Weather App!")
            break
        # TODO: Implement command handling
        
if __name__ == "__main__":
    main()`,
    sampleSolution: `import requests
import json
from datetime import datetime
import os

class WeatherApp:
    """
    Advanced Weather Application with multiple features
    """
    
    def __init__(self):
        self.base_url = "https://wttr.in/"
        self.favorites = []
        self.history = []
        self.load_data()
    
    def get_weather(self, city):
        """
        Get current weather for a city using wttr.in API
        """
        try:
            # Clean and format city name
            city = city.strip().title()
            
            # Use wttr.in API with JSON format
            url = f"{self.base_url}{city}?format=j1"
            
            print(f"🔍 Getting weather for {city}...")
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Extract current weather information
                current = data['current_condition'][0]
                location_info = data.get('nearest_area', [{}])[0]
                
                weather_info = {
                    "city": city,
                    "location": location_info.get('areaName', [{}])[0].get('value', city),
                    "country": location_info.get('country', [{}])[0].get('value', 'Unknown'),
                    "temperature_c": current['temp_C'],
                    "temperature_f": current['temp_F'],
                    "feels_like_c": current['FeelsLikeC'],
                    "feels_like_f": current['FeelsLikeF'],
                    "humidity": current['humidity'],
                    "condition": current['weatherDesc'][0]['value'],
                    "wind_speed_kmh": current['windspeedKmph'],
                    "wind_speed_mph": current['windspeedMiles'],
                    "wind_direction": current['winddir16Point'],
                    "pressure": current['pressure'],
                    "visibility": current['visibility'],
                    "uv_index": current['uvIndex'],
                    "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                }
                
                # Add to history
                self.save_search_history(city, weather_info)
                
                return {"success": True, "data": weather_info}
                
            elif response.status_code == 404:
                return {"success": False, "error": f"City '{city}' not found"}
            else:
                return {"success": False, "error": f"Weather service returned error {response.status_code}"}
                
        except requests.exceptions.Timeout:
            return {"success": False, "error": "Request timed out. Please check your internet connection."}
        except requests.exceptions.ConnectionError:
            return {"success": False, "error": "Unable to connect to weather service"}
        except requests.exceptions.RequestException as e:
            return {"success": False, "error": f"Network error: {e}"}
        except (KeyError, IndexError, json.JSONDecodeError) as e:
            return {"success": False, "error": f"Error parsing weather data: {e}"}
    
    def display_weather(self, weather_result):
        """
        Display weather information in a beautiful format
        """
        if not weather_result["success"]:
            print(f"❌ {weather_result['error']}")
            return
        
        data = weather_result["data"]
        
        print(f"\\n🌤 Weather Report for {data['location']}, {data['country']}")
        print("=" * 60)
        
        # Temperature section
        print(f"🌡️  Temperature: {data['temperature_c']}°C ({data['temperature_f']}°F)")
        print(f"🤔 Feels like: {data['feels_like_c']}°C ({data['feels_like_f']}°F)")
        
        # Condition and details
        print(f"☁️  Condition: {data['condition']}")
        print(f"💧 Humidity: {data['humidity']}%")
        
        # Wind information
        print(f"💨 Wind: {data['wind_speed_kmh']} km/h ({data['wind_speed_mph']} mph) {data['wind_direction']}")
        
        # Additional details
        print(f"📊 Pressure: {data['pressure']} mb")
        print(f"👁️  Visibility: {data['visibility']} km")
        print(f"☀️  UV Index: {data['uv_index']}")
        
        print(f"\\n⏰ Updated: {data['timestamp']}")
        print()
    
    def add_to_favorites(self, city):
        """
        Add a city to favorites list
        """
        city = city.strip().title()
        
        if city in self.favorites:
            print(f"ℹ️ {city} is already in your favorites")
            return False
        
        # Verify the city exists by trying to get weather
        result = self.get_weather(city)
        if result["success"]:
            self.favorites.append(city)
            self.save_data()
            print(f"⭐ Added {city} to favorites!")
            return True
        else:
            print(f"❌ Cannot add {city} to favorites: {result['error']}")
            return False
    
    def remove_from_favorites(self, city):
        """
        Remove a city from favorites
        """
        city = city.strip().title()
        
        if city in self.favorites:
            self.favorites.remove(city)
            self.save_data()
            print(f"🗑️ Removed {city} from favorites")
            return True
        else:
            print(f"❌ {city} is not in your favorites")
            return False
    
    def show_favorites(self):
        """
        Display all favorite cities
        """
        if not self.favorites:
            print("⭐ No favorite cities yet. Add some with 'add <city>'")
            return
        
        print(f"\\n⭐ Your Favorite Cities ({len(self.favorites)}):")
        for i, city in enumerate(self.favorites, 1):
            print(f"  {i}. {city}")
        print()
    
    def show_favorites_weather(self):
        """
        Show weather for all favorite cities
        """
        if not self.favorites:
            print("⭐ No favorite cities yet. Add some with 'add <city>'")
            return
        
        print(f"\\n🌟 Weather for Your {len(self.favorites)} Favorite Cities:")
        print("=" * 70)
        
        for city in self.favorites:
            result = self.get_weather(city)
            if result["success"]:
                data = result["data"]
                print(f"📍 {data['location']}: {data['temperature_c']}°C, {data['condition']}")
            else:
                print(f"📍 {city}: Error - {result['error']}")
        print()
    
    def save_search_history(self, city, weather_data):
        """
        Save search to history (keep last 20)
        """
        history_entry = {
            "city": city,
            "temperature": weather_data["temperature_c"],
            "condition": weather_data["condition"],
            "timestamp": weather_data["timestamp"]
        }
        
        # Add to beginning of list
        self.history.insert(0, history_entry)
        
        # Keep only last 20 searches
        self.history = self.history[:20]
        
        # Save to file
        self.save_data()
    
    def show_history(self):
        """
        Show recent search history
        """
        if not self.history:
            print("📚 No search history yet")
            return
        
        print(f"\\n📚 Recent Searches ({len(self.history)} entries):")
        print("-" * 60)
        
        for i, entry in enumerate(self.history[:10], 1):  # Show last 10
            print(f"{i:2d}. {entry['city']}: {entry['temperature']}°C, {entry['condition']}")
            print(f"    🕐 {entry['timestamp']}")
        
        if len(self.history) > 10:
            print(f"    ... and {len(self.history) - 10} more")
        print()
    
    def export_data(self, filename="weather_data.json"):
        """
        Export favorites and history to JSON file
        """
        try:
            export_data = {
                "export_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "favorites": self.favorites,
                "history": self.history[:50],  # Export last 50 searches
                "app_version": "1.0",
                "total_searches": len(self.history)
            }
            
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(export_data, f, indent=2, ensure_ascii=False)
            
            print(f"📄 Data exported to {filename}")
            print(f"   - {len(self.favorites)} favorite cities")
            print(f"   - {len(self.history)} search history entries")
            
        except Exception as e:
            print(f"❌ Export failed: {e}")
    
    def import_data(self, filename="weather_data.json"):
        """
        Import data from JSON file
        """
        try:
            if not os.path.exists(filename):
                print(f"❌ File {filename} not found")
                return
            
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Import favorites
            if 'favorites' in data:
                self.favorites = data['favorites']
            
            # Import history
            if 'history' in data:
                self.history = data['history']
            
            self.save_data()  # Save to internal storage
            
            print(f"📥 Data imported from {filename}")
            print(f"   - {len(self.favorites)} favorite cities")
            print(f"   - {len(self.history)} search history entries")
            
        except Exception as e:
            print(f"❌ Import failed: {e}")
    
    def save_data(self):
        """
        Save app data to local file
        """
        try:
            app_data = {
                "favorites": self.favorites,
                "history": self.history
            }
            
            with open('.weather_app_data.json', 'w', encoding='utf-8') as f:
                json.dump(app_data, f, indent=2)
                
        except Exception as e:
            print(f"⚠️ Warning: Could not save data: {e}")
    
    def load_data(self):
        """
        Load app data from local file
        """
        try:
            if os.path.exists('.weather_app_data.json'):
                with open('.weather_app_data.json', 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                self.favorites = data.get('favorites', [])
                self.history = data.get('history', [])
                
        except Exception as e:
            print(f"⚠️ Warning: Could not load saved data: {e}")
            self.favorites = []
            self.history = []
    
    def get_forecast(self, city, days=3):
        """
        Get weather forecast for upcoming days
        """
        try:
            city = city.strip().title()
            url = f"{self.base_url}{city}?format=j1"
            
            response = requests.get(url, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                forecast_data = []
                
                # Get forecast data (wttr.in provides 3-day forecast)
                for day_data in data.get('weather', [])[:days]:
                    date = day_data['date']
                    
                    # Get average conditions for the day
                    hourly_data = day_data['hourly']
                    if hourly_data:
                        # Use data from around midday (index 4 = 12:00)
                        midday_data = hourly_data[4] if len(hourly_data) > 4 else hourly_data[0]
                        
                        forecast_info = {
                            "date": date,
                            "max_temp_c": day_data['maxtempC'],
                            "min_temp_c": day_data['mintempC'],
                            "condition": midday_data['weatherDesc'][0]['value'],
                            "humidity": midday_data['humidity'],
                            "wind_speed": midday_data['windspeedKmph'],
                            "chance_of_rain": midday_data.get('chanceofrain', '0')
                        }
                        
                        forecast_data.append(forecast_info)
                
                return {"success": True, "data": forecast_data, "city": city}
                
            else:
                return {"success": False, "error": f"Could not get forecast for {city}"}
                
        except Exception as e:
            return {"success": False, "error": f"Forecast error: {e}"}
    
    def display_forecast(self, forecast_result):
        """
        Display weather forecast
        """
        if not forecast_result["success"]:
            print(f"❌ {forecast_result['error']}")
            return
        
        forecast_data = forecast_result["data"]
        city = forecast_result["city"]
        
        print(f"\\n📅 {len(forecast_data)}-Day Forecast for {city}")
        print("=" * 60)
        
        for day in forecast_data:
            # Format date
            try:
                date_obj = datetime.strptime(day['date'], '%Y-%m-%d')
                formatted_date = date_obj.strftime('%A, %B %d')
            except:
                formatted_date = day['date']
            
            print(f"📆 {formatted_date}")
            print(f"   🌡️  High: {day['max_temp_c']}°C  Low: {day['min_temp_c']}°C")
            print(f"   ☁️  {day['condition']}")
            print(f"   💧 Humidity: {day['humidity']}%")
            print(f"   💨 Wind: {day['wind_speed']} km/h")
            print(f"   🌧️  Rain Chance: {day['chance_of_rain']}%")
            print()

def main():
    """
    Main application with interactive menu
    """
    app = WeatherApp()
    
    print("🌟 Welcome to Advanced Weather App! 🌟")
    print("Get current weather, forecasts, and manage your favorite cities")
    print()
    print("Available commands:")
    print("  weather <city>    - Get current weather")
    print("  forecast <city>   - Get 3-day forecast")
    print("  add <city>        - Add city to favorites")
    print("  remove <city>     - Remove city from favorites")
    print("  favorites         - Show favorite cities")
    print("  weather-fav       - Weather for all favorites")
    print("  history           - Show search history")
    print("  export [filename] - Export data to JSON")
    print("  import [filename] - Import data from JSON")
    print("  help              - Show this help")
    print("  quit              - Exit application")
    print()
    
    while True:
        try:
            command_input = input("🌤 > ").strip()
            
            if not command_input:
                continue
            
            # Parse command and arguments
            parts = command_input.split(None, 1)
            command = parts[0].lower()
            args = parts[1] if len(parts) > 1 else ""
            
            if command == "quit" or command == "exit":
                print("\\n👋 Thanks for using Weather App!")
                print("Your favorites and history have been saved.")
                break
                
            elif command == "weather":
                if not args:
                    city = input("Enter city name: ").strip()
                else:
                    city = args
                
                if city:
                    result = app.get_weather(city)
                    app.display_weather(result)
                else:
                    print("❌ Please provide a city name")
                    
            elif command == "forecast":
                if not args:
                    city = input("Enter city name for forecast: ").strip()
                else:
                    city = args
                
                if city:
                    result = app.get_forecast(city)
                    app.display_forecast(result)
                else:
                    print("❌ Please provide a city name")
                    
            elif command == "add":
                if not args:
                    city = input("Enter city name to add to favorites: ").strip()
                else:
                    city = args
                
                if city:
                    app.add_to_favorites(city)
                else:
                    print("❌ Please provide a city name")
                    
            elif command == "remove":
                if not args:
                    app.show_favorites()
                    city = input("Enter city name to remove: ").strip()
                else:
                    city = args
                
                if city:
                    app.remove_from_favorites(city)
                else:
                    print("❌ Please provide a city name")
                    
            elif command == "favorites":
                app.show_favorites()
                
            elif command == "weather-fav":
                app.show_favorites_weather()
                
            elif command == "history":
                app.show_history()
                
            elif command == "export":
                filename = args if args else "weather_data.json"
                app.export_data(filename)
                
            elif command == "import":
                filename = args if args else "weather_data.json"
                app.import_data(filename)
                
            elif command == "help":
                print("\\nAvailable commands:")
                print("  weather <city>    - Get current weather")
                print("  forecast <city>   - Get 3-day forecast")
                print("  add <city>        - Add city to favorites")
                print("  remove <city>     - Remove city from favorites")
                print("  favorites         - Show favorite cities")
                print("  weather-fav       - Weather for all favorites")
                print("  history           - Show search history")
                print("  export [filename] - Export data to JSON")
                print("  import [filename] - Import data from JSON")
                print("  help              - Show this help")
                print("  quit              - Exit application")
                
            else:
                print(f"❌ Unknown command: {command}")
                print("Type 'help' for available commands")
                
        except KeyboardInterrupt:
            print("\\n\\n👋 Goodbye!")
            break
        except Exception as e:
            print(f"❌ An error occurred: {e}")
            print("Please try again or type 'help' for available commands")

if __name__ == "__main__":
    main()`
  }
};