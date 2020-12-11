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
exports.InternalReconciliationOpenTransParams = exports.InternalReconciliationOpenTransParamsField = exports.createInternalReconciliationOpenTransParams = void 0;
var InternalReconciliationBp_1 = require("./InternalReconciliationBp");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransParams.build]] instead.
 */
function createInternalReconciliationOpenTransParams(json) {
    return InternalReconciliationOpenTransParams.build(json);
}
exports.createInternalReconciliationOpenTransParams = createInternalReconciliationOpenTransParams;
/**
 * InternalReconciliationOpenTransParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationOpenTransParamsField = /** @class */ (function (_super) {
    __extends(InternalReconciliationOpenTransParamsField, _super);
    /**
     * Creates an instance of InternalReconciliationOpenTransParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InternalReconciliationOpenTransParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InternalReconciliationOpenTransParams) || this;
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconDate = new core_1.ComplexTypeDatePropertyField('ReconDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.cardOrAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardOrAccount = new core_1.ComplexTypeEnumPropertyField('CardOrAccount', _this);
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNo = new core_1.ComplexTypeStringPropertyField('AccountNo', _this, 'Edm.String');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.dateType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateType = new core_1.ComplexTypeEnumPropertyField('DateType', _this);
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.fromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDate = new core_1.ComplexTypeDatePropertyField('FromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new core_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTransParams.internalReconciliationBPs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalReconciliationBPs = new core_1.CollectionField('InternalReconciliationBPs', _this, InternalReconciliationBp_1.InternalReconciliationBp);
        return _this;
    }
    return InternalReconciliationOpenTransParamsField;
}(core_1.ComplexTypeField));
exports.InternalReconciliationOpenTransParamsField = InternalReconciliationOpenTransParamsField;
var InternalReconciliationOpenTransParams;
(function (InternalReconciliationOpenTransParams) {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTransParams` complex type.
     */
    InternalReconciliationOpenTransParams._propertyMetadata = [{
            originalName: 'ReconDate',
            name: 'reconDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CardOrAccount',
            name: 'cardOrAccount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountNo',
            name: 'accountNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DateType',
            name: 'dateType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FromDate',
            name: 'fromDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ToDate',
            name: 'toDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'InternalReconciliationBPs',
            name: 'internalReconciliationBPs',
            type: InternalReconciliationBp_1.InternalReconciliationBp,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InternalReconciliationOpenTransParams);
    }
    InternalReconciliationOpenTransParams.build = build;
})(InternalReconciliationOpenTransParams = exports.InternalReconciliationOpenTransParams || (exports.InternalReconciliationOpenTransParams = {}));
//# sourceMappingURL=InternalReconciliationOpenTransParams.js.map