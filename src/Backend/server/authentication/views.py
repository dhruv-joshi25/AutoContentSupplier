from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import pyrebase
from requests.exceptions import RequestException

config = {
    "apiKey": 'AIzaSyCDGOP8ZoR4gSZuzBfGUbyMm9rXb-PoEG4',
    "authDomain": "something-3d9f9.firebaseapp.com",
    "databaseURL": "https://something-3d9f9-default-rtdb.asia-southeast1.firebasedatabase.app/",
    "storageBucket": "something-3d9f9.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()


@csrf_exempt
def process_topic(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        topic = data['topic']
        result = test(topic)
        return JsonResponse(result)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    
@csrf_exempt
def hello():
    return JsonResponse({'message': 'Hello, World!'})


class Crawler:
    def __init__(self, query):
        self.query = query
        self.search_url = f"https://www.google.com/search?q={query}"
        self.links = []
        print(self.search_url)

    def fetch(self, url):
        try:
            headers = {'User-Agent': 'Mozilla/5.0'}
            response = requests.get(url, headers=headers)
            response.raise_for_status()   
        except RequestException as e:
            print(f"Error: {e}")
            return None
        return response

    def get_links(self):
        response = requests.get(self.search_url, headers={"User-Agent": "Mozilla/5.0"})
        response.raise_for_status()
        soup = BeautifulSoup(response.content, "html.parser")
        for a_tag in soup.find_all("a", href=True):
            url = a_tag.get("href")
            if url.startswith("http"):
                self.links.append(url)
            else:
                self.links.append(urljoin(self.search_url, url))
        return self.links

    def get_pdf_links(self):
        pdf_links = []
        for link in self.links:
            if link.endswith(".pdf"):
                pdf_links.append(link)
        return pdf_links

    def get_youtube_links(self):
        youtube_links = []
        for link in self.links:
            if "youtube.com" in link:
                youtube_links.append(link)
        return youtube_links

    def get_related_links(self):
        related_links = []
        pdf_links = self.get_pdf_links()
        youtube_links = self.get_youtube_links()
        for link in self.links:
            if link not in pdf_links and link not in youtube_links and "http" in link:
                related_links.append(link)
        return related_links

def test(search_query):
    crawler = Crawler(search_query)
    crawler.get_links()

    pdf_links = crawler.get_pdf_links()
    youtube_links = crawler.get_youtube_links()
    related_links = crawler.get_related_links()

    # Create JSON object
    result = {
        "pdf_links": pdf_links,
        "youtube_links": youtube_links,
        "related_links": related_links
    }
    db.update(data=result)

    return result
