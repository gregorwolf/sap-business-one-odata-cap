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
exports.NfTaxCategoryParams = exports.NfTaxCategoryParamsField = exports.createNfTaxCategoryParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[NfTaxCategoryParams.build]] instead.
 */
function createNfTaxCategoryParams(json) {
    return NfTaxCategoryParams.build(json);
}
exports.createNfTaxCategoryParams = createNfTaxCategoryParams;
/**
 * NfTaxCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var NfTaxCategoryParamsField = /** @class */ (function (_super) {
    __extends(NfTaxCategoryParamsField, _super);
    /**
     * Creates an instance of NfTaxCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function NfTaxCategoryParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, NfTaxCategoryParams) || this;
        /**
         * Representation of the [[NfTaxCategoryParams.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[NfTaxCategoryParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return NfTaxCategoryParamsField;
}(core_1.ComplexTypeField));
exports.NfTaxCategoryParamsField = NfTaxCategoryParamsField;
var NfTaxCategoryParams;
(function (NfTaxCategoryParams) {
    /**
     * Metadata information on all properties of the `NfTaxCategoryParams` complex type.
     */
    NfTaxCategoryParams._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, NfTaxCategoryParams);
    }
    NfTaxCategoryParams.build = build;
})(NfTaxCategoryParams = exports.NfTaxCategoryParams || (exports.NfTaxCategoryParams = {}));
//# sourceMappingURL=NfTaxCategoryParams.js.map