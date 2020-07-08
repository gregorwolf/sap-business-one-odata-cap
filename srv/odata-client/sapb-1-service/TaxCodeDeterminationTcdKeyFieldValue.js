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
exports.TaxCodeDeterminationTcdKeyFieldValue = exports.TaxCodeDeterminationTcdKeyFieldValueField = exports.createTaxCodeDeterminationTcdKeyFieldValue = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxCodeDeterminationTcdKeyFieldValuePeriod_1 = require("./TaxCodeDeterminationTcdKeyFieldValuePeriod");
var TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1 = require("./TaxCodeDeterminationTcdKeyFieldValueDefaultWt");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function TaxCodeDeterminationTcdKeyFieldValueField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.dispOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dispOrder = new v4_1.ComplexTypeNumberPropertyField('DispOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld1V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld1V = new v4_1.ComplexTypeStringPropertyField('KeyFld_1_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld2V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld2V = new v4_1.ComplexTypeStringPropertyField('KeyFld_2_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld3V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld3V = new v4_1.ComplexTypeStringPropertyField('KeyFld_3_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.keyFld4V]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.keyFld4V = new v4_1.ComplexTypeStringPropertyField('KeyFld_4_V', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValuePeriods]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValuePeriods = new TaxCodeDeterminationTcdKeyFieldValuePeriod_1.TaxCodeDeterminationTcdKeyFieldValuePeriodField('TaxCodeDeterminationTCDKeyFieldValuePeriods', _this);
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValue.taxCodeDeterminationTcdKeyFieldValueDefaultWTs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValueDefaultWTs = new TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1.TaxCodeDeterminationTcdKeyFieldValueDefaultWtField('TaxCodeDeterminationTCDKeyFieldValueDefaultWTs', _this);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValueField;
}(v4_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValueField = TaxCodeDeterminationTcdKeyFieldValueField;
var TaxCodeDeterminationTcdKeyFieldValue;
(function (TaxCodeDeterminationTcdKeyFieldValue) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            DispOrder: function (dispOrder) { return ({ dispOrder: v4_1.edmToTs(dispOrder, 'Edm.Int32') }); },
            KeyFld_1_V: function (keyFld1V) { return ({ keyFld1V: v4_1.edmToTs(keyFld1V, 'Edm.String') }); },
            KeyFld_2_V: function (keyFld2V) { return ({ keyFld2V: v4_1.edmToTs(keyFld2V, 'Edm.String') }); },
            KeyFld_3_V: function (keyFld3V) { return ({ keyFld3V: v4_1.edmToTs(keyFld3V, 'Edm.String') }); },
            KeyFld_4_V: function (keyFld4V) { return ({ keyFld4V: v4_1.edmToTs(keyFld4V, 'Edm.String') }); },
            TaxCodeDeterminationTCDKeyFieldValuePeriods: function (taxCodeDeterminationTcdKeyFieldValuePeriods) { return ({ taxCodeDeterminationTcdKeyFieldValuePeriods: TaxCodeDeterminationTcdKeyFieldValuePeriod_1.TaxCodeDeterminationTcdKeyFieldValuePeriod.build(taxCodeDeterminationTcdKeyFieldValuePeriods) }); },
            TaxCodeDeterminationTCDKeyFieldValueDefaultWTs: function (taxCodeDeterminationTcdKeyFieldValueDefaultWTs) { return ({ taxCodeDeterminationTcdKeyFieldValueDefaultWTs: TaxCodeDeterminationTcdKeyFieldValueDefaultWt_1.TaxCodeDeterminationTcdKeyFieldValueDefaultWt.build(taxCodeDeterminationTcdKeyFieldValueDefaultWTs) }); }
        });
    }
    TaxCodeDeterminationTcdKeyFieldValue.build = build;
})(TaxCodeDeterminationTcdKeyFieldValue = exports.TaxCodeDeterminationTcdKeyFieldValue || (exports.TaxCodeDeterminationTcdKeyFieldValue = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValue.js.map