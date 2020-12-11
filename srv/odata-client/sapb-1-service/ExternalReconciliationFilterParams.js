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
exports.ExternalReconciliationFilterParams = exports.ExternalReconciliationFilterParamsField = exports.createExternalReconciliationFilterParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationFilterParams.build]] instead.
 */
function createExternalReconciliationFilterParams(json) {
    return ExternalReconciliationFilterParams.build(json);
}
exports.createExternalReconciliationFilterParams = createExternalReconciliationFilterParams;
/**
 * ExternalReconciliationFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalReconciliationFilterParamsField = /** @class */ (function (_super) {
    __extends(ExternalReconciliationFilterParamsField, _super);
    /**
     * Creates an instance of ExternalReconciliationFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExternalReconciliationFilterParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExternalReconciliationFilterParams) || this;
        /**
         * Representation of the [[ExternalReconciliationFilterParams.accountCodeFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCodeFrom = new core_1.ComplexTypeStringPropertyField('AccountCodeFrom', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.accountCodeTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCodeTo = new core_1.ComplexTypeStringPropertyField('AccountCodeTo', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDateFrom = new core_1.ComplexTypeDatePropertyField('ReconciliationDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDateTo = new core_1.ComplexTypeDatePropertyField('ReconciliationDateTo', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNoFrom = new core_1.ComplexTypeNumberPropertyField('ReconciliationNoFrom', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNoTo = new core_1.ComplexTypeNumberPropertyField('ReconciliationNoTo', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalReconciliationFilterParams.reconciliationAccountType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationAccountType = new core_1.ComplexTypeEnumPropertyField('ReconciliationAccountType', _this);
        return _this;
    }
    return ExternalReconciliationFilterParamsField;
}(core_1.ComplexTypeField));
exports.ExternalReconciliationFilterParamsField = ExternalReconciliationFilterParamsField;
var ExternalReconciliationFilterParams;
(function (ExternalReconciliationFilterParams) {
    /**
     * Metadata information on all properties of the `ExternalReconciliationFilterParams` complex type.
     */
    ExternalReconciliationFilterParams._propertyMetadata = [{
            originalName: 'AccountCodeFrom',
            name: 'accountCodeFrom',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountCodeTo',
            name: 'accountCodeTo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReconciliationDateFrom',
            name: 'reconciliationDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReconciliationDateTo',
            name: 'reconciliationDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReconciliationNoFrom',
            name: 'reconciliationNoFrom',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReconciliationNoTo',
            name: 'reconciliationNoTo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReconciliationAccountType',
            name: 'reconciliationAccountType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExternalReconciliationFilterParams);
    }
    ExternalReconciliationFilterParams.build = build;
})(ExternalReconciliationFilterParams = exports.ExternalReconciliationFilterParams || (exports.ExternalReconciliationFilterParams = {}));
//# sourceMappingURL=ExternalReconciliationFilterParams.js.map