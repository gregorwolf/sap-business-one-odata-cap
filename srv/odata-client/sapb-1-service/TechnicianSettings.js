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
exports.TechnicianSettings = exports.TechnicianSettingsField = exports.createTechnicianSettings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of TechnicianSettingsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TechnicianSettingsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TechnicianSettings) || this;
        /**
         * Representation of the [[TechnicianSettings.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new core_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[TechnicianSettings.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new core_1.ComplexTypeNumberPropertyField('GroupCode', _this, 'Edm.Int32');
        return _this;
    }
    return TechnicianSettingsField;
}(core_1.ComplexTypeField));
exports.TechnicianSettingsField = TechnicianSettingsField;
var TechnicianSettings;
(function (TechnicianSettings) {
    /**
     * Metadata information on all properties of the `TechnicianSettings` complex type.
     */
    TechnicianSettings._propertyMetadata = [{
            originalName: 'Technician',
            name: 'technician',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GroupCode',
            name: 'groupCode',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TechnicianSettings);
    }
    TechnicianSettings.build = build;
})(TechnicianSettings = exports.TechnicianSettings || (exports.TechnicianSettings = {}));
//# sourceMappingURL=TechnicianSettings.js.map