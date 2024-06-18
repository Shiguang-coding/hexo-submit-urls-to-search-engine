module.exports = function (locals) {
    var log = this.log;
    var config = this.config;
    var submit_condition = config.hexo_submit_urls_to_search_engine.submit_condition
    var count = config.hexo_submit_urls_to_search_engine.count;
    var period = config.hexo_submit_urls_to_search_engine.period;
    // var urlsPath = config.hexo_submit_urls_to_search_engine.txt_path;
    var baiduUrlsPath = config.hexo_submit_urls_to_search_engine.baidu_txt_path;
    var bingUrlsPath = config.hexo_submit_urls_to_search_engine.bing_txt_path;
    var googleUrlsPath = config.hexo_submit_urls_to_search_engine.google_txt_path;
    var cjh_replace = config.hexo_submit_urls_to_search_engine.replace;
    if (submit_condition == 'count') {
        log.info("Generating urls for last " + count + " posts");

        var rootUrl = config.url;
        var baiduUrl = config.hexo_submit_urls_to_search_engine.baidu_host
        var bingUrl = config.hexo_submit_urls_to_search_engine.bing_host
        var googleUrl = config.hexo_submit_urls_to_search_engine.google_host

        var baidu_enabled = config.hexo_submit_urls_to_search_engine.baidu;
        var bing_enabled = config.hexo_submit_urls_to_search_engine.bing;
        var google_enabled = config.hexo_submit_urls_to_search_engine.google;

        log.info("rootUrl:", rootUrl)
       

        // get last posts
        // var urls = [].concat(locals.posts.toArray())
        //     .map(function (post) {
        //         return {
        //             "date": post.updated || post.date,
        //             "permalink": post.permalink
        //         }
        //     })
        //     .sort(function (a, b) {
        //         return b.date - a.date;
        //     })
        //     .slice(0, count)
        //     .map(function (post) {
        //         var cjhLink = post.permalink
        //         if (cjh_replace == 1) {
        //             var find_what = config.hexo_submit_urls_to_search_engine.find_what;
        //             var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
        //             cjhLink = cjhLink.replace(find_what, replace_with);
        //         }
        //         return cjhLink;
        //     })
        //     .join('\n');

        // log.info("Posts urls generated in " + urlsPath + "\n" + urls);


        var result = [];
        if (baidu_enabled) {
            log.info("baiduUrl:", baiduUrl)
            var baiduUrls = [].concat(locals.posts.toArray())
                .map(function (post) {
                    return {
                        "date": post.updated || post.date,
                        "permalink": post.permalink.replace(rootUrl, baiduUrl)
                    }
                })
                .sort(function (a, b) {
                    return b.date - a.date;
                })
                .slice(0, count)
                .map(function (post) {
                    var cjhLink = post.permalink
                    if (cjh_replace == 1) {
                        var find_what = config.hexo_submit_urls_to_search_engine.find_what;
                        var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
                        cjhLink = cjhLink.replace(find_what, replace_with);
                    }
                    return cjhLink;
                })
                .join('\n');

            log.info("Posts baiduUrls generated in " + baiduUrlsPath + "\n" + baiduUrls);
            result.push({
                path: baiduUrlsPath,
                data: baiduUrls
            });
        }
        if (bing_enabled) {
            log.info("bingUrl:", bingUrl)
            var bingUrls = [].concat(locals.posts.toArray())
                .map(function (post) {
                    return {
                        "date": post.updated || post.date,
                        "permalink": post.permalink.replace(rootUrl, bingUrl)
                    }
                })
                .sort(function (a, b) {
                    return b.date - a.date;
                })
                .slice(0, count)
                .map(function (post) {
                    var cjhLink = post.permalink
                    if (cjh_replace == 1) {
                        var find_what = config.hexo_submit_urls_to_search_engine.find_what;
                        var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
                        cjhLink = cjhLink.replace(find_what, replace_with);
                    }
                    return cjhLink;
                })
                .join('\n');

            log.info("Posts bingUrls generated in " + bingUrlsPath + "\n" + bingUrls);
            result.push({
                path: bingUrlsPath,
                data: bingUrls
            });
        }

        if (google_enabled) {
            log.info("googleUrl:", googleUrl)
            var googleUrls = [].concat(locals.posts.toArray())
                .map(function (post) {
                    return {
                        "date": post.updated || post.date,
                        "permalink": post.permalink.replace(rootUrl, googleUrl)
                    }
                })
                .sort(function (a, b) {
                    return b.date - a.date;
                })
                .slice(0, count)
                .map(function (post) {
                    var cjhLink = post.permalink
                    if (cjh_replace == 1) {
                        var find_what = config.hexo_submit_urls_to_search_engine.find_what;
                        var replace_with = config.hexo_submit_urls_to_search_engine.replace_with;
                        cjhLink = cjhLink.replace(find_what, replace_with);
                    }
                    return cjhLink;
                })
                .join('\n');

            log.info("Posts googleUrls generated in " + googleUrlsPath + "\n" + googleUrls);
            result.push({
                path: googleUrlsPath,
                data: googleUrls
            });
        }

        return result;


    } else if (submit_condition == 'period') {
        log.info("Period: " + period + ", but only supports count now");
    } else {
        log.info("Please check config.hexo_submit_urls_to_search_engine.submit_condition!!!");
    }
};