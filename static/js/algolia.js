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
        hitsPerPage: 20,
    }),

    instantsearch.widgets.searchBox({
        container: '#searchbox',
        autofocus: true,
        searchAsYouType: false,
        placeholder: '按回车搜索',
    }),

    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: `
                <div class="alert alert-light my-3 text-center">
                    无结果：{{ query }}
                </div>`,
            item: `
                <small>
                    {{#helpers.highlight}}{ "attribute": "original" }{{/helpers.highlight}}
                </small>`,
        },
    }),
]);

search.start();
