"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesLine = exports.SeriesLineField = exports.createSeriesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SeriesLine.build]] instead.
 */
function createSeriesLine(json) {
    return SeriesLine.build(json);
}
exports.createSeriesLine = createSeriesLine;
/**
 * SeriesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SeriesLineField = /** @class */ (function (_super) {
    __extends(SeriesLineField, _super);
    function SeriesLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SeriesLine.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.prefix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.prefix = new v4_1.ComplexTypeStringPropertyField('Prefix', _this, 'Edm.String');
        /**
         * Representation of the [[SeriesLine.firstNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstNum = new v4_1.ComplexTypeNumberPropertyField('FirstNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.nextNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextNum = new v4_1.ComplexTypeNumberPropertyField('NextNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.lastNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastNum = new v4_1.ComplexTypeNumberPropertyField('LastNum', _this, 'Edm.Int32');
        return _this;
    }
    return SeriesLineField;
}(v4_1.ComplexTypeField));
exports.SeriesLineField = SeriesLineField;
var SeriesLine;
(function (SeriesLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            Prefix: function (prefix) { return ({ prefix: v4_1.edmToTs(prefix, 'Edm.String') }); },
            FirstNum: function (firstNum) { return ({ firstNum: v4_1.edmToTs(firstNum, 'Edm.Int32') }); },
            NextNum: function (nextNum) { return ({ nextNum: v4_1.edmToTs(nextNum, 'Edm.Int32') }); },
            LastNum: function (lastNum) { return ({ lastNum: v4_1.edmToTs(lastNum, 'Edm.Int32') }); }
        });
    }
    SeriesLine.build = build;
})(SeriesLine = exports.SeriesLine || (exports.SeriesLine = {}));
//# sourceMappingURL=SeriesLine.js.map