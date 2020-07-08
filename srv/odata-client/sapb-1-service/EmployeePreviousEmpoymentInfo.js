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
exports.EmployeePreviousEmpoymentInfo = exports.EmployeePreviousEmpoymentInfoField = exports.createEmployeePreviousEmpoymentInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeePreviousEmpoymentInfo.build]] instead.
 */
function createEmployeePreviousEmpoymentInfo(json) {
    return EmployeePreviousEmpoymentInfo.build(json);
}
exports.createEmployeePreviousEmpoymentInfo = createEmployeePreviousEmpoymentInfo;
/**
 * EmployeePreviousEmpoymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeePreviousEmpoymentInfoField = /** @class */ (function (_super) {
    __extends(EmployeePreviousEmpoymentInfoField, _super);
    function EmployeePreviousEmpoymentInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.employeeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeNo = new v4_1.ComplexTypeNumberPropertyField('EmployeeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.fromDtae]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDtae = new v4_1.ComplexTypeDatePropertyField('FromDtae', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new v4_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.employer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employer = new v4_1.ComplexTypeStringPropertyField('Employer', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new v4_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeePreviousEmpoymentInfo.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        return _this;
    }
    return EmployeePreviousEmpoymentInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeePreviousEmpoymentInfoField = EmployeePreviousEmpoymentInfoField;
var EmployeePreviousEmpoymentInfo;
(function (EmployeePreviousEmpoymentInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeNo: function (employeeNo) { return ({ employeeNo: v4_1.edmToTs(employeeNo, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            FromDtae: function (fromDtae) { return ({ fromDtae: v4_1.edmToTs(fromDtae, 'Edm.DateTimeOffset') }); },
            ToDate: function (toDate) { return ({ toDate: v4_1.edmToTs(toDate, 'Edm.DateTimeOffset') }); },
            Employer: function (employer) { return ({ employer: v4_1.edmToTs(employer, 'Edm.String') }); },
            Position: function (position) { return ({ position: v4_1.edmToTs(position, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); }
        });
    }
    EmployeePreviousEmpoymentInfo.build = build;
})(EmployeePreviousEmpoymentInfo = exports.EmployeePreviousEmpoymentInfo || (exports.EmployeePreviousEmpoymentInfo = {}));
//# sourceMappingURL=EmployeePreviousEmpoymentInfo.js.map