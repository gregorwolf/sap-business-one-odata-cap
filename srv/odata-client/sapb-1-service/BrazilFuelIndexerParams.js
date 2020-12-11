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
exports.BrazilFuelIndexerParams = exports.BrazilFuelIndexerParamsField = exports.createBrazilFuelIndexerParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
function createBrazilFuelIndexerParams(json) {
    return BrazilFuelIndexerParams.build(json);
}
exports.createBrazilFuelIndexerParams = createBrazilFuelIndexerParams;
/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BrazilFuelIndexerParamsField = /** @class */ (function (_super) {
    __extends(BrazilFuelIndexerParamsField, _super);
    /**
     * Creates an instance of BrazilFuelIndexerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BrazilFuelIndexerParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BrazilFuelIndexerParams) || this;
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelId = new core_1.ComplexTypeNumberPropertyField('FuelID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelGroupCode = new core_1.ComplexTypeNumberPropertyField('FuelGroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelCode = new core_1.ComplexTypeStringPropertyField('FuelCode', _this, 'Edm.String');
        /**
         * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return BrazilFuelIndexerParamsField;
}(core_1.ComplexTypeField));
exports.BrazilFuelIndexerParamsField = BrazilFuelIndexerParamsField;
var BrazilFuelIndexerParams;
(function (BrazilFuelIndexerParams) {
    /**
     * Metadata information on all properties of the `BrazilFuelIndexerParams` complex type.
     */
    BrazilFuelIndexerParams._propertyMetadata = [{
            originalName: 'FuelID',
            name: 'fuelId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FuelGroupCode',
            name: 'fuelGroupCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FuelCode',
            name: 'fuelCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BrazilFuelIndexerParams);
    }
    BrazilFuelIndexerParams.build = build;
})(BrazilFuelIndexerParams = exports.BrazilFuelIndexerParams || (exports.BrazilFuelIndexerParams = {}));
//# sourceMappingURL=BrazilFuelIndexerParams.js.map