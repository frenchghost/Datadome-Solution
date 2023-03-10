const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

    async function cookieGen(domain) {
        const response = await fetch('https://api-js.datadome.co/js/', {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'x-forwarded-for': `${Math.floor(Math.random() * 90 + 10)}.${Math.floor(Math.random() * 90 + 10)}.${Math.floor(Math.random() * 90 + 10)}`,
                'Content-type': 'application/x-www-form-urlencoded',
                'Host': 'api-js.datadome.co',
                'Origin': domain,
                'Referer': domain,
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
            },
            'body': new URLSearchParams({
                'ddv': '4.6.0',
                'eventCounters': [],
                'jsType': 'ch',
                'ddk': 'A55FBF4311ED6F1BF9911EB71931D5',
                'events': [],
                'request': '%2F',
                'responsePage': 'origin',
                'cid': 'null',
                'dddomain': domain,
                'Referer': '',
                'jsData': JSON.stringify({
                    "ttst": `${Math.floor(Math.random() * 90 + 10)}.${Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000}`,
                    "ifov": false,
                    "tagpu": `${Math.floor(Math.random() * 90 + 10)}.${Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000}`,
                    "glvd": "Google Inc. (NVIDIA)",
                    "glrd": "ANGLE (NVIDIA, NVIDIA GeForce GTX 1660 SUPER Direct3D11 vs_5_0 ps_5_0, D3D11)",
                    "hc": 16,
                    "br_oh": 1040,
                    "br_ow": 1920,
                    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                    "wbd": false,
                    "wdif": false,
                    "wdifrm": false,
                    "npmtm": false,
                    "br_h": 969,
                    "br_w": 963,
                    "nddc": 1,
                    "rs_h": 1080,
                    "rs_w": 1920,
                    "rs_cd": 24,
                    "phe": false,
                    "nm": false,
                    "jsf": false,
                    "lg": "en-US",
                    "pr": 1,
                    "ars_h": 1040,
                    "ars_w": 1920,
                    "tz": 480,
                    "str_ss": true,
                    "str_ls": true,
                    "str_idb": true,
                    "str_odb": true,
                    "plgod": false,
                    "plg": Math.floor(Math.random() * 10) + 5,
                    "plgne": true,
                    "plgre": true,
                    "plgof": false,
                    "plggt": false,
                    "pltod": false,
                    "hcovdr": false,
                    "hcovdr2": false,
                    "plovdr": false,
                    "plovdr2": false,
                    "ftsovdr": false,
                    "ftsovdr2": false,
                    "lb": false,
                    "eva": 33,
                    "lo": false,
                    "ts_mtp": 0,
                    "ts_tec": false,
                    "ts_tsa": false,
                    "vnd": "Google Inc.",
                    "bid": "NA",
                    "mmt": "application/pdf,text/pdf",
                    "plu": "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
                    "hdn": false,
                    "awe": false,
                    "geb": false,
                    "dat": false,
                    "med": "defined",
                    "aco": "probably",
                    "acots": false,
                    "acmp": "probably",
                    "acmpts": true,
                    "acw": "probably",
                    "acwts": false,
                    "acma": "maybe",
                    "acmats": false,
                    "acaa": "probably",
                    "acaats": true,
                    "ac3": "",
                    "ac3ts": false,
                    "acf": "probably",
                    "acfts": false,
                    "acmp4": "maybe",
                    "acmp4ts": false,
                    "acmp3": "probably",
                    "acmp3ts": false,
                    "acwm": "maybe",
                    "acwmts": false,
                    "ocpt": false,
                    "vco": "probably",
                    "vcots": false,
                    "vch": "probably",
                    "vchts": true,
                    "vcw": "probably",
                    "vcwts": true,
                    "vc3": "maybe",
                    "vc3ts": false,
                    "vcmp": "",
                    "vcmpts": false,
                    "vcq": "",
                    "vcqts": false,
                    "vc1": "probably",
                    "vc1ts": true,
                    "dvm": 8,
                    "sqt": false,
                    "so": "landscape-primary",
                    "wdw": true,
                    "cokys": "bG9hZFRpbWVzY3NpYXBwL=",
                    "ecpc": false,
                    "lgs": true,
                    "lgsod": false,
                    "psn": true,
                    "edp": true,
                    "addt": true,
                    "wsdc": true,
                    "ccsr": true,
                    "nuad": true,
                    "bcda": false,
                    "idn": true,
                    "capi": false,
                    "svde": false,
                    "vpbq": true,
                    "ucdv": false,
                    "spwn": false,
                    "emt": false,
                    "bfr": false,
                    "dbov": false,
                    "prm": true,
                    "tzp": "America/Los_Angeles",
                    "cvs": true,
                    "usb": "defined",
                    "jset": Math.floor(1000000000 + Math.random() * 9000000000)
                }),
            }).toString(),
        });


        const resdata = await response.text();
        let cookie = resdata.toString().substring(24, resdata.length - 2);
        return {
            'raw': cookie,
            'cookie': cookie.split(';')[0],
            'value': cookie.split(';')[0].split('=')[1],
        }
    }
    module.exports = {cookieGen};