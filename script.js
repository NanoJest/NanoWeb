document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('searchBar').value.trim();

  if (isValidURL(query)) {
    window.location.href = query;
  } else {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

function isValidURL(str) {
  const pattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?$/i;
  return pattern.test(str);
}
