"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function TaxCodeDeterminationTcdKeyFieldField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.descr]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.descr = new v4_1.ComplexTypeStringPropertyField('Descr', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.priority]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priority = new v4_1.ComplexTypeNumberPropertyField('Priority', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld1 = new v4_1.ComplexTypeNumberPropertyField('KeyFld_1', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable1 = new v4_1.ComplexTypeStringPropertyField('UDFTable_1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias1 = new v4_1.ComplexTypeStringPropertyField('UDFAlias_1', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld2 = new v4_1.ComplexTypeNumberPropertyField('KeyFld_2', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable2 = new v4_1.ComplexTypeStringPropertyField('UDFTable_2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias2 = new v4_1.ComplexTypeStringPropertyField('UDFAlias_2', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld3 = new v4_1.ComplexTypeNumberPropertyField('KeyFld_3', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable3 = new v4_1.ComplexTypeStringPropertyField('UDFTable_3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias3 = new v4_1.ComplexTypeStringPropertyField('UDFAlias_3', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld4 = new v4_1.ComplexTypeNumberPropertyField('KeyFld_4', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfTable4 = new v4_1.ComplexTypeStringPropertyField('UDFTable_4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udfAlias4 = new v4_1.ComplexTypeStringPropertyField('UDFAlias_4', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValues = new TaxCodeDeterminationTcdKeyFieldValue_1.TaxCodeDeterminationTcdKeyFieldValueField('TaxCodeDeterminationTCDKeyFieldValues', _this);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldField;
}(v4_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldField = TaxCodeDeterminationTcdKeyFieldField;
var TaxCodeDeterminationTcdKeyField;
(function (TaxCodeDeterminationTcdKeyField) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            Descr: function (descr) { return ({ descr: v4_1.edmToTs(descr, 'Edm.String') }); },
            Priority: function (priority) { return ({ priority: v4_1.edmToTs(priority, 'Edm.Int32') }); },
            KeyFld_1: function (keyFld1) { return ({ keyFld1: v4_1.edmToTs(keyFld1, 'Edm.Int32') }); },
            UDFTable_1: function (udfTable1) { return ({ udfTable1: v4_1.edmToTs(udfTable1, 'Edm.String') }); },
            UDFAlias_1: function (udfAlias1) { return ({ udfAlias1: v4_1.edmToTs(udfAlias1, 'Edm.String') }); },
            KeyFld_2: function (keyFld2) { return ({ keyFld2: v4_1.edmToTs(keyFld2, 'Edm.Int32') }); },
            UDFTable_2: function (udfTable2) { return ({ udfTable2: v4_1.edmToTs(udfTable2, 'Edm.String') }); },
            UDFAlias_2: function (udfAlias2) { return ({ udfAlias2: v4_1.edmToTs(udfAlias2, 'Edm.String') }); },
            KeyFld_3: function (keyFld3) { return ({ keyFld3: v4_1.edmToTs(keyFld3, 'Edm.Int32') }); },
            UDFTable_3: function (udfTable3) { return ({ udfTable3: v4_1.edmToTs(udfTable3, 'Edm.String') }); },
            UDFAlias_3: function (udfAlias3) { return ({ udfAlias3: v4_1.edmToTs(udfAlias3, 'Edm.String') }); },
            KeyFld_4: function (keyFld4) { return ({ keyFld4: v4_1.edmToTs(keyFld4, 'Edm.Int32') }); },
            UDFTable_4: function (udfTable4) { return ({ udfTable4: v4_1.edmToTs(udfTable4, 'Edm.String') }); },
            UDFAlias_4: function (udfAlias4) { return ({ udfAlias4: v4_1.edmToTs(udfAlias4, 'Edm.String') }); },
            TaxCodeDeterminationTCDKeyFieldValues: function (taxCodeDeterminationTcdKeyFieldValues) { return ({ taxCodeDeterminationTcdKeyFieldValues: TaxCodeDeterminationTcdKeyFieldValue_1.TaxCodeDeterminationTcdKeyFieldValue.build(taxCodeDeterminationTcdKeyFieldValues) }); }
        });
    }
    TaxCodeDeterminationTcdKeyField.build = build;
})(TaxCodeDeterminationTcdKeyField = exports.TaxCodeDeterminationTcdKeyField || (exports.TaxCodeDeterminationTcdKeyField = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyField.js.map