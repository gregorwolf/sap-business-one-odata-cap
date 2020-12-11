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
exports.TaxCodeDeterminationTcdKeyField = exports.TaxCodeDeterminationTcdKeyFieldField = exports.createTaxCodeDeterminationTcdKeyField = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxCodeDeterminationTcdKeyFieldValue_1 = require("./TaxCodeDeterminationTcdKeyFieldValue");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyField.build]] instead.
 */
function createTaxCodeDeterminationTcdKeyField(json) {
    return TaxCodeDeterminationTcdKeyField.build(json);
}
exports.createTaxCodeDeterminationTcdKeyField = createTaxCodeDeterminationTcdKeyField;
/**
 * TaxCodeDeterminationTcdKeyFieldField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdKeyFieldField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdKeyFieldField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdKeyFieldField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdKeyField) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.descr]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.descr = new core_1.ComplexTypeStringPropertyField('Descr', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new core_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld1 = new core_1.ComplexTypeNumberPropertyField('KeyFld_1', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable1 = new core_1.ComplexTypeStringPropertyField('UDFTable_1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias1 = new core_1.ComplexTypeStringPropertyField('UDFAlias_1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld2 = new core_1.ComplexTypeNumberPropertyField('KeyFld_2', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable2 = new core_1.ComplexTypeStringPropertyField('UDFTable_2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias2 = new core_1.ComplexTypeStringPropertyField('UDFAlias_2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld3 = new core_1.ComplexTypeNumberPropertyField('KeyFld_3', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable3 = new core_1.ComplexTypeStringPropertyField('UDFTable_3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias3 = new core_1.ComplexTypeStringPropertyField('UDFAlias_3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld4 = new core_1.ComplexTypeNumberPropertyField('KeyFld_4', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable4 = new core_1.ComplexTypeStringPropertyField('UDFTable_4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias4 = new core_1.ComplexTypeStringPropertyField('UDFAlias_4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValues = new core_1.CollectionField('TaxCodeDeterminationTCDKeyFieldValues', _this, TaxCodeDeterminationTcdKeyFieldValue_1.TaxCodeDeterminationTcdKeyFieldValue);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldField = TaxCodeDeterminationTcdKeyFieldField;
var TaxCodeDeterminationTcdKeyField;
(function (TaxCodeDeterminationTcdKeyField) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyField` complex type.
     */
    TaxCodeDeterminationTcdKeyField._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Descr',
            name: 'descr',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Priority',
            name: 'priority',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'KeyFld_1',
            name: 'keyFld1',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UDFTable_1',
            name: 'udfTable1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDFAlias_1',
            name: 'udfAlias1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_2',
            name: 'keyFld2',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UDFTable_2',
            name: 'udfTable2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDFAlias_2',
            name: 'udfAlias2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_3',
            name: 'keyFld3',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UDFTable_3',
            name: 'udfTable3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDFAlias_3',
            name: 'udfAlias3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KeyFld_4',
            name: 'keyFld4',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UDFTable_4',
            name: 'udfTable4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDFAlias_4',
            name: 'udfAlias4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCodeDeterminationTCDKeyFieldValues',
            name: 'taxCodeDeterminationTcdKeyFieldValues',
            type: TaxCodeDeterminationTcdKeyFieldValue_1.TaxCodeDeterminationTcdKeyFieldValue,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyField);
    }
    TaxCodeDeterminationTcdKeyField.build = build;
})(TaxCodeDeterminationTcdKeyField = exports.TaxCodeDeterminationTcdKeyField || (exports.TaxCodeDeterminationTcdKeyField = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyField.js.map