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
exports.CurrenciesParams = exports.CurrenciesParamsField = exports.createCurrenciesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CurrenciesParams.build]] instead.
 */
function createCurrenciesParams(json) {
    return CurrenciesParams.build(json);
}
exports.createCurrenciesParams = createCurrenciesParams;
/**
 * CurrenciesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CurrenciesParamsField = /** @class */ (function (_super) {
    __extends(CurrenciesParamsField, _super);
    /**
     * Creates an instance of CurrenciesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CurrenciesParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CurrenciesParams) || this;
        /**
         * Representation of the [[CurrenciesParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return CurrenciesParamsField;
}(core_1.ComplexTypeField));
exports.CurrenciesParamsField = CurrenciesParamsField;
var CurrenciesParams;
(function (CurrenciesParams) {
    /**
     * Metadata information on all properties of the `CurrenciesParams` complex type.
     */
    CurrenciesParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CurrenciesParams);
    }
    CurrenciesParams.build = build;
})(CurrenciesParams = exports.CurrenciesParams || (exports.CurrenciesParams = {}));
//# sourceMappingURL=CurrenciesParams.js.map