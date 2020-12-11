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
exports.EmployeeTransferDetail = exports.EmployeeTransferDetailField = exports.createEmployeeTransferDetail = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeTransferDetail.build]] instead.
 */
function createEmployeeTransferDetail(json) {
    return EmployeeTransferDetail.build(json);
}
exports.createEmployeeTransferDetail = createEmployeeTransferDetail;
/**
 * EmployeeTransferDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeTransferDetailField = /** @class */ (function (_super) {
    __extends(EmployeeTransferDetailField, _super);
    /**
     * Creates an instance of EmployeeTransferDetailField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function EmployeeTransferDetailField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, EmployeeTransferDetail) || this;
        /**
         * Representation of the [[EmployeeTransferDetail.transferId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferId = new core_1.ComplexTypeNumberPropertyField('TransferID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeTransferDetail.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new core_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeTransferDetail.transferedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferedDate = new core_1.ComplexTypeDatePropertyField('TransferedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeTransferDetail.transferedTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferedTime = new core_1.ComplexTypeTimePropertyField('TransferedTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[EmployeeTransferDetail.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.comment = new core_1.ComplexTypeStringPropertyField('Comment', _this, 'Edm.String');
        return _this;
    }
    return EmployeeTransferDetailField;
}(core_1.ComplexTypeField));
exports.EmployeeTransferDetailField = EmployeeTransferDetailField;
var EmployeeTransferDetail;
(function (EmployeeTransferDetail) {
    /**
     * Metadata information on all properties of the `EmployeeTransferDetail` complex type.
     */
    EmployeeTransferDetail._propertyMetadata = [{
            originalName: 'TransferID',
            name: 'transferId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EmployeeID',
            name: 'employeeId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TransferedDate',
            name: 'transferedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'TransferedTime',
            name: 'transferedTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Comment',
            name: 'comment',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, EmployeeTransferDetail);
    }
    EmployeeTransferDetail.build = build;
})(EmployeeTransferDetail = exports.EmployeeTransferDetail || (exports.EmployeeTransferDetail = {}));
//# sourceMappingURL=EmployeeTransferDetail.js.map