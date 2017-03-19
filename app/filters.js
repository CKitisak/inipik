function excerpt() {
    return function(text, limit, slug) {
        if (!limit) return text;
        if (text.length <= limit) {
            return text;
        } else {
            slug = slug ? slug : null;
            text = text.substr(0, limit);
            if (slug) {
                text = text + '&hellip; <a href="'+slug+'" class="btn btn-default btn-xs m-l-sm">อ่านต่อ <i class="fa fa-long-arrow-right"></i></a>';
            }
            return text;
        }
    };
}

function momentjs() {
    return function(dateString, format) {
        if (!format) {
            return moment(dateString, 'YYYY-MM-DD HH:mm:ss').twitterLong();
        } else {
            return moment(dateString, 'YYYY-MM-DD HH:mm:ss').format(format);
        }
    };
}

function htmlToPlaintext() {
    return function(text) {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
}

function trustHtml($sce) {
    return function(text) {
        return  text ? $sce.trustAsHtml(text) : '';
    };
}

angular
    .module('inipik')
    .filter('excerpt', excerpt)
    .filter('momentjs', momentjs)
    .filter('htmlToPlaintext', htmlToPlaintext)
    .filter('trustHtml', trustHtml)
