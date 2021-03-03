const searchClient = algoliasearch('6VF20K32HV', '34df695bf501dd3587fe574a1f6df68a');

const search = instantsearch({
    indexName: 'site',
    searchClient,
    routing: true,
    searchFunction(helper) {
        const container = document.querySelector('#hits');
        container.style.display = helper.state.query === '' ? 'none' : '';
        helper.search();
    },
});

search.addWidgets([
    instantsearch.widgets.poweredBy({
        container: '#powered-by',
    }),

    instantsearch.widgets.configure({
        hitsPerPage: 10,
    }),

    instantsearch.widgets.searchBox({
        container: '#searchbox',
        autofocus: true,
        searchAsYouType: false,
        placeholder: '按回车键执行 ↩︎',
    }),

    // instantsearch.widgets.pagination({
    //     container: '#pagination',
    //     padding: 2,
    //     scrollTo: 'main',
    // }),

    // instantsearch.widgets.stats({
    //     container: '#stats',
    // }),      

    instantsearch.widgets.infiniteHits({
        container: '#hits',
        templates: {
            empty: `
                <div class="alert alert-light my-3 text-center">
                    无匹配的结果：{{ query }}
                </div>`,
            showMoreText: '显示更多',
            item: `
                <span>
                    <a href="{{ url }}" target="_blank">{{ book }}·{{ chapter }} {{ section }} <i class="bi bi-arrow-return-left mr-1"></i></a>
                    {{#helpers.highlight}}{ "attribute": "original" }{{/helpers.highlight}}
                </span>`,
        },
    }),
]);

search.start();
