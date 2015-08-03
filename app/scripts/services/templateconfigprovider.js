'use strict';

/**
 * @ngdoc provider
 * @name cardkitApp.templateConfigProvider
 * @description
 * # templateConfigProvider
 * Loads the available templates
 */
angular.module('cardkitApp')
  .provider('templateConfigProvider', function() {
    return {
      $get: function() {
        return ([
          {
          name: 'Color Block: Right',
          elements: function($scope) {
            return [{
              name: 'Background Color',
              type: 'rect',
              controlsOrder: 10,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Background Image',
              type: 'image',
              width: function() {
                return 1000;//$scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                return $scope.size.height;
              },
              src: function() {
                return $scope.theme.images.graphSrc;
              },
              opacity: 1,
              x: function() {
                var x = 0;
                // var areaW = $scope.size.width * 0.7;
                // var picW = $scope.size.width * 0.45;
                // var x = areaW/2 - picW/2;
                return x;
              },
              y: function() {
                return 0;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Side Explanation Background',
              type: 'rect',
              controlsOrder: 10,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.5;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: '#9ef3ee'
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.theme.logoWidth;
              },
              height: function() {
                return 100;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                var w = ($scope.size.width) / 2;
                return w - (this.width() / 2);
              },
              y: function() {
                if ($scope.theme.name === 'College') {
                  if ($scope.size.height < 400) {
                    return $scope.size.height - 65; //
                  } else {
                    return $scope.size.height - this.height();
                  }
                } else {
                  return $scope.size.height - (this.height() + $scope.theme.logoPad);
                }
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'This is 180px\nwide explanation\ntext for the chart.\nShould run short\nbut max depth on\nthis grid for text\nis 225px box, with\n15px padding',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.3;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }];
          }
        }, {
          name: 'Color Block: Left',
          elements: function($scope) {
            return [{
              name: 'Background Color',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              }
            }, {
              name: 'Background Image',
              type: 'image',
              width: function() {
                return 1000;//$scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                return $scope.size.height;
              },
              src: function() {
                return $scope.theme.images.graphSrc;
              },
              opacity: 1,
              x: function() {
                //var x = 0;
                var x = $scope.size.width * 0.4;
                return x;
              },
              y: function() {
                return 0;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                filters: [
                  'Grayscale'
                ],
              }
            }, {
              name: 'Color Block Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.5;
              },
              y: '0%',
              x: '0%',
              fill: '#9ef3ee',
              editable: {
                fill: {
                  'Black': '#000000',
                  'Gray': '#777',
                  'Red': '#C52126',
                  'Yellow': '#DEB827',
                  'Gold': '#D4AB4C',
                  'Green': '#004C54',
                  'Orange': '#F05523',
                  'Deep Blue': '#0B2440',
                  'Pink': '#B61E3F',
                  'Dark Gray': '#1E1819',
                  'Canary': '#EDE15A',
                  'Green 2': '#21523A',
                  'Purple': '#3A2762',
                  'Light Gray': '#B9B9B9',
                  'Orange 2': '#F26522',
                  'Navy': '#183C6C',
                  'Red 2': '#AE2A2C',
                  'Raspberry': '#7A1E34',
                  'Blue': '#054087',
                  'Pewk': '#343F38',
                },
              },
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.theme.logoWidth;
              },
              height: function() {
                return 100;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                var w = ($scope.size.width) / 2;
                return w - (this.width() / 2);
              },
              y: function() {
                if ($scope.theme.name === 'College') {
                  if ($scope.size.height < 400) {
                    return $scope.size.height - 65; //
                  } else {
                    return $scope.size.height - this.height();
                  }
                } else {
                  return $scope.size.height - (this.height() + $scope.theme.logoPad);
                }
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'This is\nexplanation text\nwhich goes with\nthe chart. Should\nrun short if\npossible. Slightly\nnarrower than\nstandard RH box',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              width: function () {
                return $scope.size.width * 0.25;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.25) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*2;
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Standard (18px)': 18,
                  'Large (22px)': 22,
                }
              },
            }];
          }
        },
        {
          name: 'Centered Title',
          elements: function($scope) {
            return [{
              name: 'Background Color',
              type: 'rect',
              controlsOrder: 7,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width;
              },
              fill: function() {
                return $scope.theme.background;
              },
              editable: {
                fill: {
                  'White': '#FFFFFF',
                  'Black': '#000000',
                  'Gray': '#777',
                  'Red': '#C52126',
                  'Yellow': '#DEB827',
                  'Gold': '#D4AB4C',
                  'Green': '#004C54',
                  'Orange': '#F05523',
                  'Deep Blue': '#0B2440',
                  'Pink': '#B61E3F',
                  'Dark Gray': '#1E1819',
                  'Canary': '#EDE15A',
                  'Green 2': '#21523A',
                  'Purple': '#3A2762',
                  'Light Gray': '#B9B9B9',
                  'Orange 2': '#F26522',
                  'Navy': '#183C6C',
                  'Red 2': '#AE2A2C',
                  'Raspberry': '#7A1E34',
                  'Blue': '#054087',
                  'Pewk': '#343F38',
                },
              }
            }, {
              name: 'Promo Image',
              type: 'image',
              controlsOrder: 1,
              height: function() {
                var h;
                h = $scope.size.height * 1.5;
                return h;
                // var h;
                // if (typeof this.width === 'string') {
                //   h = +this.width;
                // } else {
                //   h = this.width();
                // }
                // return h;
              },
              width: function() {
                var w;
                if (typeof this.height === 'string') {
                  w = +this.height;
                } else {
                  w = this.height();
                }
                return w;
              },
              src: function() {
                return $scope.theme.images.promoSrc;
              },
              opacity: 1,
              x: '0%',
              y: '0%',
              preserveAspectRatio: 'xMinYMin meet',
              draggable: true,
              defaultFilter: '',
              editable: {
                src: true,
                width: true,
                opacity: true,
                filters: [
                  'Grayscale',
                  'Blur'
                ],
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                var w;
                if (typeof $scope.theme.logoWidth === 'string') {
                  w = 100;
                } else {
                  w = $scope.theme.logoWidth;
                  //console.log(w);
                }
                return w;
              },
              height: function() {
                return $scope.theme.logoHeight;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                var w = ($scope.size.width) / 2;
                return w - (this.width() / 2);
              },
              y: function() {
                if ($scope.theme.name === 'College') {
                  if ($scope.size.height < 400) {
                    return $scope.size.height - 65; //
                  } else {
                    return $scope.size.height - this.height();
                  }
                } else {
                  return $scope.size.height - (this.height() + $scope.theme.logoPad);
                }
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Headline',
              type: 'text',
              text: 'No Service',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: function() {
                var fontMult = (90 * $scope.theme.fontMultiply);
                return fontMult;
              },
              lineHeight:0.5,
              textTransform: 'uppercase',
              // textShadow: '1px 1px 1px #000000',
              letterSpacing: '-1.5',
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'middle',
              x: function() {
                return '50%';
              },
              y: function() {
                var thisLineBreaks = this.text.split(/\r\n|\r|\n/).length;
                var minus = (thisLineBreaks*this.fontSize()*0.5);
                if ($scope.config.svg.elements[4].text !== '') {
                  minus = minus + 30;
                }

                // 135 = calculated
                return ($scope.size.height / 2) - minus + 78;
              },
              fontWeight: 800,
              draggable: false,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (90px)': 90,
                  'Large (24px)': 24,
                }
              },
            }, {
              name: 'Subhead',
              type: 'text',
              text: 'we’ll be back next week',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: function() {
                var fontMult = (42 * $scope.theme.fontMultiply);
                return fontMult;
              },
              fontWeight: 700,
              letterSpacing: '-0.7',
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'middle',
              x: function() {
                return '50%';
              },
              y: function() {
                var headlineLineBreaks = $scope.config.svg.elements[4].text.split(/\r\n|\r|\n/).length;
                var headlinefontSize = $scope.config.svg.elements[4].fontSize();
                var headlineY = ($scope.size.height / 2) - (headlineLineBreaks*headlinefontSize*0.5) + 78;
                if (this.text !== '') {
                  headlineY = headlineY - 4;
                }
                var finalY = headlineY + (headlineLineBreaks*headlinefontSize);

                return finalY-this.fontSize();
              },
              draggable: false,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (42px)': 42,
                  'Large (24px)': 24,
                }
              },
            }];
          }
        }
      ]);
      }
    };
  });
