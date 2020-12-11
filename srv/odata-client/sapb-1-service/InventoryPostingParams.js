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
exports.InventoryPostingParams = exports.InventoryPostingParamsField = exports.createInventoryPostingParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingParams.build]] instead.
 */
function createInventoryPostingParams(json) {
    return InventoryPostingParams.build(json);
}
exports.createInventoryPostingParams = createInventoryPostingParams;
/**
 * InventoryPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingParamsField = /** @class */ (function (_super) {
    __extends(InventoryPostingParamsField, _super);
    /**
     * Creates an instance of InventoryPostingParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryPostingParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryPostingParams) || this;
        /**
         * Representation of the [[InventoryPostingParams.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingParams.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new core_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        return _this;
    }
    return InventoryPostingParamsField;
}(core_1.ComplexTypeField));
exports.InventoryPostingParamsField = InventoryPostingParamsField;
var InventoryPostingParams;
(function (InventoryPostingParams) {
    /**
     * Metadata information on all properties of the `InventoryPostingParams` complex type.
     */
    InventoryPostingParams._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentNumber',
            name: 'documentNumber',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryPostingParams);
    }
    InventoryPostingParams.build = build;
})(InventoryPostingParams = exports.InventoryPostingParams || (exports.InventoryPostingParams = {}));
//# sourceMappingURL=InventoryPostingParams.js.map