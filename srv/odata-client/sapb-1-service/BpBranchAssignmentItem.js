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
exports.BpBranchAssignmentItem = exports.BpBranchAssignmentItemField = exports.createBpBranchAssignmentItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
function createBpBranchAssignmentItem(json) {
    return BpBranchAssignmentItem.build(json);
}
exports.createBpBranchAssignmentItem = createBpBranchAssignmentItem;
/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpBranchAssignmentItemField = /** @class */ (function (_super) {
    __extends(BpBranchAssignmentItemField, _super);
    /**
     * Creates an instance of BpBranchAssignmentItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpBranchAssignmentItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpBranchAssignmentItem) || this;
        /**
         * Representation of the [[BpBranchAssignmentItem.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBranchAssignmentItem.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBranchAssignmentItem.disabledForBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.disabledForBp = new core_1.ComplexTypeEnumPropertyField('DisabledForBP', _this);
        return _this;
    }
    return BpBranchAssignmentItemField;
}(core_1.ComplexTypeField));
exports.BpBranchAssignmentItemField = BpBranchAssignmentItemField;
var BpBranchAssignmentItem;
(function (BpBranchAssignmentItem) {
    /**
     * Metadata information on all properties of the `BpBranchAssignmentItem` complex type.
     */
    BpBranchAssignmentItem._propertyMetadata = [{
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DisabledForBP',
            name: 'disabledForBp',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpBranchAssignmentItem);
    }
    BpBranchAssignmentItem.build = build;
})(BpBranchAssignmentItem = exports.BpBranchAssignmentItem || (exports.BpBranchAssignmentItem = {}));
//# sourceMappingURL=BpBranchAssignmentItem.js.map