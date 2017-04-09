function FindProxyForURL(url, host) {
    PROXY = "PROXY 125.88.74.122:82"

    // music.163.com via proxy
    if (shExpMatch(host,"music.163.com")) {
        return PROXY;
    }

    // Everything else directly!
    return "DIRECT";
}