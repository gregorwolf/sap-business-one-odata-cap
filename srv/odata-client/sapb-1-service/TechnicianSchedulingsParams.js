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
exports.TechnicianSchedulingsParams = exports.TechnicianSchedulingsParamsField = exports.createTechnicianSchedulingsParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSchedulingsParams.build]] instead.
 */
function createTechnicianSchedulingsParams(json) {
    return TechnicianSchedulingsParams.build(json);
}
exports.createTechnicianSchedulingsParams = createTechnicianSchedulingsParams;
/**
 * TechnicianSchedulingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSchedulingsParamsField = /** @class */ (function (_super) {
    __extends(TechnicianSchedulingsParamsField, _super);
    function TechnicianSchedulingsParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TechnicianSchedulingsParams.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new v4_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSchedulingsParams.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TechnicianSchedulingsParams.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return TechnicianSchedulingsParamsField;
}(v4_1.ComplexTypeField));
exports.TechnicianSchedulingsParamsField = TechnicianSchedulingsParamsField;
var TechnicianSchedulingsParams;
(function (TechnicianSchedulingsParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Technician: function (technician) { return ({ technician: v4_1.edmToTs(technician, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); }
        });
    }
    TechnicianSchedulingsParams.build = build;
})(TechnicianSchedulingsParams = exports.TechnicianSchedulingsParams || (exports.TechnicianSchedulingsParams = {}));
//# sourceMappingURL=TechnicianSchedulingsParams.js.map