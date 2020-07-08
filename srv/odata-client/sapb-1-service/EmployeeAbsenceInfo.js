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
exports.EmployeeAbsenceInfo = exports.EmployeeAbsenceInfoField = exports.createEmployeeAbsenceInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeAbsenceInfo.build]] instead.
 */
function createEmployeeAbsenceInfo(json) {
    return EmployeeAbsenceInfo.build(json);
}
exports.createEmployeeAbsenceInfo = createEmployeeAbsenceInfo;
/**
 * EmployeeAbsenceInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeAbsenceInfoField = /** @class */ (function (_super) {
    __extends(EmployeeAbsenceInfoField, _super);
    function EmployeeAbsenceInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeAbsenceInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeAbsenceInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeAbsenceInfo.fromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDate = new v4_1.ComplexTypeDatePropertyField('FromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeAbsenceInfo.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new v4_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeAbsenceInfo.reason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reason = new v4_1.ComplexTypeStringPropertyField('Reason', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeAbsenceInfo.approvedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.approvedBy = new v4_1.ComplexTypeStringPropertyField('ApprovedBy', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeAbsenceInfo.confirmerNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.confirmerNumber = new v4_1.ComplexTypeNumberPropertyField('ConfirmerNumber', _this, 'Edm.Int32');
        return _this;
    }
    return EmployeeAbsenceInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeeAbsenceInfoField = EmployeeAbsenceInfoField;
var EmployeeAbsenceInfo;
(function (EmployeeAbsenceInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            FromDate: function (fromDate) { return ({ fromDate: v4_1.edmToTs(fromDate, 'Edm.DateTimeOffset') }); },
            ToDate: function (toDate) { return ({ toDate: v4_1.edmToTs(toDate, 'Edm.DateTimeOffset') }); },
            Reason: function (reason) { return ({ reason: v4_1.edmToTs(reason, 'Edm.String') }); },
            ApprovedBy: function (approvedBy) { return ({ approvedBy: v4_1.edmToTs(approvedBy, 'Edm.String') }); },
            ConfirmerNumber: function (confirmerNumber) { return ({ confirmerNumber: v4_1.edmToTs(confirmerNumber, 'Edm.Int32') }); }
        });
    }
    EmployeeAbsenceInfo.build = build;
})(EmployeeAbsenceInfo = exports.EmployeeAbsenceInfo || (exports.EmployeeAbsenceInfo = {}));
//# sourceMappingURL=EmployeeAbsenceInfo.js.map