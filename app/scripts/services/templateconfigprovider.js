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
        return ([{
          name: 'Quote',
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
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Credit: Insert name here',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: 15,
              y: 250,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Headline',
              type: 'text',
              text: 'Edit this text, and drag it around.\n\nYou can upload your own background\nimage, logo, and change the Color of the text\ntoo.',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 45,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        }, {
          name: 'Quote Big',
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
                return $scope.size.width;
              },
              controlsOrder: 3,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: '',
              opacity: 0.45,
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
            },{
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize + 3);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Pastor Steve',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                var headlineLineBreaks = $scope.config.svg.elements[6].text.split(/\r\n|\r|\n/).length;

                return $scope.size.gridSize*4 + (headlineLineBreaks*$scope.config.svg.elements[6].fontSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '“Our goal as\nfollowers of Jesus\nis to be like him”',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 60,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*4;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (50px)': 50,
                  'Standard (60px)': 60,
                  'Large (72px)': 72,
                },
              },
            }];
          }
        },{
          name: 'Quote With Headshot',
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
              name: 'Image',
              type: 'image',
              width: 300,
              controlsOrder: 2,
              height: function() {
                return +this.width;
              },
              src: function() {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function() {
                var w = (+this.width);
                return $scope.size.width - (w + $scope.size.gridSize);
              },
              y: function() {
                return $scope.size.gridSize;
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
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 4,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize + 10);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Janan Ganesh on why\nLabour is Terrible',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: 15,
              y: 235,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Headline',
              type: 'text',
              text: 'Friendship is constant\nin all other things save in\nthe office and affairs of\nlove: Therefore, all hearts\nin love use their own',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 45,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        }, {
          name: 'Big Number',
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
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Cross Reference Text',
              type: 'text',
              text: 'Read more at: Insert name here',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }, {
              name: 'Big Number',
              type: 'text',
              text: '100',
              fill: function() {
                return $scope.theme.highlightColor;
              },
              controlsOrder: 1,
              fontSize: 100,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              letterSpacing: function() {
                if (this.fontSize > 100 && $scope.theme.headlineFont === 'Gotham') {
                  return '-0.08em';
                } else if ($scope.theme.headlineFont === 'Gotham'){
                  return '-0.05em';
                } else {
                  return 0;
                }
              },
              textAnchor: 'start',
              x: 15,
              y: function() {
                if(this.fontSize === 100) {
                  return this.fontSize;
                } else if (this.fontSize === 140){
                  return this.fontSize*0.9;
                } else if (this.fontSize === 400){
                    return 299;
                } else {
                  return this.fontSize*0.765;
                }
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Standard': 100,
                  'Bigger': 140,
                  'Massive': 300,
                  'Super Massive': 400,
                }
              },
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Explanatory text goes here like this\nand like this which is 32/34, over two\nor three lines',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              x: function() {
                if ($scope.config.svg.elements[4].fontSize > 301 && $scope.theme.headlineFont === 'Gotham') {
                  return 190;
                } else if ($scope.config.svg.elements[4].fontSize > 299 && $scope.theme.headlineFont === 'Gotham') {
                    return 170;
                } else {
                  return 15;
                }
              },
              y: function() {
                if ($scope.config.svg.elements[4].fontSize > 301 && $scope.theme.headlineFont === 'Gotham') {
                  return 150;
                } else if ($scope.config.svg.elements[4].fontSize > 299 && $scope.theme.headlineFont === 'Gotham') {
                  return 230;
                } else {
                  return 160;
                }
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (32px)': 32,
                  'Large (34px)': 34,
                  'Larger (42px)': 42,
                  'Larger (64px)': 64,
                }
              },
            }];
          }
        }, {
          name: 'Illustration',
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
              fill: '#ffffff'
            }, {
              name: 'Illustration',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.7 ;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                return h;
              },
              src: function() {
                return $scope.theme.images.illustrationSrc;
              },
              opacity: 1,
              x: 0,
              y: function() {
                return $scope.size.gridSize*2;
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
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 10,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize);
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Ref Text',
              type: 'text',
              text: 'FT.COM/\nCOMPANIES',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true
              }
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
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                if (h > ($scope.size.height-$scope.size.gridSize*2)) {
                  h = $scope.size.height-$scope.size.gridSize*2;
                }
                return h;
              },
              src: function() {
                return $scope.theme.images.graphSrc;
              },
              opacity: 1,
              x: function() {

                var areaW = $scope.size.width * 0.7;
                var picW = $scope.size.width * 0.45;
                var x = areaW/2 - picW/2;

                return x;
              },
              y: function() {
                return $scope.size.gridSize;
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
                return 224;
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
                return $scope.size.height - this.height();
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
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }

                if (h > ($scope.size.height-$scope.size.gridSize*2)) {
                  h = $scope.size.height-$scope.size.gridSize*2;
                }
                return h;
              },
              src: function() {
                return $scope.theme.images.graphWideSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize;
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
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return 224;
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
                return $scope.size.height - this.height();
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
        },{
          name: 'College Insta',
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
              width: function() {
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
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
                return 224;
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
                return $scope.size.height - this.height();
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
              fontSize: 90,
              lineHeight:0.5,
              textTransform: 'uppercase',
              textShadow: '1px 1px 1px #000000',
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
                var minus = (thisLineBreaks*this.fontSize*0.5);
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
              fontSize: 42,
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
                var headlinefontSize = $scope.config.svg.elements[4].fontSize;
                var headlineY = ($scope.size.height / 2) - (headlineLineBreaks*headlinefontSize*0.5) + 78;
                if (this.text !== '') {
                  headlineY = headlineY - 4;
                }
                var finalY = headlineY + (headlineLineBreaks*headlinefontSize);

                return finalY-this.fontSize;
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
        }, {
          name: 'Promo A',
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
              name: 'Promo Image',
              type: 'image',
              width: function() {
                return $scope.size.width;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
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
                filters: [
                  'Grayscale',
                  'Blur'
                ],
              }
            }, {
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: function() {
                return $scope.size.height - this.height();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize) / 2;
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Call to Action',
              type: 'text',
              text: 'Promo A please go to northpointe.org/messages',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - 3 - ($scope.size.gridSize);
              },
              fontWeight: 500,
              draggable: false,
              editable: {
                text: true,
                fontSize: {
                  'Small (18px)': 18,
                  'Standard (22px)': 22,
                  'Large (24px)': 24,
                }
              },
            }];
          }
        }, {
          name: 'Promo B',
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
              name: 'Promo Image',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.75;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
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
                return $scope.size.width * 0.25;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: function() {
                return $scope.theme.xrefBackground;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 6,
              width: function() {
                return $scope.size.width *0.2;
              },
              height: function() {
                return $scope.size.width *0.2;
              },
              src: function() {
                return $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.25) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - this.height() - $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'Promo B\nplease go\nto ft.com/\nsomething-\ninteresting',
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
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (28px)': 28,
                }
              },
            }];
          }
        }, {
          name: 'On The Podcast',
          elements: function($scope) {
            return [{
              name: 'Background Color',
              type: 'rect',
              controlsOrder: 17,
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
              name: 'Header Background',
              type: 'rect',
              controlsOrder: 15,
              height: function() {
                return $scope.size.gridSize * 3;
              },
              width: function() {
                return $scope.size.width;
              },
              y: 0,
              fill: function() {
                return $scope.theme.highlightColor;
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 16,
              width: function() {
                return $scope.size.gridSize * 2;
              },
              height: function() {
                return $scope.size.gridSize * 2;
              },
              src: function() {
                return $scope.theme.images.logoAltSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 3);
              },
              y: function() {
                var h = ($scope.size.gridSize);
                return $scope.size.height - (this.height() + h);
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Header Text',
              type: 'text',
              text: 'On the podcast',
              textTransform: 'uppercase',
              controlsOrder: 1,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
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
                  'Large (28px)': 28,
                },
              },
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Name here in caps',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                var headlineLineBreaks = $scope.config.svg.elements[6].text.split(/\r\n|\r|\n/).length;
                return $scope.size.gridSize*5 + this.fontSize + (headlineLineBreaks*$scope.config.svg.elements[6].fontSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (18px)': 22,
                }
              },
            }, {
              name: 'Read more',
              type: 'text',
              text: 'Download the podcast at northpointe.org/iTunes',
              controlsOrder: 4,
              fill: function() {
                return $scope.theme.highlightColor;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                var headlineLineBreaks = $scope.config.svg.elements[6].text.split(/\r\n|\r|\n/).length;
                var nameLineBreaks = $scope.config.svg.elements[4].text.split(/\r\n|\r|\n/).length;

                return $scope.size.gridSize*8 + this.fontSize + (headlineLineBreaks*$scope.config.svg.elements[6].fontSize) + (nameLineBreaks*$scope.config.svg.elements[4].fontSize);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Standard (18px)': 18,
                  'Large (18px)': 22,
                }
              },
            }, {
              name: 'Quote',
              type: 'text',
              text: '‘This would be a big podcast\nquote which looks like this and\ngoes here with dark logo square’',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 2,
              fontSize: 44,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.gridSize*6;
              },
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (32px)': 32,
                  'Twitter (38px)': 38,
                  'Standard (44px)': 44,
                  'Large (50px)': 50,
                },
              },
            }];
          }
        },{
          name: 'NorthPointe.org -- Quote With Headshot',
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
              name: 'Image',
              type: 'image',
              width: 300,
              controlsOrder: 2,
              height: function() {
                return +this.width;
              },
              src: function() {
                return $scope.theme.images.headshotSrc || '';
              },
              opacity: 1,
              x: function() {
                var w = (+this.width);
                return $scope.size.width - (w + $scope.size.gridSize);
              },
              y: function() {
                return $scope.size.gridSize;
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
              name: 'Cross Reference Background',
              type: 'rect',
              controlsOrder: 5,
              height: function() {
                return $scope.size.gridSize * 3 + 5;
              },
              width: function() {
                return $scope.size.width + 10;
              },
              x: -5,
              y: function() {
                return $scope.size.height - this.height() + 5;
              },
              fill: function() {
                return $scope.theme.background;
              },
              stroke: function() {
                return $scope.theme.quote;
              }
            }, {
              name: 'Logo',
              type: 'text',
              text: function() {
                return $scope.theme.xrefText || 'Northpointe.org';
              },
              controlsOrder: 4,
              fill: function() {
                return $scope.theme.xrefBackground;
              },
              fontSize: 28,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Credit',
              type: 'text',
              text: 'Janan Ganesh on why\nLabour is Terrible',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: 22,
              fontFamily: function() {
                return $scope.theme.creditFont;
              },
              textAnchor: 'start',
              textTransform: 'uppercase',
              x: 15,
              y: 235,
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (16px)': 16,
                  'Large (22px)': 22,
                }
              },
            }, {
              name: 'Headline',
              type: 'text',
              text: 'Friendship is constant\nin all other things save in\nthe office and affairs of\nlove: Therefore, all hearts\nin love use their own',
              fill: function() {
                return $scope.theme.quote;
              },
              controlsOrder: 1,
              fontSize: 32,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: 15,
              y: 45,
              fontWeight: 600,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (26px)': 26,
                  'Standard (32px)': 32,
                  'Large (40px)': 40,
                  'X-Large (50px)': 50,
                },
              },
            }];
          }
        },{
          name: 'NorthPointe.org -- Event Sidebar',
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
              name: 'Image',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: '',
              opacity: 1,
              x: '0%',
              y: '0%',
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
              name: 'Ministry BG Color',
              type: 'rect',
              controlsOrder: 10,
              height: function() {
                return $scope.size.height;
              },
              width: function() {
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: 'rgb(30,75,115)',
              editable: {
                fill: {
                  'All Church': '#000000',
                  'Men': '#777',
                  'Women': '#C52126',
                  'College': '#DEB827',
                  'Students': '#DEB827',
                  'Kids': '#DEB827',
                },
              }
            }, {
              name: 'Logo',
              type: 'image',
              controlsOrder: 10,
              width: function() {
                return $scope.size.width * 0.3 - ($scope.size.gridSize * 2);
              },
              height: function() {
                return $scope.size.gridSize * 4;
              },
              src: function() {
                return $scope.theme.images.weekendSrc || $scope.theme.images.logoSrc;
              },
              opacity: 1,
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize;
              },
              preserveAspectRatio: 'xMinYMin meet',
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'LEARN MORE AT\nNORTHPOINTE.ORG',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              }
            }, {
              name: 'Explanatory Text',
              type: 'text',
              text: 'It would be great\nto get this option\nfor the magazine\njust because it’s\ncloser to the way\nthey do things',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'financierdisplayweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*7;
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
        },{
          name: 'NorthPointe.org -- Recipe Card',
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
              name: 'Recipe Image',
              type: 'image',
              width: function() {
                return $scope.size.width * 0.6;
              },
              controlsOrder: 1,
              height: function() {
                var h;
                if (typeof this.width === 'string') {
                  h = +this.width;
                } else {
                  h = this.width();
                }
                return h;
              },
              src: '',
              opacity: 1,
              x: '0%',
              y: '0%',
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
                return $scope.size.width * 0.3;
              },
              y: '0%',
              x: function() {
                return $scope.size.width - this.width();
              },
              fill: 'rgb(67,20,95)'
            }, {
              name: 'Logo',
              type: 'text',
              text: 'Northpointe.org',
              fill: 'white',
              fontSize: 28,
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'start',
              x: function() {
                return $scope.size.width - ($scope.size.gridSize * 11);
              },
              y: function() {
                return ($scope.size.gridSize * 2);
              },
              fontWeight: 600,
              draggable: false
            }, {
              name: 'Reference Text',
              type: 'text',
              text: 'READ THE RECIPE AT\nFT.COM/XXX',
              controlsOrder: 3,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 18,
              fontFamily: function() {
                return $scope.theme.xrefFont;
              },
              textAnchor: 'start',
              x: function() {
                var w = $scope.size.width;
                return (w - w*0.3) + $scope.size.gridSize;
              },
              y: function() {
                return $scope.size.height - ($scope.size.gridSize*2 + 2);
              },
              fontWeight: 500,
              draggable: true,
              editable: {
                text: true
              }
            }, {
              name: 'Recipe Name',
              type: 'text',
              text: 'Steak and\nkidney pudding',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'metricweb',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*6.8;
              },
              fontWeight: 400,
              draggable: true,
              editable: {
                text: true,
                fontSize: {
                  'Small (22px)': 22,
                  'Standard (24px)': 24,
                  'Large (34px)': 34,
                }
              },
            }, {
              name: 'Author Name',
              type: 'text',
              text: 'Rowley Leigh',
              controlsOrder: 2,
              fill: function() {
                return $scope.theme.xref;
              },
              fontSize: 24,
              fontFamily: 'financierdisplayweb',
              fontStyle: 'italic',
              textAnchor: 'start',
              width: function () {
                return $scope.size.gridSize * 12;
              },
              x: function() {
                var w = $scope.size.width;
                return (w - $scope.size.gridSize * 11);
              },
              y: function() {
                return $scope.size.gridSize*5.25;
              },
              fontWeight: 300,
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
        }
        ]);
      }
    };
  });
