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
exports.TaxCodeDeterminationTcdKeyFieldValue = exports.TaxCodeDeterminationTcdKeyFieldValueField = exports.createTaxCodeDeterminationTcdKeyFieldValue = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxCodeDeterminationTcdKeyFieldValuePeriod_1 = require("./TaxCodeDeterminationTcdKeyFieldValuePeriod");
var TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1 = require("./TaxCodeDeterminationTcdKeyFieldValueDefaultWt");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValue.build]] instead.
 */
function createTaxCodeDeterminationTcdKeyFieldValue(json) {
    return TaxCodeDeterminationTcdKeyFieldValue.build(json);
}
exports.createTaxCodeDeterminationTcdKeyFieldValue = createTaxCodeDeterminationTcdKeyFieldValue;
/**
 * TaxCodeDeterminationTcdKeyFieldValueField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdKeyFieldValueField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdKeyFieldValueField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValueField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdKeyFieldValueField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValue) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.dispOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dispOrder = new core_1.ComplexTypeNumberPropertyField('DispOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld1V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld1V = new core_1.ComplexTypeStringPropertyField('KeyFld_1_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld2V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld2V = new core_1.ComplexTypeStringPropertyField('KeyFld_2_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld3V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld3V = new core_1.ComplexTypeStringPropertyField('KeyFld_3_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld4V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld4V = new core_1.ComplexTypeStringPropertyField('KeyFld_4_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValuePeriods]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValuePeriods = new core_1.CollectionField('TaxCodeDeterminationTCDKeyFieldValuePeriods', _this, TaxCodeDeterminationTcdKeyFieldValuePeriod_1.TaxCodeDeterminationTcdKeyFieldValuePeriod);
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValueDefaultWTs = new core_1.CollectionField('TaxCodeDeterminationTCDKeyFieldValueDefaultWTs', _this, TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1.TaxCodeDeterminationTcdKeyFieldValueDefaultWt);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValueField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValueField = TaxCodeDeterminationTcdKeyFieldValueField;
var TaxCodeDeterminationTcdKeyFieldValue;
(function (TaxCodeDeterminationTcdKeyFieldValue) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValue` complex type.
     */
    TaxCodeDeterminationTcdKeyFieldValue._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DispOrder',
            name: 'dispOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'KeyFld_1_V',
            name: 'keyFld1V',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_2_V',
            name: 'keyFld2V',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_3_V',
            name: 'keyFld3V',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_4_V',
            name: 'keyFld4V',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCodeDeterminationTCDKeyFieldValuePeriods',
            name: 'taxCodeDeterminationTcdKeyFieldValuePeriods',
            type: TaxCodeDeterminationTcdKeyFieldValuePeriod_1.TaxCodeDeterminationTcdKeyFieldValuePeriod,
            isCollection: true
        }, {
            originalName: 'TaxCodeDeterminationTCDKeyFieldValueDefaultWTs',
            name: 'taxCodeDeterminationTcdKeyFieldValueDefaultWTs',
            type: TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1.TaxCodeDeterminationTcdKeyFieldValueDefaultWt,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValue);
    }
    TaxCodeDeterminationTcdKeyFieldValue.build = build;
})(TaxCodeDeterminationTcdKeyFieldValue = exports.TaxCodeDeterminationTcdKeyFieldValue || (exports.TaxCodeDeterminationTcdKeyFieldValue = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValue.js.map