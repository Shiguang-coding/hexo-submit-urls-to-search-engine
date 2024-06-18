
# hexo-submit-urls-to-search-engine
> forked from [cjh0613/hexo-submit-urls-to-search-engine](https://github.com/cjh0613/hexo-submit-urls-to-search-engine)

## 修改说明

由于我往不同站长平台推送的域名不相同，推送Url时发现域名始终是 `_config.yml` 中配置的 `url` ，我希望最终生成的链接根据配置的host自动拼接，以解决url与要推送的站点域名不相同时推送失败的问题。

做了以下调整

1. 根据是否需要推送配置，生成文件时自动判断是否需要生成相应文件

   如配置 ` baidu: 1` 时才生成`baidu_submit_urls.txt`

2. 根据各站点配置的host生成最终推送的url链接的域名

   如配置 `baidu_host: https://blog.shiguang88.icu`时生成的链接地址为：`https://blog.shiguang88.icu/xxx/xxxx`

问题详见 [Issues #23](https://github.com/cjh0613/hexo-submit-urls-to-search-engine/issues/23)

## 使用说明

> 更多详细配置说明可参考[中文详细文档](https://cjh0613.com/20200603HexoSubmitUrlsToSearchEngine.html)

修改原配置

```yaml
hexo_submit_urls_to_search_engine:
  txt_path: submit_urls.txt ## 文本文档名， 需要推送的链接会保存在此文本文档里
```

调整为

```yaml
hexo_submit_urls_to_search_engine:
  baidu_txt_path: baidu_submit_urls.txt
  bing_txt_path: bing_submit_urls.txt
  google_txt_path: google_submit_urls.txt
```

