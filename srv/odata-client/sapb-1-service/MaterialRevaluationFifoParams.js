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
exports.MaterialRevaluationFifoParams = exports.MaterialRevaluationFifoParamsField = exports.createMaterialRevaluationFifoParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
function createMaterialRevaluationFifoParams(json) {
    return MaterialRevaluationFifoParams.build(json);
}
exports.createMaterialRevaluationFifoParams = createMaterialRevaluationFifoParams;
/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationFifoParamsField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationFifoParamsField, _super);
    function MaterialRevaluationFifoParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MaterialRevaluationFifoParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationFifoParams.locationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationType = new v4_1.ComplexTypeStringPropertyField('LocationType', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationFifoParams.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new v4_1.ComplexTypeStringPropertyField('LocationCode', _this, 'Edm.String');
        return _this;
    }
    return MaterialRevaluationFifoParamsField;
}(v4_1.ComplexTypeField));
exports.MaterialRevaluationFifoParamsField = MaterialRevaluationFifoParamsField;
var MaterialRevaluationFifoParams;
(function (MaterialRevaluationFifoParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            LocationType: function (locationType) { return ({ locationType: v4_1.edmToTs(locationType, 'Edm.String') }); },
            LocationCode: function (locationCode) { return ({ locationCode: v4_1.edmToTs(locationCode, 'Edm.String') }); }
        });
    }
    MaterialRevaluationFifoParams.build = build;
})(MaterialRevaluationFifoParams = exports.MaterialRevaluationFifoParams || (exports.MaterialRevaluationFifoParams = {}));
//# sourceMappingURL=MaterialRevaluationFifoParams.js.map