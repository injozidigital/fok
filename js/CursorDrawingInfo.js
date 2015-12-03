/**
 * Created by Steinburch on 12/2/15.
 */

var CursorDrawingInfo = new function (){
//CURSOR DRAWING INFO
    this.svgDatacube = {
        "cube": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 59.8 L 50.4 1.8",
                    "duration": 400
                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 400
                },
                //9
                {
                    "path": "M 50.4 59.8 L 50.4 116.8",
                    "duration": 400
                },
                //7
                {
                    "path": "M 99.2 30.4 L 99.2 88.4",
                    "duration": 400,
                    "delay": 400

                },
                //4
                {
                    "path": "M 1.6 30.4 L 1.6 88.4",
                    "duration": 400,
                    "delay": 400
                },


                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400,
                    "delay": 800
                },

                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400,
                    "delay": 800
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400,
                    "delay": 800
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400,
                    "delay": 800
                },


            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataUp = {
        "up": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 59.8 L 50.4 1.8",
                    "duration": 400
                },
                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400,
                    "delay": 400
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400,
                    "delay": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataBackUp = {
        "backup": {
            "strokepath": [
                //2
                {
                    "path": "M 50.4 1.8 L 50.4  59.8",
                    "duration": 400,
                    "delay": 400
                },
                //3
                {
                    "path": "M 99.2 30.4 L 50.4 1.8",
                    "duration": 400
                },
                //1
                {
                    "path": "M 1.6 30.4 L 50.4 1.8",
                    "duration": 400
                }
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataDown = {
        "down": {
            "strokepath": [
                //9
                {
                    "path": "M 50.4 59.8 L 50.4 116.8",
                    "duration": 400
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400,
                    "delay": 400
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400,
                    "delay": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataBackDown = {
        "backdown": {
            "strokepath": [
                //11
                {
                    "path": "M 1.6 88.4 L 50.4 117",
                    "duration": 400
                },
                //12
                {
                    "path": "M 99.2 88.4 L 50.4 117",
                    "duration": 400
                },
                //9
                {
                    "path": "M 50.4 116.8 L 50.4 59.8",
                    "duration": 400,
                    "delay": 400
                }
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataMenu = {
        "menu": {
            "strokepath": [
                //3
                {
                    "path": "M 50.4 1.8 L 99.2 30.4",
                    "duration": 400
                },
                //1
                {
                    "path": "M 50.4 1.8 L 1.6 30.4",
                    "duration": 400
                },
                //11
                {
                    "path": "M 50.4 117 L 1.6 88.4",
                    "duration": 400
                },
                //12
                {
                    "path": "M 50.4 117 L 99.2 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400,

                },
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400,

                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataEx = {
        "ex": {
            "strokepath": [
                //10
                {
                    "path": "M 50.4 59.8 L 99.2 88.4",
                    "duration": 400
                },
                //8
                {
                    "path": "M 50.4 59.8 L 1.6 88.4",
                    "duration": 400
                },
                //5
                {
                    "path": "M 50.4 59.8 L 1.6 30.4",
                    "duration": 400
                },
                //6
                {
                    "path": "M 50.4 59 L 99.2 30.4",
                    "duration": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
    this.svgDataBackEx = {
        "backex": {
            "strokepath": [
                //10
                {
                    "path": "M 99.2 88.4 L 50.4 59.8",
                    "duration": 400
                },
                //8
                {
                    "path": "M 1.6 88.4 L 50.4 59.8",
                    "duration": 400
                },
                //5
                {
                    "path": "M 1.6 30.4 L 50.4 59.8",
                    "duration": 400
                },
                //6
                {
                    "path": "M 99.2 30.4 L 50.4 59",
                    "duration": 400
                },
            ],
            "dimensions": {
                "width": 101,
                "height": 120
            }
        }
    };
}