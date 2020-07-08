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
exports.TechnicianSettings = exports.TechnicianSettingsField = exports.createTechnicianSettings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TechnicianSettings.build]] instead.
 */
function createTechnicianSettings(json) {
    return TechnicianSettings.build(json);
}
exports.createTechnicianSettings = createTechnicianSettings;
/**
 * TechnicianSettingsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TechnicianSettingsField = /** @class */ (function (_super) {
    __extends(TechnicianSettingsField, _super);
    function TechnicianSettingsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TechnicianSettings.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new v4_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSettings.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new v4_1.ComplexTypeNumberPropertyField('GroupCode', _this, 'Edm.Int32');
        return _this;
    }
    return TechnicianSettingsField;
}(v4_1.ComplexTypeField));
exports.TechnicianSettingsField = TechnicianSettingsField;
var TechnicianSettings;
(function (TechnicianSettings) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Technician: function (technician) { return ({ technician: v4_1.edmToTs(technician, 'Edm.Int32') }); },
            GroupCode: function (groupCode) { return ({ groupCode: v4_1.edmToTs(groupCode, 'Edm.Int32') }); }
        });
    }
    TechnicianSettings.build = build;
})(TechnicianSettings = exports.TechnicianSettings || (exports.TechnicianSettings = {}));
//# sourceMappingURL=TechnicianSettings.js.map