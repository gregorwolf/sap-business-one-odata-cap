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
exports.SeriesParams = exports.SeriesParamsField = exports.createSeriesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SeriesParams.build]] instead.
 */
function createSeriesParams(json) {
    return SeriesParams.build(json);
}
exports.createSeriesParams = createSeriesParams;
/**
 * SeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SeriesParamsField = /** @class */ (function (_super) {
    __extends(SeriesParamsField, _super);
    function SeriesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SeriesParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        return _this;
    }
    return SeriesParamsField;
}(v4_1.ComplexTypeField));
exports.SeriesParamsField = SeriesParamsField;
var SeriesParams;
(function (SeriesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); }
        });
    }
    SeriesParams.build = build;
})(SeriesParams = exports.SeriesParams || (exports.SeriesParams = {}));
//# sourceMappingURL=SeriesParams.js.map