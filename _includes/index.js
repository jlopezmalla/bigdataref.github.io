var indexJson = [
{% for entry_hash in site.data.entries %}
{% assign entry = entry_hash[1] %}
{
"name": "{{entry.name}}",
"url": "{{entry.url}}",
"description": "{{entry.description}}",
"tags": "{{entry.tags}}"
} {% unless forloop.last %},{% endunless %}
{% endfor %}
]