
// 상품 진열
let objJson;
let sortedNewest;
let sortedHighestPrice;
let sortedLowestPrice;
let sortedProducts;

async function load() {
    const data = await fetch('./images.json');
    objJson = await data.json();

    const allGames = objJson;
    const leagueOfLegends = objJson.filter(obj => obj.game == `리그오브레전드`);
    const pubg = objJson.filter(obj => obj.game == `배틀그라운드`);
    const pokemon = objJson.filter(obj => obj.game == `포켓몬스터`);
    const laTale = objJson.filter(obj => obj.game == `라테일`);
    const overWatch = objJson.filter(obj => obj.game == `오버워치`);
    const worldOfWarcraft = objJson.filter(obj => obj.game == `월드오브워크래프트`);
    const others = objJson.filter(obj => obj.game != `리그오브레전드` && obj.game != `배틀그라운드` && obj.game != `포켓몬스터` && obj.game != `라테일` && obj.game != `오버워치` && obj.game != `월드오브워크래프트`);

    // 상품 개수 표시

    $('.items-count').text(`Total Items: ${worldOfWarcraft.length}`);

    // 상품 정렬

    sortedNewest = Array.from(worldOfWarcraft).sort(function (a, b) {
        return b['id'] - a['id']
    })

    sortedHighestPrice = Array.from(worldOfWarcraft).sort(function (a, b) {
        return b['price'] - a['price']
    })

    sortedLowestPrice = Array.from(worldOfWarcraft).sort(function (a, b) {
        return a['price'] - b['price']
    })

    sortedProducts = sortedNewest;

    $('#sortNew').click(function () {
        $('#sortBtn').empty().append('<span class="newest">신상품 순</span>');
        $('.products-wrapper').empty();
        sortedProducts = sortedNewest;
        console.log(sortedProducts)

        for (i = 0; i < 20; i++) {
            let productSrc = "./" + sortedProducts[i]['src'].split('/').slice([2]).join('/');
            let productGame = sortedProducts[i]['game'];
            let productPrice = sortedProducts[i]['price'];
            let productName = sortedProducts[i]['goodsName'];

            $('.products-wrapper').append(`<a href="./219.html" class="product-item-link" class="product-item-link" target="_blank">
                 <div class="product-item">
                     <img src="${productSrc}" alt="${productGame}"
                         class="product-item-img">
                     <div class="product-info">
                        <div class="product-item-game">${productGame}</div>
                        <div class="product-item-name">${productName}</div>
                        <div class="product-item-price">${productPrice}원</div>
                    </div>
                </div>
            </a>`);
        };
    });

    $('#sortHighPrice').click(function () {
        $('#sortBtn').empty().append('<span class="highest-price">높은가격 순</span>');
        $('.products-wrapper').empty();
        sortedProducts = sortedHighestPrice;
        console.log(sortedProducts)

        for (i = 0; i < 20; i++) {
            let productSrc = "./" + sortedProducts[i]['src'].split('/').slice([2]).join('/');
            let productGame = sortedProducts[i]['game'];
            let productPrice = sortedProducts[i]['price'];
            let productName = sortedProducts[i]['goodsName'];

            $('.products-wrapper').append(`<a href="./219.html" class="product-item-link" class="product-item-link" target="_blank">
                 <div class="product-item">
                     <img src="${productSrc}" alt="${productGame}"
                         class="product-item-img">
                     <div class="product-info">
                        <div class="product-item-game">${productGame}</div>
                        <div class="product-item-name">${productName}</div>
                        <div class="product-item-price">${productPrice}원</div>
                    </div>
                </div>
            </a>`);
        };
    });

    $('#sortLowPrice').click(function () {
        $('#sortBtn').empty().append('<span class="lowest-price">낮은가격 순</span>');
        $('.products-wrapper').empty();
        sortedProducts = sortedLowestPrice;
        console.log(sortedProducts)

        for (i = 0; i < 20; i++) {
            let productSrc = "./" + sortedProducts[i]['src'].split('/').slice([2]).join('/');
            let productGame = sortedProducts[i]['game'];
            let productPrice = sortedProducts[i]['price'];
            let productName = sortedProducts[i]['goodsName'];

            $('.products-wrapper').append(`<a href="./219.html" class="product-item-link" class="product-item-link" target="_blank">
                 <div class="product-item">
                     <img src="${productSrc}" alt="${productGame}"
                         class="product-item-img">
                     <div class="product-info">
                        <div class="product-item-game">${productGame}</div>
                        <div class="product-item-name">${productName}</div>
                        <div class="product-item-price">${productPrice}원</div>
                    </div>
                </div>
            </a>`);
        };
    });

    // 배열 길이에 맞게 페이지네이션 번호 생성
    if (sortedProducts.length > 20) {
        let numberOfPages = Math.ceil(sortedProducts.length / 20);
        for (i = numberOfPages; i > 0; i--) {
            $('#prevBtn').after(`<li id="page${i}" class="page-item" onClick="showProducts(${i})"><a class="page-link">${i}</li>`);
        };
    } else {
        $('#prevBtn').after(`<li id="page1" class="page-item" onClick="showProducts(1)"><a class="page-link" href="">1</a></li>`);
    }

    // 페이지 로드시 기존 sortedProducts 값 (Newest) 기준으로 상품 나열
    $(function () {
        for (i = 0; i < 20; i++) {
            let productSrc = "./" + sortedProducts[i]['src'].split('/').slice([2]).join('/');
            let productGame = sortedProducts[i]['game'];
            let productPrice = sortedProducts[i]['price'];
            let productName = sortedProducts[i]['goodsName'];

            $('.products-wrapper').append(`<a href="./219.html" class="product-item-link" class="product-item-link" target="_blank">
                 <div class="product-item">
                     <img src="${productSrc}" alt="${productGame}"
                         class="product-item-img">
                     <div class="product-info">
                        <div class="product-item-game">${productGame}</div>
                        <div class="product-item-name">${productName}</div>
                        <div class="product-item-price">${productPrice}원</div>
                    </div>
                </div>
            </a>`);
        };
    });

};
load();
function showProducts(range) {
        let endingID = range * 20;  //20
        let startingID = endingID - 20;
        console.log(startingID)

        window.scrollTo(0, 600);

        $('.products-wrapper').empty();

        for (i = startingID; i < endingID; i++) {
            let productSrc = "./" + sortedProducts[i]['src'].split('/').slice([2]).join('/');
            let productGame = sortedProducts[i]['game'];
            let productPrice = sortedProducts[i]['price'];
            let productName = sortedProducts[i]['goodsName'];

            $('.products-wrapper').append(`<a href="./219.html" class="product-item-link" class="product-item-link" target="_blank">
                 <div class="product-item">
                     <img src="${productSrc}" alt="${productGame}"
                         class="product-item-img">
                     <div class="product-info">
                        <div class="product-item-game">${productGame}</div>
                        <div class="product-item-name">${productName}</div>
                        <div class="product-item-price">${productPrice}원</div>
                    </div>
                </div>
            </a>`);
        };
    }
