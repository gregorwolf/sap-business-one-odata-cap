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
exports.FinancePeriod = exports.FinancePeriodField = exports.createFinancePeriod = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of FinancePeriodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function FinancePeriodField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, FinancePeriod) || this;
        /**
         * Representation of the [[FinancePeriod.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new core_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[FinancePeriod.periodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodCode = new core_1.ComplexTypeStringPropertyField('PeriodCode', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.periodName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodName = new core_1.ComplexTypeStringPropertyField('PeriodName', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.postingDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDateFrom = new core_1.ComplexTypeDatePropertyField('PostingDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.postingDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDateTo = new core_1.ComplexTypeDatePropertyField('PostingDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.valueDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueDateFrom = new core_1.ComplexTypeDatePropertyField('ValueDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.valueDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueDateTo = new core_1.ComplexTypeDatePropertyField('ValueDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.taxDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDateFrom = new core_1.ComplexTypeDatePropertyField('TaxDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.taxDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDateTo = new core_1.ComplexTypeDatePropertyField('TaxDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[FinancePeriod.activeforFeed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeforFeed = new core_1.ComplexTypeEnumPropertyField('ActiveforFeed', _this);
        /**
         * Representation of the [[FinancePeriod.locked]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locked = new core_1.ComplexTypeEnumPropertyField('Locked', _this);
        /**
         * Representation of the [[FinancePeriod.additionalSubPeriods]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalSubPeriods = new core_1.ComplexTypeEnumPropertyField('AdditionalSubPeriods', _this);
        /**
         * Representation of the [[FinancePeriod.periodIndicator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodIndicator = new core_1.ComplexTypeStringPropertyField('PeriodIndicator', _this, 'Edm.String');
        /**
         * Representation of the [[FinancePeriod.subNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subNum = new core_1.ComplexTypeNumberPropertyField('SubNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[FinancePeriod.periodStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodStatus = new core_1.ComplexTypeEnumPropertyField('PeriodStatus', _this);
        return _this;
    }
    return FinancePeriodField;
}(core_1.ComplexTypeField));
exports.FinancePeriodField = FinancePeriodField;
var FinancePeriod;
(function (FinancePeriod) {
    /**
     * Metadata information on all properties of the `FinancePeriod` complex type.
     */
    FinancePeriod._propertyMetadata = [{
            originalName: 'AbsoluteEntry',
            name: 'absoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodCode',
            name: 'periodCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PeriodName',
            name: 'periodName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PostingDateFrom',
            name: 'postingDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'PostingDateTo',
            name: 'postingDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ValueDateFrom',
            name: 'valueDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ValueDateTo',
            name: 'valueDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TaxDateFrom',
            name: 'taxDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TaxDateTo',
            name: 'taxDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActiveforFeed',
            name: 'activeforFeed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Locked',
            name: 'locked',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AdditionalSubPeriods',
            name: 'additionalSubPeriods',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PeriodIndicator',
            name: 'periodIndicator',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SubNum',
            name: 'subNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PeriodStatus',
            name: 'periodStatus',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, FinancePeriod);
    }
    FinancePeriod.build = build;
})(FinancePeriod = exports.FinancePeriod || (exports.FinancePeriod = {}));
//# sourceMappingURL=FinancePeriod.js.map