import requests
from bs4 import BeautifulSoup

result = requests.get("https://www.tabroom.com/index/tourn/results/event_results.mhtml?tourn_id=20646&result_id=189552")

print(result.status_code)