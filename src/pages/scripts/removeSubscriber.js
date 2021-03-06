(function() {
    var subscriberRemove = $('.subscriber_header__close');
    subscriberRemove.on('click', removeSubscriber);

    function removeSubscriber() {
        var subscriber = $(this).closest('.subscriber');
        var subscriberId = subscriber.find('.subscriber_id').val();
        var orderId = subscriber.closest('.session').find('.session_id').val();

        $.ajax({
            data: {
                subscriberId: subscriberId,
                orderId: orderId
            },
            method: 'post',
            url: '/removeSubscriber'
        }).done(function () {

                var subscribers = subscriber.closest('.session').find('.session__main .subscriber');

            subscribers.each(function () {
                if (subscriberId + '' == $(this).find('.subscriber_id').val() + '') $(this).remove();
            });

            subscriber.off('click', removeSubscriber);
            subscriber.remove();
            subscriber.on('click', removeSubscriber);
        });
        return false;
    }
})();
