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
exports.TechnicianSettingsParams = exports.TechnicianSettingsParamsField = exports.createTechnicianSettingsParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettingsParams.build]] instead.
 */
function createTechnicianSettingsParams(json) {
    return TechnicianSettingsParams.build(json);
}
exports.createTechnicianSettingsParams = createTechnicianSettingsParams;
/**
 * TechnicianSettingsParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSettingsParamsField = /** @class */ (function (_super) {
    __extends(TechnicianSettingsParamsField, _super);
    function TechnicianSettingsParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TechnicianSettingsParams.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new v4_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        return _this;
    }
    return TechnicianSettingsParamsField;
}(v4_1.ComplexTypeField));
exports.TechnicianSettingsParamsField = TechnicianSettingsParamsField;
var TechnicianSettingsParams;
(function (TechnicianSettingsParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Technician: function (technician) { return ({ technician: v4_1.edmToTs(technician, 'Edm.Int32') }); }
        });
    }
    TechnicianSettingsParams.build = build;
})(TechnicianSettingsParams = exports.TechnicianSettingsParams || (exports.TechnicianSettingsParams = {}));
//# sourceMappingURL=TechnicianSettingsParams.js.map