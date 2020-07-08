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
exports.EmployeeTransferDetail = exports.EmployeeTransferDetailField = exports.createEmployeeTransferDetail = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function EmployeeTransferDetailField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeTransferDetail.transferId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferId = new v4_1.ComplexTypeNumberPropertyField('TransferID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeTransferDetail.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeTransferDetail.transferedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferedDate = new v4_1.ComplexTypeDatePropertyField('TransferedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeTransferDetail.transferedTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferedTime = new v4_1.ComplexTypeTimePropertyField('TransferedTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[EmployeeTransferDetail.comment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.comment = new v4_1.ComplexTypeStringPropertyField('Comment', _this, 'Edm.String');
        return _this;
    }
    return EmployeeTransferDetailField;
}(v4_1.ComplexTypeField));
exports.EmployeeTransferDetailField = EmployeeTransferDetailField;
var EmployeeTransferDetail;
(function (EmployeeTransferDetail) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransferID: function (transferId) { return ({ transferId: v4_1.edmToTs(transferId, 'Edm.Int32') }); },
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            TransferedDate: function (transferedDate) { return ({ transferedDate: v4_1.edmToTs(transferedDate, 'Edm.DateTimeOffset') }); },
            TransferedTime: function (transferedTime) { return ({ transferedTime: v4_1.edmToTs(transferedTime, 'Edm.TimeOfDay') }); },
            Comment: function (comment) { return ({ comment: v4_1.edmToTs(comment, 'Edm.String') }); }
        });
    }
    EmployeeTransferDetail.build = build;
})(EmployeeTransferDetail = exports.EmployeeTransferDetail || (exports.EmployeeTransferDetail = {}));
//# sourceMappingURL=EmployeeTransferDetail.js.map