<template>
<div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <img  width="64" height="64" v-bind:src="seller.avatar">
        </div>
        <div class="content">
             <div class="title">
                 <span class="brand"></span>
                 <span class="name">{{seller.name}}</span>
             </div>
            <div class="description">
                {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div class="support" v-if="seller.supports">
                 <span class="icon"  :class="classMap[seller.supports[0].type]"> </span>
                 <span class="text">{{seller.supports[0].description}}</span>
            </div>
        </div>
        <div  v-if="seller.supports" class="support-count" @click="showDetail">
            <span class="count">{{seller.supports.length}}个</span>
            <i class="icon-keyboard_arrow_right" > </i>
        </div>

    </div>
     <div class="bulletin-wrapper" @click="showDetail">
        <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span><i class="icon-keyboard_arrow_right"> </i>
     </div>
    <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
            <div class="detail-main">
             <h1 class="name">{{seller.name}}</h1>
                <div class="star-wrapper">
                    <star :size="48" :score="seller.score"></star>
                </div>
                <div class="title">
                    <div class="line"></div>
                    <div class="text"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
        <div class="detail-close">
            <i class="icon-close"></i>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star.vue';
    export default{
        props: {
            seller: {
                type: Object
            }
        },
        data () {
         return {
             detailShow: false
         };
        },
        methods: {
           showDetail () {
               this.detailShow = true;
           }
        },
        created ( ) {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
        },
        components: {
            star
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin"
   .header
       color:#fff
       position:relative
       background:rgba(7,17,27,0.3);
       overflow :hidden
      .content-wrapper
          position:relative
          font-size:0
          padding:24px 12px 18px 24px
          .avatar
              display:inline-block
              vertical-align:top
              img
                 border-radius :2px
          .content
              margin-left:16px
              display:inline-block
              .title
                 margin:2px 0 8px 0
                 .brand
                     display:inline-block
                     vertical-align top
                     width: 30px
                     height:18px
                     bg-image('brand')
                     background-size:30px 18px
                     background-repeat :no-repeat
                   .name
                       margin-left: 6px
                       font-size: 16px
                       line-height: 18px
                       font-weight:600

              .description
                  margin-bottom: 10px
                  line-height :12px
                  font-size: 12px
              .support
                  .icon
                      display: inline-block
                      width: 12px
                      height:12px
                      margin-left:5px
                      margin-right :4px
                      vertical-align :top
                      background-size:12px 12px
                      background-repeat :no-repeat
                      &.decrease
                        bg-image('decrease_1')
                      &.discount
                        bg-image('discount_1')
                      &.guarantee
                        bg-image('guarantee_1')
                      &.invoice
                        bg-image('invoice_1')
                      &.special
                        bg-image('special_1')
                  .text
                      color:#fff
                      line-height :12px
                      font-size:10px



          .support-count
              position:absolute
              right: 12px
              padding: 0  8px
              height:24px
              line-height 24px
              bottom :14px
              border-radius 14px
              text-align:center
              background:rgba(0,0,0,0.2)
              .count
                  font-size: 10px
                  vertical-align:top
              .icon-keyboard_arrow_right
                  margin-left:2px
                  font-size: 10px
                  line-height :26px
      .bulletin-wrapper
          height: 28px
          line-height: 28px
          padding:0 22px 0 12px
          white-space :nowrap
          overflow: hidden
          -ms-text-overflow: ellipsis
          text-overflow: ellipsis
          position:relative
          background:rgba(7,17,27,0.2)
          .bulletin-title
              display:inline-block
              height: 12px
              width: 22px
              bg-image ('bulletin')
              background-size :22px 12px
              background-repeat:no-repeat
              margin-top:8px
           .bulletin-text
                font-size: 12px
                font-weight:200
                margin:0 4px
                vertical-align :top
           .icon-keyboard_arrow_right
              position:absolute
              right:12px
              top:8px
      .background
          position:absolute
          left:0
          width:100%
          height:100%
          top:0
          z-index: -1
          filter:blur(10px)

      .detail
          position:fixed
          z-index:100
          top: 0
          left: 0
          width:100%
          height:100%
          overflow:auto
          background: rgba(7,17,27,0.8)
          .detail-wrapper
              min-height:100%
              width:100%
            .detail-main
                margin-top: 64px
                padding-bottom : 64px
                .name
                    line-height: 16px
                    text-align: center
                    font-size: 16px
                    font-width:700
                .star-wrapper
                    margin-top: 18px
                    padding:2px 0
                    text-align: center
                .title
                    display: flex
                    width:80%
                    margin:30px auto 24px auto
          .detail-close
              position:relative
              width: 32px
              height: 32px
              margin:-64px auto 0 auto
              clear:both
              font-size: 32px
</style>
