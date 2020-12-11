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
exports.BlanketAgreementParams = exports.BlanketAgreementParamsField = exports.createBlanketAgreementParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementParams.build]] instead.
 */
function createBlanketAgreementParams(json) {
    return BlanketAgreementParams.build(json);
}
exports.createBlanketAgreementParams = createBlanketAgreementParams;
/**
 * BlanketAgreementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementParamsField = /** @class */ (function (_super) {
    __extends(BlanketAgreementParamsField, _super);
    /**
     * Creates an instance of BlanketAgreementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BlanketAgreementParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BlanketAgreementParams) || this;
        /**
         * Representation of the [[BlanketAgreementParams.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new core_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        return _this;
    }
    return BlanketAgreementParamsField;
}(core_1.ComplexTypeField));
exports.BlanketAgreementParamsField = BlanketAgreementParamsField;
var BlanketAgreementParams;
(function (BlanketAgreementParams) {
    /**
     * Metadata information on all properties of the `BlanketAgreementParams` complex type.
     */
    BlanketAgreementParams._propertyMetadata = [{
            originalName: 'AgreementNo',
            name: 'agreementNo',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BlanketAgreementParams);
    }
    BlanketAgreementParams.build = build;
})(BlanketAgreementParams = exports.BlanketAgreementParams || (exports.BlanketAgreementParams = {}));
//# sourceMappingURL=BlanketAgreementParams.js.map