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
exports.TaxCodeDeterminationTcdKeyFieldValuePeriod = exports.TaxCodeDeterminationTcdKeyFieldValuePeriodField = exports.createTaxCodeDeterminationTcdKeyFieldValuePeriod = void 0;
var TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1 = require("./TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyFieldValuePeriod.build]] instead.
 */
function createTaxCodeDeterminationTcdKeyFieldValuePeriod(json) {
    return TaxCodeDeterminationTcdKeyFieldValuePeriod.build(json);
}
exports.createTaxCodeDeterminationTcdKeyFieldValuePeriod = createTaxCodeDeterminationTcdKeyFieldValuePeriod;
/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdKeyFieldValuePeriodField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdKeyFieldValuePeriodField, _super);
    function TaxCodeDeterminationTcdKeyFieldValuePeriodField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.efctFrom = new v4_1.ComplexTypeDatePropertyField('EfctFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.efctTo = new v4_1.ComplexTypeDatePropertyField('EfctTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages = new TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsageField('TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages', _this);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValuePeriodField;
}(v4_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValuePeriodField = TaxCodeDeterminationTcdKeyFieldValuePeriodField;
var TaxCodeDeterminationTcdKeyFieldValuePeriod;
(function (TaxCodeDeterminationTcdKeyFieldValuePeriod) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            EfctFrom: function (efctFrom) { return ({ efctFrom: v4_1.edmToTs(efctFrom, 'Edm.DateTimeOffset') }); },
            EfctTo: function (efctTo) { return ({ efctTo: v4_1.edmToTs(efctTo, 'Edm.DateTimeOffset') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages: function (taxCodeDeterminationTcdKeyFieldValuePeriodByUsages) { return ({ taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage.build(taxCodeDeterminationTcdKeyFieldValuePeriodByUsages) }); }
        });
    }
    TaxCodeDeterminationTcdKeyFieldValuePeriod.build = build;
})(TaxCodeDeterminationTcdKeyFieldValuePeriod = exports.TaxCodeDeterminationTcdKeyFieldValuePeriod || (exports.TaxCodeDeterminationTcdKeyFieldValuePeriod = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriod.js.map