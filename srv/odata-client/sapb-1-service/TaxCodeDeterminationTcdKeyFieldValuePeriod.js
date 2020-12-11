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
exports.TaxCodeDeterminationTcdKeyFieldValuePeriod = exports.TaxCodeDeterminationTcdKeyFieldValuePeriodField = exports.createTaxCodeDeterminationTcdKeyFieldValuePeriod = void 0;
var TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1 = require("./TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdKeyFieldValuePeriodField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdKeyFieldValuePeriod) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.efctFrom = new core_1.ComplexTypeDatePropertyField('EfctFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.efctTo = new core_1.ComplexTypeDatePropertyField('EfctTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages = new core_1.CollectionField('TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages', _this, TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage);
        return _this;
    }
    return TaxCodeDeterminationTcdKeyFieldValuePeriodField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdKeyFieldValuePeriodField = TaxCodeDeterminationTcdKeyFieldValuePeriodField;
var TaxCodeDeterminationTcdKeyFieldValuePeriod;
(function (TaxCodeDeterminationTcdKeyFieldValuePeriod) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriod` complex type.
     */
    TaxCodeDeterminationTcdKeyFieldValuePeriod._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EfctFrom',
            name: 'efctFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EfctTo',
            name: 'efctTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages',
            name: 'taxCodeDeterminationTcdKeyFieldValuePeriodByUsages',
            type: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage_1.TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdKeyFieldValuePeriod);
    }
    TaxCodeDeterminationTcdKeyFieldValuePeriod.build = build;
})(TaxCodeDeterminationTcdKeyFieldValuePeriod = exports.TaxCodeDeterminationTcdKeyFieldValuePeriod || (exports.TaxCodeDeterminationTcdKeyFieldValuePeriod = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdKeyFieldValuePeriod.js.map