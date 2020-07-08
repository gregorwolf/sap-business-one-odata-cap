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
exports.EmployeeEducationInfo = exports.EmployeeEducationInfoField = exports.createEmployeeEducationInfo = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeEducationInfo.build]] instead.
 */
function createEmployeeEducationInfo(json) {
    return EmployeeEducationInfo.build(json);
}
exports.createEmployeeEducationInfo = createEmployeeEducationInfo;
/**
 * EmployeeEducationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeEducationInfoField = /** @class */ (function (_super) {
    __extends(EmployeeEducationInfoField, _super);
    function EmployeeEducationInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeEducationInfo.employeeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeNo = new v4_1.ComplexTypeNumberPropertyField('EmployeeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeEducationInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeEducationInfo.fromDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromDate = new v4_1.ComplexTypeDatePropertyField('FromDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeEducationInfo.toDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toDate = new v4_1.ComplexTypeDatePropertyField('ToDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[EmployeeEducationInfo.educationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.educationType = new v4_1.ComplexTypeNumberPropertyField('EducationType', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeEducationInfo.institute]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.institute = new v4_1.ComplexTypeStringPropertyField('Institute', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeEducationInfo.major]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.major = new v4_1.ComplexTypeStringPropertyField('Major', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeEducationInfo.diploma]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.diploma = new v4_1.ComplexTypeStringPropertyField('Diploma', _this, 'Edm.String');
        return _this;
    }
    return EmployeeEducationInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeeEducationInfoField = EmployeeEducationInfoField;
var EmployeeEducationInfo;
(function (EmployeeEducationInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeNo: function (employeeNo) { return ({ employeeNo: v4_1.edmToTs(employeeNo, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            FromDate: function (fromDate) { return ({ fromDate: v4_1.edmToTs(fromDate, 'Edm.DateTimeOffset') }); },
            ToDate: function (toDate) { return ({ toDate: v4_1.edmToTs(toDate, 'Edm.DateTimeOffset') }); },
            EducationType: function (educationType) { return ({ educationType: v4_1.edmToTs(educationType, 'Edm.Int32') }); },
            Institute: function (institute) { return ({ institute: v4_1.edmToTs(institute, 'Edm.String') }); },
            Major: function (major) { return ({ major: v4_1.edmToTs(major, 'Edm.String') }); },
            Diploma: function (diploma) { return ({ diploma: v4_1.edmToTs(diploma, 'Edm.String') }); }
        });
    }
    EmployeeEducationInfo.build = build;
})(EmployeeEducationInfo = exports.EmployeeEducationInfo || (exports.EmployeeEducationInfo = {}));
//# sourceMappingURL=EmployeeEducationInfo.js.map