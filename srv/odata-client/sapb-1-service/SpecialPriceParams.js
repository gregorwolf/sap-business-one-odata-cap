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
exports.SpecialPriceParams = exports.SpecialPriceParamsField = exports.createSpecialPriceParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceParams.build]] instead.
 */
function createSpecialPriceParams(json) {
    return SpecialPriceParams.build(json);
}
exports.createSpecialPriceParams = createSpecialPriceParams;
/**
 * SpecialPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SpecialPriceParamsField = /** @class */ (function (_super) {
    __extends(SpecialPriceParamsField, _super);
    /**
     * Creates an instance of SpecialPriceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SpecialPriceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SpecialPriceParams) || this;
        /**
         * Representation of the [[SpecialPriceParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceParams.priceListNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListNum = new core_1.ComplexTypeNumberPropertyField('PriceListNum', _this, 'Edm.Int32');
        return _this;
    }
    return SpecialPriceParamsField;
}(core_1.ComplexTypeField));
exports.SpecialPriceParamsField = SpecialPriceParamsField;
var SpecialPriceParams;
(function (SpecialPriceParams) {
    /**
     * Metadata information on all properties of the `SpecialPriceParams` complex type.
     */
    SpecialPriceParams._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceListNum',
            name: 'priceListNum',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SpecialPriceParams);
    }
    SpecialPriceParams.build = build;
})(SpecialPriceParams = exports.SpecialPriceParams || (exports.SpecialPriceParams = {}));
//# sourceMappingURL=SpecialPriceParams.js.map