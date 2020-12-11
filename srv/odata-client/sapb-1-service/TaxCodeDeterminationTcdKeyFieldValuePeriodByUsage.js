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
exports.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage = exports.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField = exports.createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build]] instead.
 */
function createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage(json) {
    return TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build(json);
}
exports.createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage = createTaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.usageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usageCode = new core_1.ComplexTypeNumberPropertyField('UsageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.expTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expTaxCode = new core_1.ComplexTypeStringPropertyField('ExpTaxCode', _this, 'Edm.String');
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField = TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField;
var TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage;
(function (TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage` complex type.
     */
    TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UsageCode',
            name: 'usageCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpTaxCode',
            name: 'expTaxCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage);
    }
    TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build = build;
})(TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage = exports.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage || (exports.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.js.map