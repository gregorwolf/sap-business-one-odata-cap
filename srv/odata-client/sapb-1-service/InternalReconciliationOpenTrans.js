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
exports.InternalReconciliationOpenTrans = exports.InternalReconciliationOpenTransField = exports.createInternalReconciliationOpenTrans = void 0;
var InternalReconciliationOpenTransRow_1 = require("./InternalReconciliationOpenTransRow");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTrans.build]] instead.
 */
function createInternalReconciliationOpenTrans(json) {
    return InternalReconciliationOpenTrans.build(json);
}
exports.createInternalReconciliationOpenTrans = createInternalReconciliationOpenTrans;
/**
 * InternalReconciliationOpenTransField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationOpenTransField = /** @class */ (function (_super) {
    __extends(InternalReconciliationOpenTransField, _super);
    /**
     * Creates an instance of InternalReconciliationOpenTransField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InternalReconciliationOpenTransField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InternalReconciliationOpenTrans) || this;
        /**
         * Representation of the [[InternalReconciliationOpenTrans.reconDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconDate = new core_1.ComplexTypeDatePropertyField('ReconDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[InternalReconciliationOpenTrans.cardOrAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardOrAccount = new core_1.ComplexTypeEnumPropertyField('CardOrAccount', _this);
        /**
         * Representation of the [[InternalReconciliationOpenTrans.internalReconciliationOpenTransRows]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalReconciliationOpenTransRows = new core_1.CollectionField('InternalReconciliationOpenTransRows', _this, InternalReconciliationOpenTransRow_1.InternalReconciliationOpenTransRow);
        return _this;
    }
    return InternalReconciliationOpenTransField;
}(core_1.ComplexTypeField));
exports.InternalReconciliationOpenTransField = InternalReconciliationOpenTransField;
var InternalReconciliationOpenTrans;
(function (InternalReconciliationOpenTrans) {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTrans` complex type.
     */
    InternalReconciliationOpenTrans._propertyMetadata = [{
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
            originalName: 'InternalReconciliationOpenTransRows',
            name: 'internalReconciliationOpenTransRows',
            type: InternalReconciliationOpenTransRow_1.InternalReconciliationOpenTransRow,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InternalReconciliationOpenTrans);
    }
    InternalReconciliationOpenTrans.build = build;
})(InternalReconciliationOpenTrans = exports.InternalReconciliationOpenTrans || (exports.InternalReconciliationOpenTrans = {}));
//# sourceMappingURL=InternalReconciliationOpenTrans.js.map