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
exports.CycleCountDeterminationParams = exports.CycleCountDeterminationParamsField = exports.createCycleCountDeterminationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationParams.build]] instead.
 */
function createCycleCountDeterminationParams(json) {
    return CycleCountDeterminationParams.build(json);
}
exports.createCycleCountDeterminationParams = createCycleCountDeterminationParams;
/**
 * CycleCountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CycleCountDeterminationParamsField = /** @class */ (function (_super) {
    __extends(CycleCountDeterminationParamsField, _super);
    /**
     * Creates an instance of CycleCountDeterminationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CycleCountDeterminationParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CycleCountDeterminationParams) || this;
        /**
         * Representation of the [[CycleCountDeterminationParams.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[CycleCountDeterminationParams.cycleBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cycleBy = new core_1.ComplexTypeNumberPropertyField('CycleBy', _this, 'Edm.Int32');
        return _this;
    }
    return CycleCountDeterminationParamsField;
}(core_1.ComplexTypeField));
exports.CycleCountDeterminationParamsField = CycleCountDeterminationParamsField;
var CycleCountDeterminationParams;
(function (CycleCountDeterminationParams) {
    /**
     * Metadata information on all properties of the `CycleCountDeterminationParams` complex type.
     */
    CycleCountDeterminationParams._propertyMetadata = [{
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CycleBy',
            name: 'cycleBy',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CycleCountDeterminationParams);
    }
    CycleCountDeterminationParams.build = build;
})(CycleCountDeterminationParams = exports.CycleCountDeterminationParams || (exports.CycleCountDeterminationParams = {}));
//# sourceMappingURL=CycleCountDeterminationParams.js.map