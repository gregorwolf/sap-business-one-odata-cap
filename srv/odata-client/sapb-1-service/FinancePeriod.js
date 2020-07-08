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
exports.FinancePeriod = exports.FinancePeriodField = exports.createFinancePeriod = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FinancePeriod.build]] instead.
 */
function createFinancePeriod(json) {
    return FinancePeriod.build(json);
}
exports.createFinancePeriod = createFinancePeriod;
/**
 * FinancePeriodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FinancePeriodField = /** @class */ (function (_super) {
    __extends(FinancePeriodField, _super);
    function FinancePeriodField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FinancePeriod.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[FinancePeriod.periodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodCode = new v4_1.ComplexTypeStringPropertyField('PeriodCode', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.periodName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodName = new v4_1.ComplexTypeStringPropertyField('PeriodName', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.postingDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDateFrom = new v4_1.ComplexTypeDatePropertyField('PostingDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.postingDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDateTo = new v4_1.ComplexTypeDatePropertyField('PostingDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.valueDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueDateFrom = new v4_1.ComplexTypeDatePropertyField('ValueDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.valueDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueDateTo = new v4_1.ComplexTypeDatePropertyField('ValueDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.taxDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDateFrom = new v4_1.ComplexTypeDatePropertyField('TaxDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.taxDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDateTo = new v4_1.ComplexTypeDatePropertyField('TaxDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new v4_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.subNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subNum = new v4_1.ComplexTypeNumberPropertyField('SubNum', _this, 'Edm.Int32');
        return _this;
    }
    return FinancePeriodField;
}(v4_1.ComplexTypeField));
exports.FinancePeriodField = FinancePeriodField;
var FinancePeriod;
(function (FinancePeriod) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            PeriodCode: function (periodCode) { return ({ periodCode: v4_1.edmToTs(periodCode, 'Edm.String') }); },
            PeriodName: function (periodName) { return ({ periodName: v4_1.edmToTs(periodName, 'Edm.String') }); },
            PostingDateFrom: function (postingDateFrom) { return ({ postingDateFrom: v4_1.edmToTs(postingDateFrom, 'Edm.DateTimeOffset') }); },
            PostingDateTo: function (postingDateTo) { return ({ postingDateTo: v4_1.edmToTs(postingDateTo, 'Edm.DateTimeOffset') }); },
            ValueDateFrom: function (valueDateFrom) { return ({ valueDateFrom: v4_1.edmToTs(valueDateFrom, 'Edm.DateTimeOffset') }); },
            ValueDateTo: function (valueDateTo) { return ({ valueDateTo: v4_1.edmToTs(valueDateTo, 'Edm.DateTimeOffset') }); },
            TaxDateFrom: function (taxDateFrom) { return ({ taxDateFrom: v4_1.edmToTs(taxDateFrom, 'Edm.DateTimeOffset') }); },
            TaxDateTo: function (taxDateTo) { return ({ taxDateTo: v4_1.edmToTs(taxDateTo, 'Edm.DateTimeOffset') }); },
            PeriodIndicator: function (periodIndicator) { return ({ periodIndicator: v4_1.edmToTs(periodIndicator, 'Edm.String') }); },
            SubNum: function (subNum) { return ({ subNum: v4_1.edmToTs(subNum, 'Edm.Int32') }); }
        });
    }
    FinancePeriod.build = build;
})(FinancePeriod = exports.FinancePeriod || (exports.FinancePeriod = {}));
//# sourceMappingURL=FinancePeriod.js.map