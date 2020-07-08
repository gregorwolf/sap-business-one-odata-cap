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
exports.TechnicianSchedulings = exports.TechnicianSchedulingsField = exports.createTechnicianSchedulings = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulings.build]] instead.
 */
function createTechnicianSchedulings(json) {
    return TechnicianSchedulings.build(json);
}
exports.createTechnicianSchedulings = createTechnicianSchedulings;
/**
 * TechnicianSchedulingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSchedulingsField = /** @class */ (function (_super) {
    __extends(TechnicianSchedulingsField, _super);
    function TechnicianSchedulingsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TechnicianSchedulings.serviceCallId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCallId = new v4_1.ComplexTypeNumberPropertyField('ServiceCallID', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulings.schedulingLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.schedulingLineNum = new v4_1.ComplexTypeNumberPropertyField('SchedulingLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulings.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TechnicianSchedulings.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return TechnicianSchedulingsField;
}(v4_1.ComplexTypeField));
exports.TechnicianSchedulingsField = TechnicianSchedulingsField;
var TechnicianSchedulings;
(function (TechnicianSchedulings) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ServiceCallID: function (serviceCallId) { return ({ serviceCallId: v4_1.edmToTs(serviceCallId, 'Edm.Int32') }); },
            SchedulingLineNum: function (schedulingLineNum) { return ({ schedulingLineNum: v4_1.edmToTs(schedulingLineNum, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); }
        });
    }
    TechnicianSchedulings.build = build;
})(TechnicianSchedulings = exports.TechnicianSchedulings || (exports.TechnicianSchedulings = {}));
//# sourceMappingURL=TechnicianSchedulings.js.map