// window.addEventListener('load', function() { setTimeout(function() {
// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  // can call msnry.layout() again if need to re-layout grid (i.e when grid-item deleted ... )
  msnry.layout();
});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var markOptions = {
  "element": "span",
  "className": "bg-light-yellow",
  acrossElements: true,
  "separateWordSearch": true,
  synonyms: {
    "à":"a","á":"a","ạ":"a","ả":"a","ã":"a","â":"a","ầ":"a","ấ":"a","ậ":"a","ẩ":"a","ẫ":"a","ă":"a","ằ":"a","ắ":"a","ặ":"a","ẳ":"a","ẵ":"a",
    "è":"e","é":"e","ẹ":"e","ẻ":"e","ẽ":"e","ê":"e","ề":"e","ế":"e","ệ":"e","ể":"e","ễ":"e",
    "ì":"i","í":"i","ị":"i","ỉ":"i","ĩ":"i",
    "ò":"o","ó":"o","ọ":"o","ỏ":"o","õ":"o","ô":"o","ồ":"o","ố":"o","ộ":"o","ổ":"o","ỗ":"o","ơ":"o","ờ":"o","ớ":"o","ợ":"o","ở":"o","ỡ":"o",
    "ù":"u","ú":"u","ụ":"u","ủ":"u","ũ":"u","ư":"u","ừ":"u","ứ":"u","ự":"u","ử":"u","ữ":"u",
    "ỳ":"y","ý":"y","ỵ":"y","ỷ":"y","ỹ":"y",
    "đ":"d"
  }
};

var options = {
  threshold: 0.25,
  distance: 999,
  keys: ['title'],
  id: 'id'
}
var fuse = new Fuse(posts, options), results;
var items = document.getElementsByClassName("grid-item");
var searchField = document.getElementById("search-field");

function randomShow(x) {
    x = x || 8;
    var item, i, r = items.length;
    for (i = 0; r > 0; i++) {
        item = items[i];
        if (Math.random() * r < x) {
            item.style.display = 'block';
            x--;
        } else {
            item.style.display = 'none';
        }
        r--;
    }
    msnry.layout();
}

function searching() {
  var str = viNormalize(searchField.value.trim());
  if (str.length == 0) { str = " "; }
  results = fuse.search(str);
  // console.log(str, results);
  var item, i, n = items.length, hiliteItems = [];
  for (i = 0; i < n; i++) {
    item = items[i];
    if ( results.indexOf(item.id) > -1 ) {
      item.style.display = 'block';
      hiliteItems.push(item);
    } else {
      item.style.display = 'none';
    }
    msnry.layout();
  }

  var instance = new Mark(hiliteItems);
  instance.unmark({
    done: function() {
      instance.mark(str, markOptions);
    }
  });

  msnry.layout();
};

window.search =  debounce(searching, 300);

// }, 100) });
