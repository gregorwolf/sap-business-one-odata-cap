"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockTakingParams = exports.StockTakingParamsField = exports.createStockTakingParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[StockTakingParams.build]] instead.
 */
function createStockTakingParams(json) {
    return StockTakingParams.build(json);
}
exports.createStockTakingParams = createStockTakingParams;
/**
 * StockTakingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTakingParamsField = /** @class */ (function (_super) {
    __extends(StockTakingParamsField, _super);
    /**
     * Creates an instance of StockTakingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function StockTakingParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, StockTakingParams) || this;
        /**
         * Representation of the [[StockTakingParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[StockTakingParams.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        return _this;
    }
    return StockTakingParamsField;
}(core_1.ComplexTypeField));
exports.StockTakingParamsField = StockTakingParamsField;
var StockTakingParams;
(function (StockTakingParams) {
    /**
     * Metadata information on all properties of the `StockTakingParams` complex type.
     */
    StockTakingParams._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, StockTakingParams);
    }
    StockTakingParams.build = build;
})(StockTakingParams = exports.StockTakingParams || (exports.StockTakingParams = {}));
//# sourceMappingURL=StockTakingParams.js.map