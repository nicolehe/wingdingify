chrome.webRequest.onBeforeRequest.addListener(
    function(data) {
        console.log(data.timeStamp);
        var fontUrl = data.url;
        console.log(fontUrl);
        var split = fontUrl.split(".");
        var extension = split[split.length - 1];
        var newUrl;

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
