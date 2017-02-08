function createButton(parentId, label, handler) {
	var parent = document.getElementById(parentId);
	if (parent) {
		var button = document.createElement("input");
		button.type = "button";
		button.value = label;
		button.onclick = handler;
		button.style.marginLeft = button.style.margin = "3px";
		parent.appendChild(button);
		return button;
	}
	return null;
}

function createButtons(parentId, actions) {
	for (var action in actions) {
		createButton(parentId, action, actions[action]);
	}
}

function createText(parentId, id, size, value) {
    var parent = document.getElementById(parentId);
    if (parent) {
        var text = document.createElement("input");
        text.id = id;
        text.type = "text";
        text.size = size;
        text.value = (value !== undefined) ? value : null;
        text.style.marginLeft = text.style.margin = "3px";
        parent.appendChild(text);
        return text;
    }
    return null;
}

function createCheckBox(parentId, label, handler, checked) {
	var parent = document.getElementById(parentId);
	if (parent) {
		var button = document.createElement("input");
		button.id = "_checkbox_" + label;
		button.type = "checkbox";
		button.value = label;
		button.checked = checked;
		button.onclick = handler;
		button.style.marginLeft = button.style.margin = "3px";
		parent.appendChild(button);

		var lab = document.createElement("label");
		lab.htmlFor = button.id;
		lab.innerHTML = label;
		lab.style.background = 'rgba(0, 0, 0, 0.1)';
		lab.style.marginRight = "4px";
		parent.appendChild(lab);
		
		return button;
	}
	return null;
}

function createListBox(parentId, label, items, handler, selectedItem) {
	var parent = document.getElementById(parentId);
	if (parent) {
		var lab = document.createElement("label");
		lab.innerHTML = label;
		lab.style.marginLeft = "3px";
		lab.style.texDecoration = "underline";
		lab.style.background = 'rgba(0, 128, 0, 0.1)';
		parent.appendChild(lab);

		var list = document.createElement("select");
		list.id = "_listbox_" + label;
		list.style.marginLeft = "4px";
		list.onchange = handler;
		parent.appendChild(list);

		if (items) {
			for (var i = 0; i < items.length; i++) {
				var opt = document.createElement("option");
				opt.value = items[i];
				opt.text = items[i];
				if (opt.value == selectedItem) {
					opt.selected = true;
				}
				list.add(opt, null);
			}
		}
		lab.htmlFor = list.id;
	}
	return null;
}

var _getChecked = function (e) {
	var elt = typeof e == "string" ? $("#" + "_checkbox_" + e)[0] : e.target;
	return elt ? elt.checked : false;
};

var _setChecked = function (e, checked) {
	var elt = typeof e == "string" ? $("#" + "_checkbox_" + e)[0] : e.target;
	elt.checked = checked;
};

var _getSelected = function (e, def) {
	var elt = typeof e == "string" ? $("#" + "_listbox_" + e)[0] : e.target;
	if (elt) {
		var idx = elt.selectedIndex;
		return idx !== undefined ? elt[idx].value : def;
	}
	return def;
};

var _setSelected = function (list, value) {
	var elt = $("#" + "_listbox_" + list)[0];
	if (elt) {
		for (var i = 0, cnt = elt.childElementCount; i < cnt; i++) {
			if (elt[i].label == value) {
				elt.selectedIndex = i;
				break;
			}
		}
	}
}

var _setListItems = function (list, items) {
	var elt = $("#" + "_listbox_" + list)[0];
	if (elt) {
		for (var i = 0; i < items.length; i++) {
			var opt = document.createElement("option");
			opt.value = items[i];
			opt.text = items[i];
			elt.add(opt, null);
		}
	}
};

function loadScript(parentId, script, callback) {
	var parent = document.getElementById(parentId);
	if (parent) {
		var elt = document.createElement("script");
		elt.type = "text/javascript";
		elt.src = script;
		
		if (elt.readyState) { // ie
			elt.onreadystatechange = function() {
				if (this.readyState == 'complete') {
					callback.call(window);
				}
			};
		} else { // non ie
			elt.onload = function () {
				callback.call(window);
			};
		}
		
		parent.appendChild(elt);
	}
}