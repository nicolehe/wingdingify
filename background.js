chrome.webRequest.onBeforeRequest.addListener(
    function(data) {
        var fontUrl = data.url;
        var split = fontUrl.split("."); // splitting the url to get the extension
        var extension = split[split.length - 1]; // the last item is the extension
        var newUrl;

        // change the files depending on the extension
        switch (extension) {
            case "woff2":
                newUrl = "https://db.onlinewebfonts.com/t/e991cc888d4fb544fe0a88d065ab6efc.woff2";
                break;
            case "woff":
                newUrl = "https://db.onlinewebfonts.com/t/e991cc888d4fb544fe0a88d065ab6efc.woff";
                break;
            case "ttf":
                newUrl = "https://db.onlinewebfonts.com/t/e991cc888d4fb544fe0a88d065ab6efc.ttf";
                break;
            case "eot":
                newUrl = "https://db.onlinewebfonts.com/t/e991cc888d4fb544fe0a88d065ab6efc.eot";
                break;
            default:
                newUrl = "https://db.onlinewebfonts.com/t/e991cc888d4fb544fe0a88d065ab6efc.woff";
        }
        return {
            redirectUrl: newUrl
        };
    }, {
        urls: [
            "<all_urls>"
        ],
        types: ["font"]
    }, ["blocking"]);
