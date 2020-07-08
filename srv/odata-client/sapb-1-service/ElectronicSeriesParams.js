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
exports.ElectronicSeriesParams = exports.ElectronicSeriesParamsField = exports.createElectronicSeriesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeriesParams.build]] instead.
 */
function createElectronicSeriesParams(json) {
    return ElectronicSeriesParams.build(json);
}
exports.createElectronicSeriesParams = createElectronicSeriesParams;
/**
 * ElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ElectronicSeriesParamsField = /** @class */ (function (_super) {
    __extends(ElectronicSeriesParamsField, _super);
    function ElectronicSeriesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ElectronicSeriesParams.electronicSeries]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.electronicSeries = new v4_1.ComplexTypeNumberPropertyField('ElectronicSeries', _this, 'Edm.Int32');
        return _this;
    }
    return ElectronicSeriesParamsField;
}(v4_1.ComplexTypeField));
exports.ElectronicSeriesParamsField = ElectronicSeriesParamsField;
var ElectronicSeriesParams;
(function (ElectronicSeriesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ElectronicSeries: function (electronicSeries) { return ({ electronicSeries: v4_1.edmToTs(electronicSeries, 'Edm.Int32') }); }
        });
    }
    ElectronicSeriesParams.build = build;
})(ElectronicSeriesParams = exports.ElectronicSeriesParams || (exports.ElectronicSeriesParams = {}));
//# sourceMappingURL=ElectronicSeriesParams.js.map