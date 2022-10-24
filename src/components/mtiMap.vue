<template>
  <div ref="map" id="map-pane"></div>
</template>

<script>
export default {
  mounted() {
    window.map = new window.mtiMap.Map({
      target: 'map-pane',
      center: [121.47222206127067, 31.173957574763158],
      orientation: [4, -41, 0],
      zoom: 13,
    });
    new window.mtiMap.layer.WebTileLayer(
      {
        id: 'geoq-map',
        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      },
      window.map,
    );
  },
};
</script>

<style lang="less" scoped>
#map-pane {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>