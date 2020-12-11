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
exports.BusinessPartnerPropertyParams = exports.BusinessPartnerPropertyParamsField = exports.createBusinessPartnerPropertyParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
function createBusinessPartnerPropertyParams(json) {
    return BusinessPartnerPropertyParams.build(json);
}
exports.createBusinessPartnerPropertyParams = createBusinessPartnerPropertyParams;
/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPartnerPropertyParamsField = /** @class */ (function (_super) {
    __extends(BusinessPartnerPropertyParamsField, _super);
    /**
     * Creates an instance of BusinessPartnerPropertyParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BusinessPartnerPropertyParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BusinessPartnerPropertyParams) || this;
        /**
         * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.propertyCode = new core_1.ComplexTypeNumberPropertyField('PropertyCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.propertyName = new core_1.ComplexTypeStringPropertyField('PropertyName', _this, 'Edm.String');
        return _this;
    }
    return BusinessPartnerPropertyParamsField;
}(core_1.ComplexTypeField));
exports.BusinessPartnerPropertyParamsField = BusinessPartnerPropertyParamsField;
var BusinessPartnerPropertyParams;
(function (BusinessPartnerPropertyParams) {
    /**
     * Metadata information on all properties of the `BusinessPartnerPropertyParams` complex type.
     */
    BusinessPartnerPropertyParams._propertyMetadata = [{
            originalName: 'PropertyCode',
            name: 'propertyCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PropertyName',
            name: 'propertyName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BusinessPartnerPropertyParams);
    }
    BusinessPartnerPropertyParams.build = build;
})(BusinessPartnerPropertyParams = exports.BusinessPartnerPropertyParams || (exports.BusinessPartnerPropertyParams = {}));
//# sourceMappingURL=BusinessPartnerPropertyParams.js.map