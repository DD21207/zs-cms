<template>
  <div id="editor_page">
    <textarea name="content" id="post"></textarea>
  </div>
</template>
<script>
export default {
  name: 'editor_page',
  data() {
    return {
      editor: "",
      testDemo: "",
    }
  },
  components: {

  },
  filters: {},
  mounted: function() {
    var that = this;
    this.$nextTick(function() {
      KindEditor.ready(function(k) {
        that.editor = k.create('#post', {
          uploadJson: '/uploadImg', //指定上传图片的服务器端程序
          allowUpload: true,
          urlType: 'absolute',
          resizeType: 1, //文本框不可拖动
          minWidth: 375,
          minHeight: 400,
          filterMode: false,
          items: [ //配置工具栏
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste', 'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
            'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
            'anchor', 'link', 'unlink', '|', 'about'
          ],

          afterCreate: function() { //kindeditor创建后，将编辑器的内容设置到原来的textarea控件里
            this.sync();
          },
          afterChange: function() { //编辑器内容发生变化后，将编辑器的内容设置到原来的textarea控件里
            this.sync();
            that.testDemo = document.getElementById('post').value;
          },
          afterBlur: function() { //编辑器聚焦后，将编辑器的内容设置到原来的textarea控件里
            this.sync();
            that.testDemo = document.getElementById('post').value;
          }
        });
      })
    })
  },
  computed: {

  },
  watch: {

  },
  methods: {

  }
}

</script>
<style lang="less">
@import '../assets/less/common.less';

#editor_page {
  border: 0;

 }
</style>
